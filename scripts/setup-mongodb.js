const { MongoClient } = require('mongodb');
require('dotenv').config({ path: '.env.local' });

// Configuración de MongoDB
const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB || 'cfdiapi';

async function setupMongoDB() {
  let client;

  try {
    // Verificar que la URI esté configurada
    if (!uri) {
      console.error('❌ Error: MONGODB_URI no está configurada');
      console.log('📝 Por favor configura MONGODB_URI en tu archivo .env.local');
      console.log('📖 Consulta docs/MONGODB_ATLAS_SETUP.md para más información');
      process.exit(1);
    }

    // Verificar que no sea la URI de ejemplo
    if (uri.includes('<username>') || uri.includes('<password>') || uri.includes('<cluster-name>')) {
      console.error('❌ Error: MONGODB_URI contiene valores de ejemplo');
      console.log('📝 Por favor reemplaza los valores de ejemplo con tu información real');
      console.log('📖 Consulta docs/MONGODB_ATLAS_SETUP.md para más información');
      process.exit(1);
    }

    console.log('🔄 Conectando a MongoDB Atlas...');
    console.log(`📍 Base de datos: ${dbName}`);

    client = new MongoClient(uri, {
      serverSelectionTimeoutMS: 10000, // 10 segundos timeout
      connectTimeoutMS: 10000,
    });

    await client.connect();

    console.log('✅ Conexión exitosa a MongoDB');

    const db = client.db(dbName);

    // Crear la colección si no existe
    const collections = await db.listCollections().toArray();
    const collectionExists = collections.some(col => col.name === 'consultas_cfdi');

    if (!collectionExists) {
      console.log('🔄 Creando colección "consultas_cfdi"...');
      await db.createCollection('consultas_cfdi');
      console.log('✅ Colección "consultas_cfdi" creada');
    } else {
      console.log('ℹ️  La colección "consultas_cfdi" ya existe');
    }

    // Crear índices para mejorar el rendimiento
    console.log('🔄 Creando índices...');
    const collection = db.collection('consultas_cfdi');

    // Índice por timestamp para consultas por fecha
    await collection.createIndex({ timestamp: -1 });

    // Índice por IP para análisis de uso
    await collection.createIndex({ 'input.ip': 1 });

    // Índice por éxito/error para estadísticas
    await collection.createIndex({ 'response.success': 1 });

    // Índice compuesto para consultas específicas
    await collection.createIndex({
      'input.values': 1,
      timestamp: -1
    });

    console.log('✅ Índices creados correctamente');

    // Insertar un documento de prueba
    console.log('🔄 Insertando documento de prueba...');
    const testDoc = {
      timestamp: new Date(),
      input: {
        slug: ['test', 'test', '0.00', 'test'],
        values: ['test', 'test', '0.00', 'test'],
        ip: '127.0.0.1',
        userAgent: 'MongoDB Setup Script'
      },
      response: {
        success: true,
        data: { test: 'Setup successful' },
        error: null
      },
      processingTime: 0,
      isTestDocument: true
    };

    const result = await collection.insertOne(testDoc);
    console.log('✅ Documento de prueba insertado con ID:', result.insertedId);

    // Verificar que podemos leer el documento
    const count = await collection.countDocuments();
    console.log(`📊 Total de documentos en la colección: ${count}`);

    console.log('\n🎉 ¡MongoDB configurado correctamente!');
    console.log(`📍 Base de datos: ${dbName}`);
    console.log(`📍 Colección: consultas_cfdi`);
    console.log(`📍 URI: ${uri}`);

  } catch (error) {
    console.error('❌ Error al configurar MongoDB:', error);
    process.exit(1);
  } finally {
    if (client) {
      await client.close();
      console.log('🔌 Conexión cerrada');
    }
  }
}

// Ejecutar el script
setupMongoDB();
