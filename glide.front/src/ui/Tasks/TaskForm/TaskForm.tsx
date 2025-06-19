import { Select } from '@heroui/react'
import { useAtomValue } from 'jotai'
import type { FC } from 'react'
import { getActiveTaskAtom } from 'state/tasks'

export const TaskForm: FC = () => {
  const task = useAtomValue(getActiveTaskAtom)
  return (
    <section>
      <Select />
    </section>
  )
}
