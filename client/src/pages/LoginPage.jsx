import { useForm } from 'react-hook-form'
import { useAuth } from '../context/AuthContext'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const { signin, errors: signinErrors, isAuthenticated } = useAuth()
  const navigate = useNavigate()

  const onSubmit = handleSubmit((data) => {
    signin(data)
  })

  useEffect(() => {
    if (isAuthenticated) navigate('/tasks')
  }, [isAuthenticated])

  return (
    <div className='flex h-[calc(100vh-100px)] items-center justify-center'>
      <div className='bg-zinc-800 max-w-md w-full p-10 rounded-md'>
        {signinErrors.map((error, i) => (
          <div key={i} className='bg-red-500 p-2 text-white text-center my-2'>
            {error}
          </div>
        ))}
        <h1 className='text-2xl font-bold'>Login</h1>
        <form onSubmit={onSubmit}>
          <input
            type='email'
            {...register('email', { required: true })}
            placeholder='Email'
            className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
          />

          {errors.email && <p className='text-red-500'>username is required</p>}
          <input
            type='password'
            {...register('password', { required: true })}
            placeholder='Password'
            className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
          />
          {errors.password && (
            <p className='text-red-500'>username is required</p>
          )}

          <button type='submit'>Login</button>
        </form>

        <p className='flex gap-x-2 justify-between'>
          Dont have an account?
          <Link to='/register' className='text-sky-500'>
            Register
          </Link>
        </p>
      </div>
    </div>
  )
}

export default LoginPage
