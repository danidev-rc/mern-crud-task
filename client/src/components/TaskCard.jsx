import { useTasks } from '../context/TasksContext'
import { Link } from 'react-router-dom'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
dayjs.extend(utc)

function TaskCard({ task }) {
  const { deleteTask } = useTasks()

  return (
    <div className='bg-zinc-800 max-w-md w-full p-6 rounded-lg shadow-lg text-slate-200 relative overflow-hidden transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl hover:bg-zinc-700 hover:text-slate-300 hover:border-2 hover:border-slate-300'>
      <header className='flex justify-between items-center mb-4'>
        <h1 className='text-2xl font-bold text-white'>{task.title}</h1>
      </header>
      <div className='flex justify-end'>
        <span className='bg-blue-600 text-white px-2 py-1 text-sm rounded-md mb-2 inline-block'>
          {dayjs(task.date).utc().format('DD/MM/YYYY')}
        </span>
      </div>
      <p className='text-slate-300 mb-6'>{task.description}</p>
      <div className='flex justify-end gap-4 items-center'>
        <button
          onClick={() => deleteTask(task._id)}
          className='bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md transition duration-300 ease-in-out'
        >
          Delete
        </button>
        <Link
          to={`/tasks/${task._id}`}
          className='bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition duration-300 ease-in-out'
        >
          Edit
        </Link>
      </div>
    </div>
  )
}

export default TaskCard
