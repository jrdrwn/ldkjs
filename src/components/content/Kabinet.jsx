import { Box, Card, CardBody, CardHeader, Center, Container, Flex, Heading, HStack, Text, VStack } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { FaBraille } from 'react-icons/fa'
import { MdOutlineEnergySavingsLeaf } from 'react-icons/md'
import { RiTeamLine } from 'react-icons/ri'
import { TbBrandSupernova } from 'react-icons/tb'
import KabinetBlob from '../blobs/KabinetBlob'

function KabinetCard({ title, desc, icon }) {
  return (
    <Card
      pos={'relative'}
      maxW={'xs'}
      w={'2xs'}
      variant={'outline'}
      as={motion.div}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          type: 'spring',
          bounce: 0.1,
          duration: 1,
        },
      }}>
      <Center>
        <Box pos={'absolute'} color={'orange.50'} w={'28'} top={0}>
          <KabinetBlob />
        </Box>
      </Center>
      <CardHeader color={'orange.500'} zIndex={1}>
        <Center>{icon}</Center>
      </CardHeader>
      <CardBody pt={0}>
        <Heading fontSize={{ base: 'xl', md: '2xl' }} mb={1} color={'gray.700'} textAlign={'center'} letterSpacing={'wide'}>
          {title}
        </Heading>
        <Text align={'center'} color={'gray.600'} letterSpacing={'wide'}>
          {desc}
        </Text>
      </CardBody>
    </Card>
  )
}

function Kabinet() {
  return (
    <Container
      maxW={'container.xl'}
      py={4}
      as={motion.div}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          type: 'spring',
          bounce: 0.1,
          duration: 1,
        },
      }}>
      <VStack w={'full'}>
        <Text color={'orange.500'} letterSpacing={'widest'} align={'center'}>
          KABINET
        </Text>
        <Heading align={'center'} color={'gray.700'} fontSize={{ base: '2xl', md: '4xl' }}>
          Kontribusi Kebaikan
        </Heading>
        <Flex align={'unset'} justify={'center'} pt={6} gap={4} wrap={'wrap'}>
          <KabinetCard
            title={'Kolaborasi'}
            desc={'Dimana LDK JS UPR mampu meningkatkan kolaborasi yang baik diinternal antar pengurus maupun eksternal dan stakeholder lain dalam mengoptimalkan program'}
            icon={<RiTeamLine size={60} />}
          />
          <KabinetCard title={'Unggul'} desc={'Melakukan sesuatu dengan hasil yang terbaik kreatif, inovatif, dan berkelanjutan'} icon={<TbBrandSupernova size={60} />} />
          <KabinetCard
            title={'Integritas'}
            desc={'Kader yang mampu selaras antara perbuatan dan perkataan sesuai etika, dan moral Islam Mewujudkan kebijaksanaan dalam bertindak, dan bertanggung jawab terhadap amanah'}
            icon={<FaBraille size={60} />}
          />
          <KabinetCard
            title={'Bersinegri'}
            desc={
              'Menjalin kerja sama yang bersinergis sebagai bentuk dari sebuah proses atau interaksi yang menghasilkan suatu keseimbangan yang harmonis sehingga bisa menghasilkan sesuatu yang optimum'
            }
            icon={<MdOutlineEnergySavingsLeaf size={60} />}
          />
        </Flex>
      </VStack>
      <HStack wrap={'wrap'}>{/* <Box></Box> */}</HStack>
    </Container>
  )
}

export default Kabinet
