import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017';
const dbName = process.env.MONGODB_DB || 'cfdiapi';

let client;
let clientPromise;

if (process.env.NODE_ENV === 'development') {
  // En desarrollo, usa una variable global para preservar el valor
  // a través de los reloads de módulos causados por HMR (Hot Module Replacement).
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // En producción, es mejor no usar una variable global.
  client = new MongoClient(uri);
  clientPromise = client.connect();
}

// Función para obtener la base de datos
export async function getDatabase() {
  const client = await clientPromise;
  return client.db(dbName);
}

// Función para guardar logs de consultas CFDI
export async function saveConsultaLog(inputData, responseData) {
  try {
    const db = await getDatabase();
    const collection = db.collection('consultas_cfdi');
    
    const logEntry = {
      timestamp: new Date(),
      input: {
        slug: inputData.slug,
        values: inputData.values,
        ip: inputData.ip || null,
        userAgent: inputData.userAgent || null
      },
      response: {
        success: responseData.success,
        data: responseData.data,
        error: responseData.error || null
      },
      processingTime: responseData.processingTime || null
    };
    
    const result = await collection.insertOne(logEntry);
    console.log('Log guardado con ID:', result.insertedId);
    return result;
  } catch (error) {
    console.error('Error al guardar en MongoDB:', error);
    throw error;
  }
}

export default clientPromise;
