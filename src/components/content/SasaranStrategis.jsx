import { Box, Card, CardBody, CardHeader, Container, Flex, Heading, Text } from '@chakra-ui/react'
import SasaranStrategisBlob from '../blobs/SasaranStrategisBlob'

function CardSasaranStrategis({ title, content, imgUrl }) {
  return (
    <Card
      cursor={'pointer'}
      role={'group'}
      overflow={'hidden'}
      pos={'relative'}
      maxW={'xs'}
      w={'2xs'}
      h={'48'}
      variant={'outline'}
      bgImg={`url(${imgUrl})`}
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize={'cover'}
      transition={'all'}
      transitionDuration={'0.3s'}
      _hover={{ transform: 'scale(1.02)' }}>
      <CardHeader bgColor={'gray.50'} rounded={'full'} w={'fit-content'} px={4} py={2} m={2} shadow={'md'} border={'2px'} borderColor={'orange.500'}>
        <Heading fontSize={'lg'} color={'orange.500'} letterSpacing={'wide'} textTransform={'capitalize'}>
          {title}
        </Heading>
      </CardHeader>
      <CardBody pt={2} borderTopRadius={'md'} bgColor={'Background'} transition={'all'} transitionDuration={'0.3s'} _groupHover={{ transform: 'translateY(100%)', opacity: 0 }}>
        <Text color={'gray.600'} letterSpacing={'wide'}>
          {content}
        </Text>
      </CardBody>
    </Card>
  )
}

export default function SasaranStrategis() {
  return (
    <Container maxW={'container.xl'} py={4} pos={'relative'}>
      <Box pos={'absolute'} color={'orange.200'} w={'xl'} maxW={'full'} bottom={0} left={0} zIndex={-1}>
        <SasaranStrategisBlob />
      </Box>
      <Text color={'orange.500'} letterSpacing={'widest'} align={'center'}>
        SASARAN STRATEGIS
      </Text>
      <Heading align={'center'} color={'gray.700'} fontSize={{ base: '2xl', md: '4xl' }}>
        Tujuan yang ingin kami capai
      </Heading>
      <Flex align={'unset'} justify={'center'} pt={6} gap={2} wrap={'wrap'}>
        <CardSasaranStrategis
          imgUrl={'https://unsplash.com/photos/jrh5lAq-mIs/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjc4MjY3ODMz&force=true&w=640'}
          title={'survey data'}
          content={'Mengumpulkan data alumni dan keinginan mahasiswa muslim UPR.'}
        />
        <CardSasaranStrategis
          imgUrl={'https://unsplash.com/photos/ZSPBhokqDMc/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8M3x8ZGVzaWdufGVufDB8fHx8MTY3ODI2ODQ5Mg&force=true&w=640'}
          title={'rancangan'}
          content={'Merancang program kerja yang mendepankan kolaboratif nantinya.'}
        />
        <CardSasaranStrategis
          imgUrl={'https://unsplash.com/photos/fY8Jr4iuPQM/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjc4MjY4Nzc5&force=true&w=640'}
          title={'rekrutmen'}
          content={'Melaksanakan perekrutan selama dua kali dalam kepengurusan'}
        />
        <CardSasaranStrategis
          imgUrl={'https://unsplash.com/photos/Q_KdjKxntH8/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjc4MjY4MzA3&force=true&w=640'}
          title={'event'}
          content={'Mengikuti event nasional baik itu MTQMN dan PPK Ormawa.'}
        />
        <CardSasaranStrategis
          imgUrl={'https://unsplash.com/photos/WYd_PkCa1BY/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjc4MjY3ODkw&force=true&w=640'}
          title={'media publikasi'}
          content={'Memaksimalkan branding LDK JS UPR melalui tren video, website,dan sosial media lainnya'}
        />
        <CardSasaranStrategis
          imgUrl={'https://unsplash.com/photos/QckxruozjRg/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8NHx8Y29sYWJvcmF0aW9ufGVufDB8fHx8MTY3ODI2NzkxNg&force=true&w=640'}
          title={'kolaborasi'}
          content={'Menjalin kembali kerja sama dengan 5 LD SE-UPR dan 3 lembaga eksternal.'}
        />
        <CardSasaranStrategis
          imgUrl={'https://unsplash.com/photos/N__BnvQ_w18/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8OXx8ZmluYW5jZXxlbnwwfHx8fDE2NzgyNjg4MzI&force=true&w=640'}
          title={'keuangan'}
          content={'Membuat keuangan organisasi yang mandiri dengan adanya merchandise dan produk'}
        />
        <CardSasaranStrategis
          imgUrl={'https://unsplash.com/photos/6-LA_PIySJ4/download?force=true&w=640'}
          title={'syiar islam'}
          content={'Melaksanakan kajian bersama dosen, alumni, dan sebagainya.'}
        />
      </Flex>
      <Box pos={'absolute'} color={'orange.100'} w={'xl'} maxW={'full'} top={0} right={0} zIndex={-1}>
        <SasaranStrategisBlob />
      </Box>
    </Container>
  )
}
