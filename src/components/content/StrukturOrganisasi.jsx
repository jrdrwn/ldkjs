import { Box, Container, Heading, Text, VStack } from '@chakra-ui/react'
import AlurKerja from '../common/AlurKerja'
import StrukturOrganisasiWave from '../waves/StrukturOrganisasiWave'
import { motion } from 'framer-motion'

export default function StrukturOrganisasi() {
  return (
    <>
      <Container
        maxW={'container.lg'}
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
