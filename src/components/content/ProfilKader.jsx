import { Box, Card, CardBody, Container, Flex, Heading, Text, VStack } from '@chakra-ui/react'
import ProfilKaderWave from '../waves/ProfilKaderWave'

function ProfilKaderCard({ profile, desc }) {
  return (
    <Card size={'sm'} maxW={'sm'} variant={'outline'} borderColor={'orange.300'} cursor={'pointer'} transition={'all'} transitionDuration={'0.3s'} transform="auto" _hover={{ translateY: -1 }}>
      <CardBody>
        <VStack align={'start'}>
          <Heading color={'orange.500'} fontSize={{ base: 'xl', md: '2xl' }}>
            {profile}
          </Heading>
          <Text color={'gray.700'}>{desc}</Text>
        </VStack>
      </CardBody>
    </Card>
  )
}

export default function ProfilKader() {
  const profilKader = [
    {
      profile: 'Intelektual',
      desc: 'Kader LDK JS UPR harus memiliki kompetensi sesuai dengan disiplin ilmu yang diambil saat kuliah dan wawasan global yang dapat menunjang kehidupan serta aktifitasnya.',
    },
    {
      profile: "Qur'ani",
      desc: "Kader LDK JS UPR senantiasa dekat dengan Al-Qur'an sebagai sebuah pedoman dan media untuk lebih memahami Islam dan dekat Allah dengan cara membaca, membaca tafsir, menghafal serta mengamalkannya.",
    },
    {
      profile: 'Inklusif',
      desc: "Kader LDK JS UPR haruslah bisa bergaul dan dekat dengan semua objek dak'wah",
    },
    { profile: 'Dinamis', desc: 'Kader LDK JS UPR haruslah mempunyai jiwa dinamis, kreatif dalam berfikir, adaptif dalam bergerak, komunikatif dalam berbicara, serta inovatif dalam berorganisasi.' },
    {
      profile: 'Sehat',
      desc: 'Kader LDK JS UPR adalah kader yang sehat secara jasmani. Kader LDK JS UPR memiliki tanggung jawab dalam menjaga kesehatan dan kebugaran diri secara mandiri.',
    },
  ]
  return (
    <>
      <Box bgColor={'orange.50'}>
        <Box color={'white'}>
          <ProfilKaderWave flip={true} />
        </Box>
        <Container maxW={'container.md'} mb={4}>
          <VStack>
            <Heading color={'gray.700'} fontSize={{ base: '2xl', md: '4xl' }}>
              Profil Kader
            </Heading>
            <Text color={'gray.700'} fontSize={{ base: 'lg', md: 'xl' }} align={'center'}>
              Sebagai kader LDK JS, kami berkomitmen untuk menebarkan kebaikan dan kontribusi positif bagi masyarakat, baik melalui kegiatan sosial, pendidikan, maupun pengembangan potensi diri.
            </Text>
          </VStack>
        </Container>
        <Container maxW={'container.xl'}>
          <Flex wrap={'wrap'} gap={4} justify={'center'}>
            {profilKader.map((kader, i) => (
              <ProfilKaderCard {...kader} key={i} />
            ))}
          </Flex>
        </Container>
      </Box>
      <Box color={'orange.50'}>
        <ProfilKaderWave flip={true} />
      </Box>
    </>
  )
}
