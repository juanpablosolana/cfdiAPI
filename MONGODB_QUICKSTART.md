# 🚀 MongoDB Atlas - Configuración Rápida

## ✅ Lo que ya está hecho

- ✅ MongoDB driver instalado
- ✅ Código de la API modificado para guardar logs
- ✅ Scripts de configuración creados
- ✅ Documentación completa

## 🔧 Lo que necesitas hacer

### 1. Crear cuenta en MongoDB Atlas

1. Ve a [https://www.mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
2. Crea una cuenta gratuita
3. Crea un nuevo proyecto llamado "CFDI API"

### 2. Crear cluster gratuito

1. Haz clic en "Build a Database"
2. Selecciona **M0 Sandbox (FREE)**
3. Elige proveedor y región (recomendado: AWS, región más cercana)
4. Nombre del cluster: `cfdi-cluster`
5. Haz clic en "Create Cluster"

### 3. Configurar acceso

**Usuario de base de datos:**
1. Ve a "Database Access" → "Add New Database User"
2. Username: `cfdi-user`
3. Password: Genera una contraseña segura (¡guárdala!)
4. Privileges: "Read and write to any database"

**Acceso de red:**
1. Ve a "Network Access" → "Add IP Address"
2. Para desarrollo: "Allow Access from Anywhere" (0.0.0.0/0)

### 4. Obtener cadena de conexión

1. Ve a "Database" → Haz clic en "Connect" en tu cluster
2. Selecciona "Connect your application"
3. Copia la cadena de conexión

### 5. Configurar variables de entorno

Edita el archivo `.env.local` y reemplaza con tu información real:

```env
MONGODB_URI=mongodb+srv://cfdi-user:TU_PASSWORD@cfdi-cluster.xxxxx.mongodb.net/cfdiapi?retryWrites=true&w=majority
MONGODB_DB=cfdiapi
```

**⚠️ Importante:** 
- Reemplaza `TU_PASSWORD` con tu contraseña real
- Reemplaza `cfdi-cluster.xxxxx` con tu cluster real
- Asegúrate de incluir `/cfdiapi` antes del `?`

### 6. Probar la configuración

Ejecuta en la terminal:
```bash
npm run setup-mongodb
```

Si todo está bien, verás:
```
🔄 Conectando a MongoDB Atlas...
✅ Conexión exitosa a MongoDB
✅ Colección "consultas_cfdi" creada
✅ Índices creados correctamente
🎉 ¡MongoDB configurado correctamente!
```

### 7. Probar la API

Inicia el servidor:
```bash
npm run dev
```

Haz una petición de prueba:
```bash
curl http://localhost:3000/api/estatus/test/test/0.00/test
```

### 8. Verificar en Atlas

1. Ve a tu cluster en MongoDB Atlas
2. Haz clic en "Browse Collections"
3. Deberías ver la base de datos `cfdiapi` con datos

## 🆘 Si algo no funciona

### Error de conexión
- Verifica que la URI esté correcta
- Asegúrate de que tu IP esté en la whitelist
- Revisa username y password

### Error "MONGODB_URI contiene valores de ejemplo"
- Asegúrate de reemplazar `<username>`, `<password>`, etc. con valores reales

### Necesitas ayuda
- Consulta `docs/MONGODB_ATLAS_SETUP.md` para guía detallada
- Revisa la consola para mensajes de error específicos

## 📊 Qué se guarda en MongoDB

Cada consulta a la API guardará:
- Valores de entrada (RFC emisor, receptor, total, folio)
- Respuesta de la API del SAT
- IP del cliente
- User Agent
- Timestamp
- Tiempo de procesamiento
- Estado de éxito/error

## 🎯 Próximos pasos

Una vez configurado, podrás:
- Ver estadísticas de uso en MongoDB Atlas
- Analizar patrones de consultas
- Monitorear errores y rendimiento
- Crear reportes de uso
