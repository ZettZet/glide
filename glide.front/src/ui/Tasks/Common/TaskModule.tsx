import type { Task } from 'entities/tasks'
import type { FC } from 'react'

export const TaskModule: FC<{
  module: Task['module']
  direction: Task['direction']
}> = (task) => {
  return (
    <h2 className="text-large">
      {task.module} | {task.direction}
    </h2>
  )
}
