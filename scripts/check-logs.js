const { MongoClient } = require('mongodb');
require('dotenv').config({ path: '.env.local' });

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB || 'cfdiapi';

async function checkLogs() {
  let client;
  
  try {
    console.log('🔄 Conectando a MongoDB...');
    client = new MongoClient(uri);
    await client.connect();
    
    const db = client.db(dbName);
    const collection = db.collection('consultas_cfdi');
    
    // Obtener los últimos 5 logs
    console.log('📊 Últimos 5 logs de consultas:');
    const logs = await collection
      .find({})
      .sort({ timestamp: -1 })
      .limit(5)
      .toArray();
    
    logs.forEach((log, index) => {
      console.log(`\n--- Log ${index + 1} ---`);
      console.log(`🕐 Timestamp: ${log.timestamp}`);
      console.log(`📥 Input: ${JSON.stringify(log.input.values)}`);
      console.log(`✅ Success: ${log.response.success}`);
      console.log(`🌐 IP: ${log.input.ip}`);
      console.log(`⏱️  Processing Time: ${log.processingTime}ms`);
      if (log.response.error) {
        console.log(`❌ Error: ${log.response.error}`);
      }
    });
    
    // Estadísticas generales
    const totalLogs = await collection.countDocuments();
    const successfulLogs = await collection.countDocuments({ 'response.success': true });
    const errorLogs = await collection.countDocuments({ 'response.success': false });
    
    console.log('\n📈 Estadísticas generales:');
    console.log(`📊 Total de consultas: ${totalLogs}`);
    console.log(`✅ Exitosas: ${successfulLogs}`);
    console.log(`❌ Con errores: ${errorLogs}`);
    console.log(`📊 Tasa de éxito: ${((successfulLogs / totalLogs) * 100).toFixed(2)}%`);
    
    // Tiempo promedio de procesamiento
    const avgProcessingTime = await collection.aggregate([
      {
        $group: {
          _id: null,
          avgTime: { $avg: '$processingTime' },
          maxTime: { $max: '$processingTime' },
          minTime: { $min: '$processingTime' }
        }
      }
    ]).toArray();
    
    if (avgProcessingTime.length > 0) {
      const stats = avgProcessingTime[0];
      console.log('\n⏱️  Estadísticas de tiempo:');
      console.log(`📊 Tiempo promedio: ${stats.avgTime.toFixed(2)}ms`);
      console.log(`📊 Tiempo máximo: ${stats.maxTime}ms`);
      console.log(`📊 Tiempo mínimo: ${stats.minTime}ms`);
    }
    
  } catch (error) {
    console.error('❌ Error:', error);
  } finally {
    if (client) {
      await client.close();
    }
  }
}

checkLogs();
