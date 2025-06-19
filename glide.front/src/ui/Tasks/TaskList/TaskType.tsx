import type { TaskType } from 'entities/tasks'
import type { FC } from 'react'

export function getTaskTypeIcon(type: TaskType) {
  switch (type) {
    case 'analysis':
      return '⚙️'
    case 'research':
      return '🔬'
    case 'development':
      return '🛠️'
  }
}

export function getTaskTypeReadable(type: TaskType) {
  switch (type) {
    case 'analysis':
      return 'Аналитика'
    case 'research':
      return 'R`n`D'
    case 'development':
      return 'Продуктивизация'
  }
}

export const TaskTypeIcon: FC<{ taskType: TaskType }> = ({ taskType }) => {
  return <span>{getTaskTypeIcon(taskType)}</span>
}
