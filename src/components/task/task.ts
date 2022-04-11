import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import useTasksController from '@/controllers/useTasksController'
import { TaskInfo } from '@/types/task.model'
import { Currency } from '@/types/money.model'  

export default function useTask() {
  const {add_Task} = useTasksController()
  const router = useRouter() 

  const task = reactive<TaskInfo>({
    title: '',
    description: '',
    budget: {
      value: 0,
      currency: Currency.USD,
    },
    platforms: 'INSTAGRAM',
    filesIds: ''
  })

  const clear = () => {
    task.title = '',
    task.description = '',
    task.budget = { 
        value: 0,
        currency: Currency.USD
    },
    task.platforms = 'INSTAGRAM',
    task.filesIds = ''
  }

  const addTask = () => {
    add_Task(task)
      .then(() => {
        router.push({ name: 'Dashboard' })
      })
      .catch(() => {
        clear()
      })
  }

  return {
    task,
    addTask,
    clear
  }
}
