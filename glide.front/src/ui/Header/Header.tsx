import type { FC } from 'react'

import {
  Button,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from '@heroui/react'
import { ThemeSwitch } from 'shared/ui'

export const Header: FC = () => {
  return (
    <Navbar>
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
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}
