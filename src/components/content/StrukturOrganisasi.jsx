import { Box, Container, Heading, Text, VStack } from '@chakra-ui/react'
import AlurKerja from '../common/AlurKerja'
import StrukturOrganisasiWave from '../waves/StrukturOrganisasiWave'

export default function StrukturOrganisasi() {
  return (
    <>
      <Container maxW={'container.lg'}>
        <VStack>
          <Heading color={'gray.700'} fontSize={{ base: '2xl', md: '4xl' }}>
            Struktur Organisasi
          </Heading>
          <Text maxW={'container.md'} color={'gray.700'} fontSize={{ base: 'lg', md: 'xl' }} align={'center'}>
            LDK JS UPR membentuk struktur organisasi yang terdiri dari pengurus dan anggota. Setiap anggota diberikan tanggung jawab tertentu sesuai dengan kemampuan dan minatnya.
          </Text>
          <AlurKerja />
        </VStack>
      </Container>
      <Box color={'gray.50'}>
        <StrukturOrganisasiWave />
      </Box>
    </>
  )
}
