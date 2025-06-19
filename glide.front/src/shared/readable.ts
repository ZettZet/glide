import type { TaskType } from 'entities/tasks'

export function getReadableType(type: TaskType) {
  switch (type) {
    case 'analysis':
      return '⚙️'
    case 'research':
      return '🔬'
    case 'development':
      return '🛠️'
  }
}
