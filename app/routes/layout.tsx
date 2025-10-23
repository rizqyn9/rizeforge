import { Outlet } from 'react-router'

import { Header } from '~/components/block/header'

export default function Layout() {
  return (
    <div className='flex min-h-lvh flex-col bg-background text-foreground'>
      <Header />
      <Outlet />
    </div>
  )
}
