import type { Task } from 'entities/tasks'
import type { FC } from 'react'
import { For } from 'shared/ui'
import { TaskModule } from '../Common'
import { TaskTypeIcon } from './TaskType'

export const TaskItem: FC<{ task: Task }> = ({ task }) => {
  const totalLaborCost = Object.values(task.executors).reduce((acc, item) => {
    acc += item.laborCost
    return acc
  }, 0)

  return (
    <>
      <span>
        <h1 className="text-xl ">{task.mainName}</h1>
        <TaskModule direction={task.direction} module={task.module} />
      </span>
      <h4>
        <span>{task.priority}</span>/<span>{totalLaborCost} дней</span>
      </h4>
      <For each={task.taskType}>
        {(type) => <TaskTypeIcon key={type} taskType={type} />}
      </For>
    </>
  )
}
