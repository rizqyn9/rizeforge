import { Outlet } from 'react-router'

import { Header } from '~/components/block/header'

export default function Layout() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}
