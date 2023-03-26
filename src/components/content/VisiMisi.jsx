import { AspectRatio, Box, Button, Card, CardBody, Container, Flex, Heading, HStack, Image, Text } from '@chakra-ui/react'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { useDraggable } from 'react-use-draggable-scroll'
import visiImg from '../../assets/visi-img.jpg'
import MisiBlob from '../blobs/MisiBlob'
import VisiBlob from '../blobs/VisiBlob'

function Visi() {
  return (
    <Box mb={'10'}>
      <Box pos={'absolute'} color={'orange.200'} w={{ base: 'sm', md: 'lg' }} top={-20} left={{ base: -20, md: -28 }} zIndex={-4}>
        <VisiBlob />
      </Box>
      <Flex justify={'start'} gap={8} direction={{ base: 'column', md: 'row' }}>
        <AspectRatio maxW={{ base: 'xs', md: 'xs' }} w={{ md: 'xs' }} flex={'none'} ratio={1}>
          <Image rounded={'lg'} objectFit={'cover'} src={visiImg} />
        </AspectRatio>
        <Flex direction={'column'} gap={8} justify={'space-around'}>
          <Box>
            <Heading color={'gray.700'} fontSize={{ base: '2xl', md: '4xl' }} letterSpacing={'wide'} mb={4}>
              Apa visi dari LDK JS?
            </Heading>
            <Text fontStyle={'italic'} fontSize={{ base: 'lg', md: 'xl' }}>
              "Membentuk LDK JS UPR sebagai pionir kebaikan yang bersinergi dan unggul dengan berlandaskan kepada Al-Qur'an dan As-Sunnah."
            </Text>
          </Box>
          <Flex gap={2}>
            <Button rounded={'full'} colorScheme={'orange'}>
              <Link to={'/profil'}>Sejarah</Link>
            </Button>
            <Button rounded={'full'}>
              <Link to={'/profil'}>Tugas & Fungsi</Link>
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  )
}

function MisiCard({ children }) {
  return (
    <Card w={'3xs'} variant={'outline'} h={'3xs'} flex={'none'} transitionDuration={'0.3s'} _hover={{ bgColor: 'orange.500', color: 'white', rounded: 'lg', transform: 'translateY(-4px)' }}>
      <CardBody>
        <Text fontSize={'lg'}>{children}</Text>
      </CardBody>
    </Card>
  )
}

function Misi() {
  const ref = useRef()
  const { events } = useDraggable(ref)

  return (
    <>
      <Heading color={'gray.700'} fontSize={{ base: '2xl', md: '4xl' }} letterSpacing={'wide'} mb={4}>
        Misi yang terdapat di LDK JS?
      </Heading>
      <HStack {...events} ref={ref} maxW={'container.lg'} overflowX={'auto'} cursor={'grab'} py={2}>
        <MisiCard>Merajut nilai kebersamaan dalam bingkai kebaikan dengan LDPS, LDJ, LDF, dan organisasi kampus lainnya.</MisiCard>
        <MisiCard>Menumbuhkan sikap ukhuwah islamiah antar sesama punggawa LDK JS UPR.</MisiCard>
        <MisiCard>Mengoptimalkan masjid kampus Salahuddin UPR sebagai pusat syiar dalam berdakwah.</MisiCard>
        <MisiCard>Memfasilitasi kader-kader muslim dalam berprestasi baik di kancah kampus, Nasional dan bahkan internasional.</MisiCard>
        <MisiCard>Membangun sikap kritis terhadap isu-isu keislaman terkini.</MisiCard>
        <MisiCard>Mengoptimalkan media sebagai dakwah digital.</MisiCard>
      </HStack>
      <Box pos={'absolute'} color={'orange.200'} w={'xl'} bottom={-40} right={0} zIndex={-4}>
        <MisiBlob />
      </Box>
    </>
  )
}

export default function VisiMisi() {
  return (
    <>
      <Container maxW={{ base: 'container.sm', md: 'container.lg' }} p={8} pos={'relative'}>
        <Visi />
        <Misi />
      </Container>
    </>
  )
}
