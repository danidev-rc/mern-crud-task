# MERN CRUD Auth

Este proyecto es una implementación básica de una aplicación CRUD (Crear, Leer, Actualizar, Eliminar) con autenticación utilizando el stack MERN (MongoDB, Express, React, Node.js).

## Dependencias

### Dependencias Principales

1. **bcryptjs**: `^2.4.3`
   - **Uso**: Para encriptar contraseñas antes de almacenarlas en la base de datos y para comparar contraseñas en el proceso de inicio de sesión.

2. **cookie-parser**: `^1.4.6`
   - **Uso**: Para analizar y manejar cookies, lo cual es esencial para gestionar las sesiones de los usuarios.

3. **express**: `^4.19.2`
   - **Uso**: Para configurar el servidor, manejar las rutas y gestionar middleware en la aplicación.

4. **jsonwebtoken**: `^9.0.2`
   - **Uso**: Para generar y verificar tokens JWT usados en la autenticación de usuarios.

5. **mongoose**: `^8.5.1`
   - **Uso**: Para interactuar con MongoDB, definir esquemas y gestionar relaciones de datos.

6. **morgan**: `^1.10.0`
   - **Uso**: Para registrar las solicitudes HTTP al servidor, ayudando en la depuración y monitoreo.

7. **zod**: `^3.23.8`
   - **Uso**: Para validar y analizar datos de entrada, asegurando que los datos cumplan con el formato esperado.

### Dependencias de Desarrollo

1. **nodemon**: `^3.1.4`
   - **Uso**: Para reiniciar automáticamente el servidor cuando se detecten cambios en los archivos durante el desarrollo.

2. **standart**: `^6.1.0`
   - **Uso**: Para asegurar que el código cumpla con un estilo consistente y para detectar y corregir errores comunes de programación.

## Instalación

Para instalar las dependencias del proyecto, ejecuta el siguiente comando:

```bash
pnpm install
```

```bash
pnpm start
```

## PORT Backend:

> [!TIP]
> http://localhost:4000