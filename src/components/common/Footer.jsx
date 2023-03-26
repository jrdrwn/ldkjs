import { Box, Center, Divider, Flex, Heading, HStack, Icon, Image, Link, Text, VStack } from '@chakra-ui/react'
import { FaFacebookSquare, FaInstagramSquare, FaYoutubeSquare } from 'react-icons/fa'
import { MdKeyboardArrowRight, MdLocationPin, MdMail, MdPhone } from 'react-icons/md'
import { Link as RouterRouterLink } from 'react-router-dom'
import footerLogo from '../../assets/footer-logo.png'
export default function Footer() {
  return (
    <>
      <Divider />
      <Flex p={4} wrap={'wrap'} justify={'space-between'} gap={4} bgColor={'gray.50'} color={'gray.700'}>
        <Box w={{ base: 'full', md: 'xs' }}>
          <VStack align={'center'}>
            <Image src={footerLogo} objectFit={'cover'} w={'28'} />
            <Text align={'center'} color={'gray.600'}>
              Unit Kegiatan Mahasiswa yang bergerak dalam bidang Dakwah Islam di Kampus Universitas Palangka Raya
            </Text>
          </VStack>
        </Box>
        <Box w={'2xs'}>
          <Heading fontSize={{ base: 'xl', md: '2xl' }} letterSpacing={'wide'} textDecoration={'underline'}>
            Akses Cepat
          </Heading>
          <HStack align={'start'} mt={4}>
            <Icon fontSize={24} color="orange.500">
              <MdKeyboardArrowRight />
            </Icon>
            <Link as={RouterRouterLink} to={'/profil'}>
              <Text color={'gray.600'}>Sejarah</Text>
            </Link>
          </HStack>
          <HStack align={'start'} mt={2}>
            <Icon fontSize={24} color="orange.500">
              <MdKeyboardArrowRight />
            </Icon>
            <Link as={RouterRouterLink} to={'/profil'}>
              <Text color={'gray.600'}>Struktur Organisasi</Text>
            </Link>
          </HStack>
          <HStack align={'start'} mt={2}>
            <Icon fontSize={24} color="orange.500">
              <MdKeyboardArrowRight />
            </Icon>
            <Link as={RouterRouterLink} to={'/#visimisi'}>
              <Text color={'gray.600'}>Visi dan Misi</Text>
            </Link>
          </HStack>
        </Box>
        <Box w={'2xs'}>
          <Heading fontSize={{ base: 'xl', md: '2xl' }} letterSpacing={'wide'} textDecoration={'underline'}>
            Alamat
          </Heading>
          <HStack align={'start'} mt={4}>
            <Icon fontSize={24} color="orange.500">
              <MdPhone />
            </Icon>
            <Text color={'gray.600'}>+62 877-2695-9821</Text>
          </HStack>
          <HStack align={'start'} mt={2}>
            <Icon fontSize={24} color="orange.500">
              <MdMail />
            </Icon>
            <Text color={'gray.600'}>ldkjsupr@upr.ac.id</Text>
          </HStack>
          <HStack align={'start'} mt={2}>
            <Icon fontSize={24} color="orange.500">
              <MdLocationPin />
            </Icon>
            <Text color={'gray.600'}>Sekre Bersama LDK JS UPR. Jalan Hendrik Timang. Komplek UPR., Palangkaraya 73112</Text>
          </HStack>
        </Box>
        <Box w={'2xs'}>
          <Heading fontSize={{ base: 'xl', md: '2xl' }} letterSpacing={'wide'} textDecoration={'underline'}>
            Media Sosial
          </Heading>
          <HStack align={'start'} mt={4}>
            <Icon fontSize={24} color="orange.500">
              <FaFacebookSquare />
            </Icon>
            <Text color={'gray.600'}>Ldk Jama'ah Shalahuddin</Text>
          </HStack>
          <HStack align={'start'} mt={2}>
            <Icon fontSize={24} color="orange.500">
              <FaInstagramSquare />
            </Icon>
            <Text color={'gray.600'}>@ldkjs_upr</Text>
          </HStack>
          <HStack align={'start'} mt={2}>
            <Icon fontSize={24} color="orange.500">
              <FaYoutubeSquare />
            </Icon>
            <Text color={'gray.600'}>LDK JS UPR TV</Text>
          </HStack>
        </Box>
      </Flex>
      <Divider />
      <Center p={4} bgColor={'gray.50'}>
        <Text align={'center'}>© Copyright 2023 LDK-JS UPR. Universitas Palangka Raya</Text>
      </Center>
    </>
  )
}
