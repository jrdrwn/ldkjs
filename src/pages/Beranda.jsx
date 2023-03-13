import Footer from '../components/common/Footer'
import Hero from '../components/common/Hero'
import NavigationBar from '../components/common/NavigationBar'
import Kabinet from '../components/content/Kabinet'
import ProgramUnggulan from '../components/content/ProgramUnggulan'
import SasaranStrategis from '../components/content/SasaranStrategis'
import VisiMisi from '../components/content/VisiMisi'

function Beranda() {
  return (
    <>
      <NavigationBar />
      <Hero />
      <Kabinet />
      <VisiMisi />
      <SasaranStrategis />
      <ProgramUnggulan />
      <Footer />
    </>
  )
}

export default Beranda
