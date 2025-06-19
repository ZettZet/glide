import { TaskForm, TaskList } from 'ui/Tasks'
import { Header } from 'ui/Header'
import { HeroUIProvider } from '@heroui/react'

export function App() {
  return (
    <HeroUIProvider>
      <main>
        <Header />
        <TaskList />
        <TaskForm />
      </main>
    </HeroUIProvider>
  )
}
