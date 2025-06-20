import type { Task, TaskId } from 'entities/tasks'
import { atom } from 'jotai'

const mockTasks = Array.from<unknown, Task>({ length: 20 }, (_, index) => ({
  comments: [],
  description: 'lorem',
  direction: 'system',
  executors: {},
  id: index.toString(),
  mainName: `Какое-то длинное название ${index}`,
  module: 'inter',
  priority: 5,
  sprint: {
    from: new Date(),
    to: new Date(),
    number: 0,
  },
  taskType: ['analysis'],
}))

export const tasksAtom = atom<Task[]>(mockTasks)

export const activeTaskAtom = atom<TaskId | null>(null)

export const getActiveTaskAtom = atom((get) => {
  const activeTaskId = get(activeTaskAtom)
  return get(tasksAtom).find((item) => item.id === activeTaskId)
})
