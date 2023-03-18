import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import NavigationBar from './NavigationBar'

export default function Root() {
  return (
    <>
      <NavigationBar />
      <Outlet />
      <Footer />
    </>
  )
}
