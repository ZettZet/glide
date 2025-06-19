import { useAtomValue } from 'jotai'
import type { FC } from 'react'
import { tasksAtom } from 'state/tasks'
import { TaskItem } from './TaskItem'
import css from './TaskList.module.css'
import { Input, Listbox, ListboxItem } from '@heroui/react'

export const TaskList: FC = () => {
  const tasks = useAtomValue(tasksAtom)

  return (
    <div className={css.listContainer}>
      <Input placeholder="Поиск" />
      <Listbox
        className={css.list}
        items={tasks}
        classNames={{ list: css.list }}
      >
        {(task) => (
          <ListboxItem>
            <TaskItem key={task.id} task={task} />
          </ListboxItem>
        )}
      </Listbox>
    </div>
  )
}
