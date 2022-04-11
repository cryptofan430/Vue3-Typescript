import { computed, Ref, ref } from 'vue'
import { TaskPublicInfo } from '@/types/task.model'

const myTask: Ref<TaskPublicInfo | null> = ref(null)

export default function useTaskStore() {
  const getMyTask = computed(() => myTask.value)

  const setMyTask = (data: TaskPublicInfo | null) => { 
    myTask.value = data
  }
  
  const reset = () => {
    setMyTask(null)
  }

  return {
    getMyTask,
    setMyTask,
    reset,
  }
}
