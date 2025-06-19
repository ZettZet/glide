import { useAtomValue } from 'jotai'
import type { FC } from 'react'
import { getActiveTaskAtom } from 'state/tasks'

export const TaskForm: FC = () => {
  const task = useAtomValue(getActiveTaskAtom)
  return (
    <section>
      <fieldset>
        <select></select>
        <select></select>
      </fieldset>
    </section>
  )
}
