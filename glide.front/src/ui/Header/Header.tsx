import {
  Button,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from '@heroui/react'
import type { FC } from 'react'
import { ThemeSwitch } from 'shared/ui'

export const Header: FC = () => {
  return (
    <Navbar className="col-span-3" classNames={{ wrapper: 'max-w-6xl' }}>
      <NavbarBrand>Glide</NavbarBrand>
      <NavbarContent justify="center">
        <NavbarItem>
          <Link>Бэклог</Link>
        </NavbarItem>
        <NavbarItem>
          <Link>Команда</Link>
        </NavbarItem>
        <NavbarItem>
          <Link>Статистика</Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <ThemeSwitch />
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Войти
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}
