import Hero from '../components/common/Hero'
import Kabinet from '../components/content/Kabinet'
import KegiatanTerbaru from '../components/content/KegiatanTerbaru'
import ProgramUnggulan from '../components/content/ProgramUnggulan'
import SasaranStrategis from '../components/content/SasaranStrategis'
import Quote from '../components/content/Testimoni'
import VisiMisi from '../components/content/VisiMisi'

function Beranda() {
  return (
    <>
      <Hero />
      <Kabinet />
      <VisiMisi />
      <SasaranStrategis />
      <ProgramUnggulan />
      <KegiatanTerbaru />
      <Quote />
    </>
  )
}

export default Beranda
