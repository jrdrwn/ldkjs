import { Box, Card, CardBody, CardHeader, Center, Container, Flex, Heading, HStack, Text, VStack } from '@chakra-ui/react'
import { FaBraille } from 'react-icons/fa'
import { MdOutlineEnergySavingsLeaf } from 'react-icons/md'
import { RiTeamLine } from 'react-icons/ri'
import { TbBrandSupernova } from 'react-icons/tb'
import KabinetBlob from '../blobs/KabinetBlob'

function Kabinet() {
  return (
    <Container maxW={'container.xl'} py={4}>
      <VStack w={'full'}>
        <Text color={'orange.500'} letterSpacing={'widest'} align={'center'}>
          KABINET
        </Text>
        <Heading align={'center'} color={'gray.700'} fontSize={{ base: 'xl', sm: '2xl', md: '4xl' }}>
          Kontribusi Kebaikan
        </Heading>
        <Flex align={'unset'} justify={'center'} pt={6} gap={4} wrap={'wrap'}>
          <Card pos={'relative'} maxW={'xs'} w={'2xs'} variant={'outline'}>
            <Center>
              <Box pos={'absolute'} color={'orange.50'} w={'28'} top={0}>
                <KabinetBlob />
              </Box>
            </Center>
            <CardHeader color={'orange.500'} zIndex={1}>
              <Center>
                <RiTeamLine size={60} />
              </Center>
            </CardHeader>
            <CardBody pt={0}>
              <Heading fontSize={'2xl'} mb={1} color={'gray.700'} textAlign={'center'} letterSpacing={'wide'}>
                Kolaborasi
              </Heading>
              <Text align={'center'} color={'gray.600'} letterSpacing={'wide'}>
                Dimana LDK JS UPR mampu meningkatkan kolaborasi yang baik diinternal antar pengurus maupun eksternal dan stakeholder lain dalam mengoptimalkan program
              </Text>
            </CardBody>
          </Card>
          <Card pos={'relative'} maxW={'xs'} w={'2xs'} variant={'outline'}>
            <Center>
              <Box pos={'absolute'} color={'orange.50'} w={'28'} top={0}>
                <KabinetBlob />
              </Box>
            </Center>
            <CardHeader color={'orange.500'} zIndex={1}>
              <Center>
                <TbBrandSupernova size={60} />
              </Center>
            </CardHeader>
            <CardBody pt={0}>
              <Heading fontSize={'2xl'} mb={1} color={'gray.700'} textAlign={'center'} letterSpacing={'wide'}>
                Unggul
              </Heading>
              <Text align={'center'} color={'gray.600'} letterSpacing={'wide'}>
                Melakukan sesuatu dengan hasil yang terbaik kreatif, inovatif, dan berkelanjutan.
              </Text>
            </CardBody>
          </Card>
          <Card pos={'relative'} maxW={'xs'} w={'2xs'} variant={'outline'}>
            <Center>
              <Box pos={'absolute'} color={'orange.50'} w={'28'} top={0}>
                <KabinetBlob />
              </Box>
            </Center>
            <CardHeader color={'orange.500'} zIndex={1}>
              <Center>
                <FaBraille size={60} />
              </Center>
            </CardHeader>
            <CardBody pt={0}>
              <Heading fontSize={'2xl'} mb={1} color={'gray.700'} textAlign={'center'} letterSpacing={'wide'}>
                Integritas
              </Heading>
              <Text align={'center'} color={'gray.600'} letterSpacing={'wide'}>
                Kader yang mampu selaras antara perbuatan dan perkataan sesuai etika, dan moral Islam Mewujudkan kebijaksanaan dalam bertindak, dan bertanggung jawab terhadap amanah
              </Text>
            </CardBody>
          </Card>
          <Card pos={'relative'} maxW={'xs'} w={'2xs'} variant={'outline'}>
            <Center>
              <Box pos={'absolute'} color={'orange.50'} w={'28'} top={0}>
                <KabinetBlob />
              </Box>
            </Center>
            <CardHeader color={'orange.500'} zIndex={1}>
              <Center>
                <MdOutlineEnergySavingsLeaf size={60} />
              </Center>
            </CardHeader>
            <CardBody pt={0}>
              <Heading fontSize={'2xl'} mb={1} color={'gray.700'} textAlign={'center'} letterSpacing={'wide'}>
                Bersinegri
              </Heading>
              <Text align={'center'} color={'gray.600'} letterSpacing={'wide'}>
                Menjalin kerja sama yang bersinergis sebagai bentuk dari sebuah proses atau interaksi yang menghasilkan suatu keseimbangan yang harmonis sehingga bisa menghasilkan sesuatu yang optimum
              </Text>
            </CardBody>
          </Card>
        </Flex>
      </VStack>
      <HStack wrap={'wrap'}>{/* <Box></Box> */}</HStack>
    </Container>
  )
}

export default Kabinet
