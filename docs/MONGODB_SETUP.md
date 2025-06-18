# Configuración de MongoDB para CFDI API

Este documento explica cómo configurar MongoDB para guardar los logs de las consultas CFDI.

## Instalación de MongoDB

### Opción 1: MongoDB Local

1. **Instalar MongoDB Community Edition**
   - **macOS**: `brew install mongodb-community`
   - **Ubuntu**: Seguir la [guía oficial](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/)
   - **Windows**: Descargar desde [mongodb.com](https://www.mongodb.com/try/download/community)

2. **Iniciar MongoDB**
   ```bash
   # macOS/Linux
   brew services start mongodb-community
   # o
   mongod --config /usr/local/etc/mongod.conf

   # Windows
   net start MongoDB
   ```

### Opción 2: MongoDB Atlas (Cloud)

1. Crear cuenta en [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Crear un cluster gratuito
3. Obtener la cadena de conexión
4. Configurar las variables de entorno

## Configuración

1. **Variables de entorno**
   
   Copia el archivo `.env.example` a `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

   Configura las variables:
   ```env
   # Para MongoDB local
   MONGODB_URI=mongodb://localhost:27017
   MONGODB_DB=cfdiapi

   # Para MongoDB Atlas
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/
   MONGODB_DB=cfdiapi
   ```

2. **Configurar la base de datos**
   
   Ejecuta el script de configuración:
   ```bash
   npm run setup-mongodb
   ```

   Este script:
   - Verifica la conexión a MongoDB
   - Crea la base de datos y colección si no existen
   - Configura índices para mejorar el rendimiento
   - Inserta un documento de prueba

## Estructura de los datos

Los logs se guardan en la colección `consultas_cfdi` con la siguiente estructura:

```javascript
{
  _id: ObjectId("..."),
  timestamp: ISODate("2024-01-01T12:00:00.000Z"),
  input: {
    slug: ["rfc_emisor", "rfc_receptor", "total", "folio_fiscal"],
    values: ["rfc_emisor", "rfc_receptor", "total", "folio_fiscal"],
    ip: "192.168.1.1",
    userAgent: "Mozilla/5.0..."
  },
  response: {
    success: true,
    data: { /* respuesta de la API SAT */ },
    error: null
  },
  processingTime: 1250 // milisegundos
}
```

## Índices creados

- `timestamp: -1` - Para consultas por fecha
- `input.ip: 1` - Para análisis por IP
- `response.success: 1` - Para estadísticas de éxito/error
- `input.values: 1, timestamp: -1` - Para consultas específicas

## Consultas útiles

### Ver logs recientes
```javascript
db.consultas_cfdi.find().sort({timestamp: -1}).limit(10)
```

### Estadísticas de éxito
```javascript
db.consultas_cfdi.aggregate([
  {
    $group: {
      _id: "$response.success",
      count: { $sum: 1 }
    }
  }
])
```

### Consultas por IP
```javascript
db.consultas_cfdi.aggregate([
  {
    $group: {
      _id: "$input.ip",
      count: { $sum: 1 }
    }
  },
  { $sort: { count: -1 } }
])
```

### Tiempo promedio de procesamiento
```javascript
db.consultas_cfdi.aggregate([
  {
    $group: {
      _id: null,
      avgProcessingTime: { $avg: "$processingTime" },
      maxProcessingTime: { $max: "$processingTime" },
      minProcessingTime: { $min: "$processingTime" }
    }
  }
])
```

## Mantenimiento

### Limpiar logs antiguos
```javascript
// Eliminar logs de más de 30 días
db.consultas_cfdi.deleteMany({
  timestamp: {
    $lt: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000)
  }
})
```

### Crear backup
```bash
mongodump --db cfdiapi --collection consultas_cfdi --out backup/
```

### Restaurar backup
```bash
mongorestore --db cfdiapi backup/cfdiapi/
```

## Troubleshooting

### Error de conexión
- Verificar que MongoDB esté ejecutándose
- Comprobar la URI de conexión
- Verificar credenciales (si usas Atlas)

### Problemas de rendimiento
- Verificar que los índices estén creados
- Considerar agregar más índices según patrones de consulta
- Implementar TTL (Time To Live) para limpieza automática

### Espacio en disco
- Configurar rotación de logs
- Implementar archivado de datos antiguos
- Usar compresión en MongoDB
