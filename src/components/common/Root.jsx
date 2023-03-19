import { Outlet } from 'react-router-dom'
import ScrollToTop from '../../helpers/ScrollToTop'
import Footer from './Footer'
import NavigationBar from './NavigationBar'

export default function Root() {
  return (
    <>
      <ScrollToTop />
      <NavigationBar />
      <Outlet />
      <Footer />
    </>
  )
}
