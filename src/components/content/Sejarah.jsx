import { Box, Container, Heading, Text, VStack } from '@chakra-ui/react'
import SejarahWave from '../waves/SejarahWave'
import { motion } from 'framer-motion'

export default function Sejarah() {
  return (
    <>
      <Box color={'orange.50'}>
        <SejarahWave flip={true} />
      </Box>
      <Container
        maxW={'container.md'}
        py={10}
        zIndex={999}
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
            Sejarah Singkat
          </Heading>
          <Text textIndent={20} align={'justify'} color={'gray.700'} fontSize={{ base: 'lg', md: 'xl' }}>
            LDK JS UPR adalah unit kerohanian muslim ditingkat Universitas Palangka Raya yang telah dibentuk pada tahun 1991/1992 yang dipelopori oleh 3 orang dosen seniur UPR dengan tujuan untuk
            menghimpun beberapa Organisai keislaman pada saat itu agar dapat berjalan beriringan.
          </Text>
          <Text textIndent={20} align={'justify'} color={'gray.700'} fontSize={{ base: 'lg', md: 'xl' }}>
            Ketua LDK JS UPR saat ini adalah Akhina Muhammad Ghozi Anwar. Saat ini LDK JS UPR mulai berbenah diri untuk menjadi lembaga dakwah potensial. Menghasilkan mahasiswa yang tidak hanya cerdas
            secara intelektual namun juga secara spritual. Dengan motto "Bersama Kita Bisa", semoga LDK JS UPR bisa menjadi wadah bagi kita untuk "menghijaukan" kampus kita ini dengan Islam. Saatnya
            kita bergerak mewujudkan kampus UPR yang madani
          </Text>
        </VStack>
      </Container>
    </>
  )
}
