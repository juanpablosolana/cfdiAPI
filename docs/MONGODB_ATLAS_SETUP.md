# Configuración de MongoDB Atlas para CFDI API

Esta guía te ayudará a configurar MongoDB Atlas (cloud) para guardar los logs de las consultas CFDI.

## Paso 1: Crear cuenta en MongoDB Atlas

1. Ve a [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Haz clic en "Try Free"
3. Crea tu cuenta o inicia sesión

## Paso 2: Crear un Cluster

1. **Crear nuevo proyecto** (si es necesario)
   - Nombre del proyecto: `CFDI API`

2. **Crear cluster gratuito**
   - Selecciona "Build a Database"
   - Elige "M0 Sandbox" (gratuito)
   - Proveedor: AWS, Google Cloud o Azure
   - Región: Elige la más cercana a tu ubicación
   - Nombre del cluster: `cfdi-cluster` (o el que prefieras)

## Paso 3: Configurar acceso a la base de datos

1. **Crear usuario de base de datos**
   - Ve a "Database Access" en el menú lateral
   - Haz clic en "Add New Database User"
   - Método de autenticación: Password
   - Username: `cfdi-user` (o el que prefieras)
   - Password: Genera una contraseña segura (guárdala)
   - Database User Privileges: "Read and write to any database"
   - Haz clic en "Add User"

2. **Configurar acceso de red**
   - Ve a "Network Access" en el menú lateral
   - Haz clic en "Add IP Address"
   - Para desarrollo: "Allow Access from Anywhere" (0.0.0.0/0)
   - Para producción: Agrega solo las IPs específicas de tu servidor
   - Haz clic en "Confirm"

## Paso 4: Obtener cadena de conexión

1. Ve a "Database" en el menú lateral
2. Haz clic en "Connect" en tu cluster
3. Selecciona "Connect your application"
4. Driver: Node.js, Version: 4.1 or later
5. Copia la cadena de conexión, se verá así:
   ```
   mongodb+srv://<username>:<password>@cfdi-cluster.xxxxx.mongodb.net/?retryWrites=true&w=majority
   ```

## Paso 5: Configurar variables de entorno

1. **Actualizar .env.local**
   ```env
   # Reemplaza con tu información real
   MONGODB_URI=mongodb+srv://cfdi-user:tu_password@cfdi-cluster.xxxxx.mongodb.net/cfdiapi?retryWrites=true&w=majority
   MONGODB_DB=cfdiapi
   ```

   **Importante**: 
   - Reemplaza `cfdi-user` con tu username
   - Reemplaza `tu_password` con tu password
   - Reemplaza `cfdi-cluster.xxxxx` con tu cluster real
   - Agrega `/cfdiapi` antes del `?` para especificar la base de datos

## Paso 6: Probar la conexión

Ejecuta el script de configuración:
```bash
npm run setup-mongodb
```

Deberías ver algo como:
```
🔄 Conectando a MongoDB...
✅ Conexión exitosa a MongoDB
🔄 Creando colección "consultas_cfdi"...
✅ Colección "consultas_cfdi" creada
🔄 Creando índices...
✅ Índices creados correctamente
🎉 ¡MongoDB configurado correctamente!
```

## Paso 7: Verificar en Atlas Dashboard

1. Ve a tu cluster en MongoDB Atlas
2. Haz clic en "Browse Collections"
3. Deberías ver la base de datos `cfdiapi` con la colección `consultas_cfdi`
4. Debería haber un documento de prueba

## Configuración para producción

Para producción, actualiza las variables de entorno en tu plataforma de hosting:

### Vercel
```bash
vercel env add MONGODB_URI
vercel env add MONGODB_DB
```

### Netlify
Agrega en Site settings > Environment variables:
- `MONGODB_URI`: tu cadena de conexión
- `MONGODB_DB`: `cfdiapi`

### Heroku
```bash
heroku config:set MONGODB_URI="tu_cadena_de_conexion"
heroku config:set MONGODB_DB="cfdiapi"
```

## Seguridad y mejores prácticas

1. **Nunca commits las credenciales**
   - El archivo `.env.local` está en `.gitignore`
   - Usa variables de entorno en producción

2. **Rotar contraseñas regularmente**
   - Cambia la contraseña del usuario de BD periódicamente

3. **Configurar IP whitelist específica en producción**
   - No uses "Allow Access from Anywhere" en producción
   - Agrega solo las IPs de tus servidores

4. **Monitorear uso**
   - Atlas tiene un tier gratuito con límites
   - Monitorea el uso en el dashboard

## Límites del tier gratuito (M0)

- **Storage**: 512 MB
- **RAM**: Compartida
- **Conexiones**: 500 máximo
- **Clusters**: 1 por proyecto

Para la mayoría de APIs pequeñas a medianas, esto es suficiente.

## Troubleshooting

### Error de autenticación
- Verifica username y password
- Asegúrate de que el usuario tenga permisos

### Error de conexión de red
- Verifica que tu IP esté en la whitelist
- Revisa la configuración de Network Access

### Error de base de datos no encontrada
- La base de datos se crea automáticamente al insertar el primer documento
- Verifica que el nombre en MONGODB_DB coincida con la URI

### Límites excedidos
- Revisa el uso en el dashboard de Atlas
- Considera upgrade a un tier pagado si es necesario
