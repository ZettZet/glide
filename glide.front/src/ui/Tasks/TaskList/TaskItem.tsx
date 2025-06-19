import type { FC } from 'react'
import type { Task } from 'entities/tasks'

import { TaskTypeIcon } from './TaskType'
import { For } from 'shared/ui'
import { TaskModule } from '../Common'

export const TaskItem: FC<{ task: Task }> = ({ task }) => {
  const totalLaborCost = Object.values(task.executors).reduce((acc, item) => {
    acc += item.laborCost
    return acc
  }, 0)

  return (
    <>
      <div>
        <span>
          <h3>{task.mainName}</h3>
          <TaskModule direction={task.direction} module={task.module} />
        </span>
        <h4>
          <span>{task.priority}</span>/<span>{totalLaborCost} дней</span>
        </h4>
      </div>
      <For each={task.taskType}>
        {(type) => <TaskTypeIcon key={type} taskType={type} />}
      </For>
    </>
  )
}
