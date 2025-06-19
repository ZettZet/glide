import { Input, Listbox, ListboxItem } from '@heroui/react'
import type { TaskId } from 'entities/tasks'
import { useAtomValue, useSetAtom } from 'jotai'
import type { FC } from 'react'
import { activeTaskAtom, tasksAtom } from 'state/tasks'
import { TaskItem } from './TaskItem'

export const TaskList: FC = () => {
  const tasks = useAtomValue(tasksAtom)
  const setActiveTaskId = useSetAtom(activeTaskAtom)

  return (
    <div className="flex flex-col min-h-full">
      <Input placeholder="Поиск" />
      <Listbox
        className="overflow-y-auto"
        items={tasks}
        selectionMode="single"
        onSelectionChange={(keys) => {
          if (keys instanceof Set) {
            setActiveTaskId(Array.from(keys)[0] as TaskId)
          }
        }}
        aria-label="Список задач"
        selectionBehavior="replace"
      >
        {(task) => (
          <ListboxItem key={task.id}>
            <TaskItem task={task} />
          </ListboxItem>
        )}
      </Listbox>
    </div>
  )
}
