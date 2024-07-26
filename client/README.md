# MERN CRUD Task Frontend Documentation

Este proyecto es parte del frontend de una aplicación CRUD (Crear, Leer, Actualizar, Eliminar) con autenticación, desarrollada con React. A continuación, se detallan las librerías utilizadas y las rutas disponibles en la aplicación.

## Librerías Implementadas

1. **react**: Biblioteca para construir interfaces de usuario.
2. **react-dom**: Sirve como el punto de entrada al DOM para React.
3. **react-router-dom**: Utilizado para manejar el enrutamiento en aplicaciones React.
4. **axios**: Cliente HTTP basado en promesas para hacer solicitudes a la API.
5. **dayjs**: Biblioteca ligera para manipular y formatear fechas.
6. **react-hook-form**: Biblioteca para manejar formularios con React, utilizando Hooks.
7. **react-toastify**: Permite agregar notificaciones personalizadas en la aplicación de manera sencilla.
8. **vite**: Herramienta de construcción que ofrece un servidor de desarrollo rápido y un conjunto de optimizaciones para la producción.

## Rutas

La aplicación utiliza `react-router-dom` para manejar las rutas. Las rutas disponibles son:

- `/`: Página de inicio que muestra información general.
- `/login`: Página de inicio de sesión donde los usuarios pueden ingresar a la aplicación.
- `/register`: Página de registro para que los nuevos usuarios creen una cuenta.
- `/tasks`: Muestra todas las tareas creadas por el usuario autenticado. Requiere autenticación.
- `/add-task`: Formulario para crear una nueva tarea. Requiere autenticación.
- `/tasks/:id`: Formulario para editar una tarea existente. Requiere autenticación.
- `/profile`: Página de perfil del usuario. Requiere autenticación.

## Acceso a las Rutas

Para acceder a las rutas que requieren autenticación (`/tasks`, `/add-task`, `/tasks/:id`, `/profile`), el usuario debe estar autenticado. Si intenta acceder sin autenticación, será redirigido a la página de inicio de sesión (`/login`).

### Ejemplo de Implementación de Rutas en App.jsx

```jsx
<BrowserRouter>
  <Routes>
    <Route path='/' element={<HomePage />} />
    <Route path='/login' element={<LoginPage />} />
    <Route path='/register' element={<RegisterPage />} />
    <Route element={<ProtectedRoute />}>
      <Route path='/tasks' element={<TasksPage />} />
      <Route path='/add-task' element={<TaskFormPage />} />
      <Route path='/tasks/:id' element={<TaskFormPage />} />
      <Route path='/profile' element={<ProfilePage />} />
    </Route>
  </Routes>
</BrowserRouter>
```

### Ejemplo de ProtectedRoute

```jsx
function ProtectedRoute() {
  const { isAuthenticated, loading } = useAuth()

  if (loading) return <h1>Loading...</h1>
  if (!isAuthenticated && !loading) return <Navigate to='/login' replace />

  return <Outlet />
}
```

Este componente ProtectedRoute verifica si el usuario está autenticado antes de permitirle acceder a ciertas rutas. Si no está autenticado, se redirige al usuario a la página de inicio de sesión.
