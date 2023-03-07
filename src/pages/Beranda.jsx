import Footer from '../components/common/Footer'
import Hero from '../components/common/Hero'
import NavigationBar from '../components/common/NavigationBar'
import Kabinet from '../components/content/Kabinet'
import VisiMisi from '../components/content/VisiMisi'

function Beranda() {
  return (
    <>
      <NavigationBar />
      <Hero />
      <Kabinet />
      <VisiMisi />
      <Footer />
    </>
  )
}

export default Beranda
