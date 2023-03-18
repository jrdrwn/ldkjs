import { AspectRatio, Box, Button, Card, CardBody, CardHeader, Center, Heading, IconButton, Image, SimpleGrid, Stack, Text, VStack } from '@chakra-ui/react'
import { MdArrowLeft, MdArrowRight } from 'react-icons/md'
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import KegiatanTerbaruBlob from '../blobs/KegiatanTerbaruBlob'

function KegiatanCard({ title, desc, img }) {
  return (
    <Card cursor={'grab'} _active={{ cursor: 'grabbing' }} variant={'outline'} direction={{ base: 'column', sm: 'row' }} mx={4} size={'sm'} className="each-slide-effect">
      <CardHeader>
        <AspectRatio ratio={1} w={{ sm: '2xs' }}>
          <Image src={img} objectFit={'cover'} rounded={'md'} draggable={'false'} />
        </AspectRatio>
      </CardHeader>
      <CardBody>
        <Stack>
          <Text fontSize={'xl'} textTransform={'capitalize'} fontWeight={'bold'} color={'gray.700'}>
            {title}
          </Text>
          <Text maxW={'xs'} noOfLines={{ base: 5 }}>
            {desc}
          </Text>
        </Stack>
        <Button p={0} colorScheme={'orange'} maxW={'fit-content'} variant={'link'}>
          Selengkapnya
        </Button>
      </CardBody>
    </Card>
  )
}
export default function KegiatanTerbaru() {
  const kegiatanTerbaru = [
    {
      title: 'Ramah Tamah & Rilah',
      desc: 'Kegiatan Ramah Tamah & Rilah merupakan kegiatan pembuka untuk menyambut anggota baru LDKJS UPR. Kegiatan ini berupa santap bersama dan acara perkenalan. Acara ini diadakan pada hari Ahad, 05 Februari 2023 di Masjid Shalahuddin dan berakhir di Kereng Bangkirai.',
      img: 'https://source.unsplash.com/random/400x250?friendly',
    },
    {
      title: 'Organization Training',
      desc: 'Organization Training adalah kegiatan pelatihan yang diadakan untuk para pengurus LDKJS UPR. Kegiatan ini diadakan pada Sabtu, 11 Februari 2023 di Ruang F.E. 7 dan berlangsung dari pukul 07.00 WIB hingga selesai.',
      img: 'https://source.unsplash.com/random/400x250?organization',
    },
    {
      title: "Isra Mi'raj",
      desc: "Kegiatan Isra Mi'raj diadakan pada Senin, 13 Februari 2023 di Masjid Kampus Shalahuddin UPR. Kegiatan ini dimulai pukul 19.00 WIB hingga selesai.",
      img: 'https://source.unsplash.com/random/400x250?islamic',
    },
    {
      title: 'Gerakan Pungut Sampah Kolaborasi',
      desc: 'Gerakan Pungut Sampah Kolaborasi adalah kegiatan bersama dengan masyarakat sekitar dalam membersihkan lingkungan. Kegiatan ini diadakan pada Minggu, 19 Februari 2023. Titik kumpul awal adalah di samping UPR menuju Jl. Bukit Keminting dan titik kumpul akhir adalah di daerah bawah jembatan Kahayan.',
      img: 'https://source.unsplash.com/random/400x250?colaboration',
    },
    {
      title: 'Rapat Kerja',
      desc: 'Rapat Kerja diadakan pada Sabtu, 25 Februari 2023 di Ruang F.E. 7 dengan tema "Regenerasi Kepemimpinan dalam Membentuk Kepengurusan yang Berintegritas". Kegiatan ini dimulai pukul 07.00 WIB hingga selesai dan WAJIB dihadiri oleh seluruh pengurus LDKJS UPR Tahun 2023.',
      img: 'https://source.unsplash.com/random/400x250/?meeting',
    },
    {
      title: 'Sekolah Dakwah Kampus',
      desc: 'Sekolah Dakwah Kampus diadakan pada Ahad, 12 Maret 2023 di Ruang F.E. 7 (FEB UPR) dengan pemateri Riska Yolanda (Demisioner Kaderisasi). Kegiatan dimulai pukul 08.00 WIB hingga selesai dan WAJIB dihadiri oleh seluruh pengurus LDKJS UPR Tahun 2023.',
      img: 'https://source.unsplash.com/random/400x250?school',
    },
  ]
  return (
    <Box pos={'relative'}>
      <Box color={'orange.50'} pos={'absolute'} maxW={'xl'} w="full" top={{ base: -24, md: -40 }} left={-20} zIndex={-1}>
        <KegiatanTerbaruBlob />
      </Box>
      <Center>
        <SimpleGrid maxW={{ base: 'container.md', lg: 'container.xl' }} columns={{ base: 1, lg: 2 }} pb={4} px={2}>
          <VStack align={'start'} px={4} mb={4}>
            <Heading color={'orange.500'} fontSize={{ base: '2xl', md: '4xl' }}>
              Kegiatan Terbaru
            </Heading>
            <Text color={'gray.700'} fontSize={{ sm: 'lg', md: 'xl' }} maxW={'container.md'}>
              Beberapa kegiatan terbaru yang LDK JS laksanakan, yang bertujuan untuk meningkatkan kualitas kepemimpinan dan kepedulian sosial anggota LDK JS, serta memberikan kontribusi positif bagi
              lingkungan sekitar.
            </Text>
          </VStack>
          <Slide
            indicators={true}
            slidesToShow={1}
            prevArrow={<IconButton icon={<MdArrowLeft size={32} />} rounded={'full'} colorScheme={'orange'} />}
            nextArrow={<IconButton icon={<MdArrowRight size={32} />} rounded={'full'} colorScheme={'orange'} />}>
            {kegiatanTerbaru.map((props, i) => (
              <KegiatanCard {...props} key={i} />
            ))}
          </Slide>
        </SimpleGrid>
      </Center>
    </Box>
  )
}
