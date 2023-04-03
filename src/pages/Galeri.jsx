import { Box, Container, Flex, Heading, Image, Skeleton, Text, VStack } from '@chakra-ui/react'
import GaleriWave from '../components/waves/GaleriWave'
import { motion } from 'framer-motion'

export default function Galeri() {
  const dataGambar = [
    {
      name: 'Ramah Tamah & Rilah',
      desc: 'Kegiatan Ramah Tamah & Rilah merupakan kegiatan pembuka untuk menyambut anggota baru LDKJS UPR. Kegiatan ini berupa santap bersama dan acara perkenalan. Acara ini diadakan pada hari Ahad, 05 Februari 2023 di Masjid Shalahuddin dan berakhir di Kereng Bangkirai.',
      photos: [
        '/gambar/ramah-tamah-rilah/1.webp',
        '/gambar/ramah-tamah-rilah/2.webp',
        '/gambar/ramah-tamah-rilah/3.webp',
        '/gambar/ramah-tamah-rilah/4.webp',
        '/gambar/ramah-tamah-rilah/5.webp',
        '/gambar/ramah-tamah-rilah/6.webp',
      ],
    },
    {
      name: 'Organization Training',
      desc: 'Organization Training adalah kegiatan pelatihan yang diadakan untuk para pengurus LDKJS UPR. Kegiatan ini diadakan pada Sabtu, 11 Februari 2023 di Ruang F.E. 7 dan berlangsung dari pukul 07.00 WIB hingga selesai.',
      photos: [
        '/gambar/organization-training/1.webp',
        '/gambar/organization-training/2.webp',
        '/gambar/organization-training/3.webp',
        '/gambar/organization-training/4.webp',
        '/gambar/organization-training/5.webp',
        '/gambar/organization-training/6.webp',
      ],
    },
    {
      name: "Isra Mi'raj",
      desc: "Kegiatan Isra Mi'raj diadakan pada Senin, 13 Februari 2023 di Masjid Kampus Shalahuddin UPR. Kegiatan ini dimulai pukul 19.00 WIB hingga selesai.",
      photos: ['/gambar/isra-miraj/1.webp', '/gambar/isra-miraj/2.webp', '/gambar/isra-miraj/3.webp', '/gambar/isra-miraj/4.webp', '/gambar/isra-miraj/5.webp', '/gambar/isra-miraj/6.webp'],
    },
    {
      name: 'Gerakan Pungut Sampah Kolaborasi',
      desc: 'Gerakan Pungut Sampah Kolaborasi adalah kegiatan bersama dengan masyarakat sekitar dalam membersihkan lingkungan. Kegiatan ini diadakan pada Minggu, 19 Februari 2023. Titik kumpul awal adalah di samping UPR menuju Jl. Bukit Keminting dan titik kumpul akhir adalah di daerah bawah jembatan Kahayan.',
      photos: ['/gambar/gerakan-pungut-sampah/1.webp'],
    },
    {
      name: 'Rapat Kerja',
      desc: 'Rapat Kerja diadakan pada Sabtu, 25 Februari 2023 di Ruang F.E. 7 dengan tema "Regenerasi Kepemimpinan dalam Membentuk Kepengurusan yang Berintegritas". Kegiatan ini dimulai pukul 07.00 WIB hingga selesai dan WAJIB dihadiri oleh seluruh pengurus LDKJS UPR Tahun 2023.',
      photos: [
        '/gambar/rapat-kerja-2023/1.webp',
        '/gambar/rapat-kerja-2023/2.webp',
        '/gambar/rapat-kerja-2023/3.webp',
        '/gambar/rapat-kerja-2023/4.webp',
        '/gambar/rapat-kerja-2023/5.webp',
        '/gambar/rapat-kerja-2023/6.webp',
      ],
    },
    {
      name: 'MILAD LDK JS UPR Ke-31',
      desc: 'Acara Milad LDK JS UPR tahun ini mengangkat tema "Meneguhkan Solidaritas dan Menebarkan Kebermanfaatan". Acara ini diselenggarakan sebagai bentuk tasyakuran atas pencapaian dan pengalaman berharga selama LDK JS UPR berkiprah dalam masyarakat. Selain itu, ada juga rangkaian kegiatan kilas balik untuk merefleksikan perjalanan LDK JS UPR sejauh ini, serta mengevaluasi dan memperbaiki program-program yang telah dilakukan.',
      photos: ['/gambar/milad-31/1.webp', '/gambar/milad-31/2.webp', '/gambar/milad-31/3.webp', '/gambar/milad-31/4.webp', '/gambar/milad-31/5.webp', '/gambar/milad-31/6.webp'],
    },
  ]
  return (
    <>
      {dataGambar.map((gambar) => (
        <>
          <Box color={'orange.50'}>
            <GaleriWave />
          </Box>
          <Box bgColor={'orange.50'}>
            <Container maxW={'container.xl'}>
              <VStack rounded={'md'} justify={'center'}>
                <Heading textAlign={'center'} color={'orange.500'} fontSize={{ base: '2xl', md: '4xl' }}>
                  {gambar.name}
                </Heading>
                <Text maxW={'container.md'} color={'gray.700'} fontSize={{ base: 'lg', md: 'xl' }} align={'center'}>
                  {gambar.desc}
                </Text>
                <Flex
                  wrap={'wrap'}
                  justify={'center'}
                  gap={2}
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
                  {gambar.photos.map((imgUrl, i) => (
                    <Image
                      src={imgUrl}
                      fallback={<Skeleton w={'xs'} h={'xs'} />}
                      objectFit={'cover'}
                      key={i}
                      w={gambar.photos.length < 2 ? 'container.md' : 'xs'}
                      rounded={'md'}
                      overflow={'hidden'}
                      border={'2px'}
                      borderColor={'orange.500'}
                    />
                  ))}
                </Flex>
              </VStack>
            </Container>
          </Box>
          <Box color={'orange.50'}>
            <GaleriWave flip={true} />
          </Box>
        </>
      ))}
    </>
  )
}
