import { Switch } from '@heroui/react'
import { useTheme } from '@heroui/use-theme'
import type { FC } from 'react'

export const ThemeSwitch: FC = () => {
  const { setTheme, theme } = useTheme()
  return (
    <Switch
      isSelected={theme === 'dark'}
      onValueChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    />
  )
}
