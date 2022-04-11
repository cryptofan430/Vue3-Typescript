import api from '@/services/api'
import useTaskStore from '@/store/task'
import { TaskInfo, TaskPublicInfo } from '@/types/task.model' 

const { setMyTask } = useTaskStore()

const add_Task = async (task: TaskInfo) => {
    const data = {
        title: task.title,
        description: task.description,
        budget: {
            value: task.budget.value,
            currency: task.budget.currency
        },
        platforms: [task.platforms],
        filesIds: [task.filesIds]
    }

    return await api.post<TaskPublicInfo>('tasks', data).then((response: { data: TaskPublicInfo | null }) => {
        setMyTask(response.data)
    })
}

const fetchTask = async () => { 
    const requestBody = {
        limit: 5,
        // olderThanId: '',
        // newerThanId: '',
        //skip: 0
    }
    return await api.get<TaskPublicInfo>('tasks/my', { params: requestBody } ).then((response: { data: TaskPublicInfo | null }) => {
      setMyTask(response.data)
    })
}

export default function useTasksController() {
    return {
        add_Task,
        fetchTask
    }
}
