import { Box, Center, Container, Flex, Heading, Text, VStack } from '@chakra-ui/react'
import ProgramUnggulanWave from '../waves/ProgramUnggulanWave'

function ProgramUnggulanCard({ title, desc, img }) {
  return (
    <Flex
      bgImg={`url(${img})`}
      bgColor={'orange.50'}
      bgPos={'center'}
      bgSize={'cover'}
      rounded={'md'}
      w={'2xs'}
      h={'3xs'}
      pos={'relative'}
      justify={'center'}
      align={'center'}
      overflow={'hidden'}
      role="group">
      <Center
        cursor={'pointer'}
        rounded={'md'}
        bg={'orange.50'}
        px={4}
        py={2}
        m={1}
        pos={'absolute'}
        transition={'all'}
        transitionDuration={'.3s'}
        shadow={'md'}
        top={'50%'}
        transform={'translateY(-50%)'}
        _groupHover={{ top: '-50%' }}
        w={'fit-content'}
        overflow={'hidden'}>
        <Heading fontSize={{ base: 'xl', md: '3xl' }} textAlign={'center'} letterSpacing={'wider'} mb={2} color={'orange.500'}>
          {title}
        </Heading>
      </Center>
      <Center
        cursor={'pointer'}
        rounded={'md'}
        bg={'orange.50'}
        m={1}
        p={1}
        pos={'absolute'}
        transition={'all'}
        transitionDuration={'.3s'}
        shadow={'md'}
        bottom={'-100%'}
        transform={'translateY(50%)'}
        _groupHover={{ bottom: '0', top: 0, transform: 'translateY(0)' }}
        w={'fit-content'}
        overflow={'hidden'}>
        <Text align={'center'}>{desc}</Text>
      </Center>
    </Flex>
  )
}

export default function ProgramUnggulan() {
  const programUnggulanData = [
    {
      title: 'MTQ MAHASISWA SE-UPR',
      desc: 'Program tahunan LDK JS UPR yang bertujuan untuk mengembangkan bakat baca Al-Qur’an pada mahasiswa dan membentuk generasi muda yang Islami, cerdas dan berprestasi.',
      img: 'https://source.unsplash.com/random/400x300?islamic-student',
    },
    {
      title: 'GREAT ISLAMIC MOTIVATION',
      desc: 'Program motivasi Islami terbaik dari LDK JS UPR, dimana para pemateri yang handal dan berpengalaman memberikan motivasi serta inspirasi tentang Islam secara fun, santai dan menarik.',
      img: 'https://source.unsplash.com/random/400x300?motivation',
    },
    {
      title: 'YOUTH ISLAMIC CAMP',
      desc: 'Program kemah Islami yang diadakan oleh LDK JS UPR, dimana para peserta dapat belajar tentang Islam, belajar mandiri, belajar tentang kepedulian dan kebersamaan dalam bingkai keislaman.',
      img: 'https://source.unsplash.com/random/400x300?camp',
    },
    {
      title: 'QURANIC LEARNING CENTER',
      desc: "Program belajar membaca dan menghafal Al-Qur’an yang diadakan oleh LDK JS UPR untuk memperdalam pemahaman tentang Al-Qur'an bagi mahasiswa Universitas Palangka Raya.",
      img: 'https://source.unsplash.com/random/400x300?quran',
    },
    {
      title: 'OBROLAN SEJAM SEPUTAR ISLAM',
      desc: 'Program diskusi ringan selama satu jam yang membahas berbagai topik menarik seputar Islam, yang diadakan oleh LDK JS UPR.',
      img: 'https://source.unsplash.com/random/400x300?islam',
    },
  ]

  return (
    <>
      <Box color={'orange.50'}>
        <ProgramUnggulanWave />
      </Box>
      <Box bgColor={'orange.50'}>
        <Container maxW={'container.lg'} py={4}>
          <VStack w={'full'}>
            <Heading color={'orange.500'} fontSize={{ base: '2xl', md: '4xl' }}>
              Program Unggulan
            </Heading>
            <Text color={'gray.700'} align={'center'}>
              Serangkaian kegiatan dan acara yang dirancang dan dijalankan oleh LDK JS yang bertujuan untuk memberikan kontribusi terbaik dan berkualitas dalam rangkaian aktivitas dakwah dan
              pengabdian kepada masyarakat kampus dan sekitarnya.
            </Text>
            <Flex align={'unset'} justify={'center'} pt={6} gap={4} wrap={'wrap'}>
              {programUnggulanData.map((props, i) => (
                <ProgramUnggulanCard {...props} key={i} />
              ))}
            </Flex>
          </VStack>
        </Container>
      </Box>
      <Box color={'orange.50'}>
        <ProgramUnggulanWave flip={true} />
      </Box>
    </>
  )
}
