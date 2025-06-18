# 🔒 Lista de Verificación de Seguridad

## ✅ Medidas implementadas

- ✅ `.env.local` está en `.gitignore`
- ✅ Credenciales no se suben al repositorio
- ✅ Variables de entorno separadas por ambiente

## 🚨 Acción recomendada: Rotar credenciales

Dado que las credenciales aparecieron en el output del script, es recomendable cambiarlas:

### 1. Cambiar contraseña en MongoDB Atlas

1. Ve a MongoDB Atlas Dashboard
2. Database Access → Encuentra tu usuario `pablo`
3. Haz clic en "Edit"
4. Cambia la contraseña
5. Guarda los cambios

### 2. Actualizar .env.local

Actualiza el archivo `.env.local` con la nueva contraseña:
```env
MONGODB_URI=mongodb+srv://pablo:NUEVA_PASSWORD@cluster0.gldvly5.mongodb.net/cfdiapi?retryWrites=true&w=majority&appName=Cluster0
MONGODB_DB=cfdiapi
```

### 3. Probar la nueva conexión

```bash
npm run setup-mongodb
```

## 🛡️ Mejores prácticas de seguridad

### Para desarrollo:
- ✅ Usar `.env.local` (nunca se sube a Git)
- ✅ No hardcodear credenciales en el código
- ✅ Usar contraseñas fuertes

### Para producción:
- 🔧 Usar variables de entorno del hosting (Vercel, Netlify, etc.)
- 🔧 Configurar IP whitelist específica en MongoDB Atlas
- 🔧 Rotar credenciales regularmente
- 🔧 Monitorear accesos en MongoDB Atlas

## 📋 Checklist de despliegue seguro

### Vercel:
```bash
vercel env add MONGODB_URI
vercel env add MONGODB_DB
```

### Netlify:
- Site settings → Environment variables
- Agregar `MONGODB_URI` y `MONGODB_DB`

### Variables que NUNCA deben estar en el código:
- ❌ Contraseñas de base de datos
- ❌ API keys
- ❌ Tokens de autenticación
- ❌ URLs de conexión con credenciales

## 🔍 Verificación regular

### Comandos para verificar seguridad:
```bash
# Verificar que .env.local no esté en Git
git status --ignored

# Verificar que no hay credenciales en el código
grep -r "mongodb+srv" --exclude-dir=node_modules --exclude=".env*" .

# Verificar archivos que se van a subir
git diff --cached
```

## 🚨 En caso de exposición accidental

Si las credenciales se exponen:

1. **Inmediatamente** cambiar contraseñas en MongoDB Atlas
2. Revisar logs de acceso en MongoDB Atlas
3. Crear nuevas credenciales
4. Actualizar todas las configuraciones
5. Considerar crear un nuevo cluster si es necesario
