import { useEffect } from 'react'
import { useTasks } from '../context/TasksContext'
import TaskCard from '../components/TaskCard'
function TasksPage() {
  const { getTasks, tasks } = useTasks()

  useEffect(() => {
    getTasks()
  }, [])

  if (tasks.length === 0)
    return <h1 className='text-white text-2xl'>No tasks</h1>

  return (
    <div className='grid grid-cols-3 gap-2'>
      {tasks.map((task, index) => (
        <TaskCard key={index} task={task} />
      ))}
    </div>
  )
}

export default TasksPage
