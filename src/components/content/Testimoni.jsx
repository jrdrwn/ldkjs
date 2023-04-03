import { Avatar, Box, Container, Heading, Text, VStack } from '@chakra-ui/react'
import { motion } from 'framer-motion'

export default function Testimoni() {
  return (
    <Box
      px={2}
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
      <Container maxW={'container.xl'} p={{ base: 4, md: 10 }} bgColor={'orange.50'} shadow={'md'} my={10} rounded={'3xl'} border={'1px'} borderColor={'orange.500'}>
        <VStack>
          <Heading fontSize={{ base: 'lg', md: '2xl' }} align={'center'} fontWeight={'semibold'} lineHeight={'tall'} mb={2} color={'gray.700'}>
            "Saya merasa sangat bersyukur dapat menjadi bagian dari LDK JS, dan saya yakin bahwa organisasi ini akan terus tumbuh dan berkembang dengan semangat yang sama kuatnya. Semoga LDK JS dapat
            terus memberikan manfaat dan kontribusi yang besar bagi masyarakat dan negara."
          </Heading>
          <Avatar />
          <Text fontWeight={'semibold'} color={'orange.500'} align={'center'}>
            Muhammad Ghozi Anwar
          </Text>
          <Text fontWeight={'semibold'} color={'gray.500'} align={'center'}>
            Ketua Umum
          </Text>
        </VStack>
      </Container>
    </Box>
  )
}
