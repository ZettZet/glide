import { HeroUIProvider } from '@heroui/react'
import { Header } from 'ui/Header'
import { TaskForm, TaskList } from 'ui/Tasks'

export function App() {
  return (
    <HeroUIProvider>
      <main className="h-screen overflow-hidden grid grid-rows-[min-content_auto] grid-cols-[1fr_2fr_1fr]">
        <Header />
        <TaskList />
        <TaskForm />
      </main>
    </HeroUIProvider>
  )
}
