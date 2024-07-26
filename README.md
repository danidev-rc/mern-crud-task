# Documentación Backend - CRUD Authenticated and tasks

Este proyecto utiliza varias librerías para facilitar el desarrollo y la implementación de funcionalidades específicas en el backend, construido con Node.js y Express. A continuación, se detallan las librerías utilizadas y sus roles dentro del proyecto:

## Librerías Implementadas

### bcryptjs

- **Uso**: Utilizada para encriptar contraseñas antes de almacenarlas en la base de datos y para comparar contraseñas en el proceso de inicio de sesión.
- **Código**: No aplicable directamente, se usa en los controladores de usuario.

### cookie-parser

- **Uso**: Para analizar y manejar cookies, esencial para gestionar las sesiones de los usuarios.
- **Código**: `app.use(cookieParser())`

### express

- **Uso**: Framework principal para configurar el servidor, manejar las rutas y gestionar middleware.
- **Código**: `const app = express()`

### jsonwebtoken

- **Uso**: Para generar y verificar tokens JWT usados en la autenticación de usuarios.
- **Código**: Utilizado en los controladores de autenticación para generar y verificar tokens.

### mongoose

- **Uso**: Para interactuar con MongoDB, definir esquemas y gestionar relaciones de datos.
- **Código**: Se utiliza en todo el código que interactúa con la base de datos.

### morgan

- **Uso**: Para registrar las solicitudes HTTP al servidor, ayudando en la depuración y monitoreo.
- **Código**: `app.use(morgan('dev'))`

### zod

- **Uso**: Para validar y analizar datos de entrada, asegurando que los datos cumplan con el formato esperado.
- **Código**: Utilizado en los middleware de validación de esquemas.

## Rutas Disponibles

El backend expone varias rutas para la autenticación y gestión de tareas, protegidas mediante middleware de autenticación cuando es necesario.

### Autenticación

- **Registro**: POST `/api/register`
  - Registra un nuevo usuario.
- **Login**: POST `/api/login`
  - Autentica a un usuario y devuelve un token.
- **Logout**: POST `/api/logout`
  - Cierra la sesión del usuario.
- **Verificación**: GET `/api/verify`
  - Verifica el token del usuario.
- **Perfil**: GET `/api/profile`
  - Obtiene la información del perfil del usuario autenticado.

### Tareas

- **Listar Tareas**: GET `/api/tasks`
  - Obtiene todas las tareas del usuario autenticado.
- **Obtener Tarea**: GET `/api/tasks/:id`
  - Obtiene una tarea específica por su ID.
- **Crear Tarea**: POST `/api/tasks`
  - Crea una nueva tarea.
- **Actualizar Tarea**: PUT `/api/tasks/:id`
  - Actualiza una tarea existente.
- **Eliminar Tarea**: DELETE `/api/tasks/:id`
  - Elimina una tarea existente.

Para interactuar con estas rutas, se puede utilizar herramientas como Postman o integrarlas en el frontend del proyecto.
