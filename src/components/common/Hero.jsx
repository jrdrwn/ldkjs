import { Badge, Box, Button, Center, Container, Heading, HStack, Text } from '@chakra-ui/react'
import { IoMdArrowRoundForward } from 'react-icons/io'
import HeroBlob from '../blobs/HeroBlob'

export default function Hero() {
  return (
    <>
      <Box pos={'absolute'} maxW={'xl'} w={'full'} top={0} zIndex={-1} color={'orange.50'}>
        <HeroBlob />
      </Box>
      <Container p={4} py={'28'} maxW={'container.md'} pos="relative">
        <Center>
          <HStack shadow={'md'} bg={'Background'} border={'1px'} borderColor={'orange'} maxW={'fit-content'} borderRadius={'full'} px={4} mb={4}>
            <Text fontWeight={'bold'} textTransform={'capitalize'} letterSpacing={'wider'} bgGradient="linear(to-r, #F6AD55, #DD6B20)" bgClip="text">
              Bersama Kita Bisa
            </Text>
            <Badge colorScheme={'orange'} borderRadius={'full'}>
              2023
            </Badge>
          </HStack>
        </Center>
        <Heading textAlign={'center'} fontSize={{ base: '3xl', sm: '4xl', md: '5xl' }} lineHeight={'shorter'} letterSpacing={'wide'} color={'gray.700'}>
          Lembaga Dakwah Kampus Jama'ah Shalahuddin
        </Heading>
        <Text textAlign={'center'} mb={4} mt={2} lineHeight={'tall'} color={'gray.700'}>
          LDK JS merupakan sebuah Unit Kegiatan Mahasiswa yang bergerak dalam bidang Dakwah Islam di Kampus Universitas Palangka Raya
        </Text>
        <Center>
          <Button colorScheme={'orange'} shadow={'lg'} rightIcon={<IoMdArrowRoundForward />} rounded={'full'}>
            Lebih lanjut
          </Button>
        </Center>
      </Container>
    </>
  )
}
