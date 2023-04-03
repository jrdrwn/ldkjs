import { AspectRatio, Box, Container, Flex, Heading, HStack, Icon, Text, VStack } from '@chakra-ui/react'
import { MdLocationPin, MdMail, MdPhone } from 'react-icons/md'
import GaleriWave from '../components/waves/GaleriWave'
import { motion } from 'framer-motion'

export default function Kontak() {
  return (
    <>
      <Box color={'orange.50'}>
        <GaleriWave flip={true} />
      </Box>
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
          <Heading textAlign={'center'} color={'orange.500'} fontSize={{ base: '2xl', md: '4xl' }}>
            Hubungi Kami
          </Heading>
          <Text color={'gray.700'} fontSize={{ base: 'lg', md: 'xl' }} align={'center'}>
            Hubungi kami untuk mendapatkan informasi lebih lanjut tentang LDK JS UPR, termasuk acara dan kegiatan yang akan datang, serta peluang bergabung dan menjadi bagian dari LDK JS. Tim kami
            siap membantu Anda dengan segala pertanyaan dan kebutuhan yang Anda miliki. Kami dapat dihubungi melalui telepon, email, atau media sosial. Jangan ragu untuk menghubungi kami, kami siap
            melayani Anda dengan sepenuh hati.
          </Text>
        </VStack>
        <Flex gap={4} wrap={'wrap-reverse'} mt={8}>
          <AspectRatio maxW={'lg'} w={'lg'} border={'2px'} rounded={'md'} overflow={'hidden'} borderColor={'orange.500'}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d249.17774060198082!2d113.9029272078078!3d-2.2125490299163917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dfcb3aa6172a915%3A0xd122de11004eb4ab!2sQWQ3%2B245%2C%20Jl.%20Hendrik%20Timang%2C%20Palangka%2C%20Kec.%20Jekan%20Raya%2C%20Kota%20Palangka%20Raya%2C%20Kalimantan%20Tengah%2074874!5e0!3m2!1sen!2sid!4v1679817869598!5m2!1sen!2sid"
              allowfullscreen
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"></iframe>
          </AspectRatio>
          <VStack align={'start'}>
            <Heading color={'orange.500'} fontSize={{ base: '2xl', md: '3xl' }} mb={4}>
              Kontak & Alamat
            </Heading>
            <HStack align={'start'} mt={4}>
              <Icon fontSize={'3xl'} color="orange.500">
                <MdPhone size={'26'} />
              </Icon>
              <Box>
                <Text fontSize={'xl'} color={'gray.900'}>
                  Telepon
                </Text>
                <Text fontSize={'xl'} color={'gray.600'}>
                  +62 877-2695-9821
                </Text>
              </Box>
            </HStack>
            <HStack align={'start'} mt={2}>
              <Icon fontSize={'3xl'} color="orange.500">
                <MdMail size={'26'} />
              </Icon>
              <Box>
                <Text fontSize={'xl'} color={'gray.900'}>
                  Email
                </Text>
                <Text fontSize={'xl'} color={'gray.600'}>
                  ldkjsupr@upr.ac.id
                </Text>
              </Box>
            </HStack>
            <HStack align={'start'} mt={2}>
              <Icon fontSize={'3xl'} color="orange.500">
                <MdLocationPin size={'26'} />
              </Icon>
              <Box>
                <Text fontSize={'xl'} color={'gray.900'}>
                  Lokasi
                </Text>
                <Text color={'gray.600'} maxW={'sm'}>
                  Sekre Bersama LDK JS UPR. Jalan Hendrik Timang. Komplek UPR., Palangkaraya 73112
                </Text>
              </Box>
            </HStack>
          </VStack>
        </Flex>
      </Container>
      <Box color={'gray.50'}>
        <GaleriWave />
      </Box>
    </>
  )
}
