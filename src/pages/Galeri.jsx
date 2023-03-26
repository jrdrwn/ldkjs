import { Box, Container, Flex, Heading, Image, Skeleton, Text, VStack } from '@chakra-ui/react'
import GaleriWave from '../components/waves/GaleriWave'

export default function Galeri() {
  const dataGambar = [
    {
      name: 'Ramah Tamah & Rilah',
      desc: 'Kegiatan Ramah Tamah & Rilah merupakan kegiatan pembuka untuk menyambut anggota baru LDKJS UPR. Kegiatan ini berupa santap bersama dan acara perkenalan. Acara ini diadakan pada hari Ahad, 05 Februari 2023 di Masjid Shalahuddin dan berakhir di Kereng Bangkirai.',
      photos: [
        'https://drive.google.com/uc?id=10LveLI4cudAjDWCazddHv0VObzu5-N8k',
        'https://drive.google.com/uc?id=12Y5thVW8ZTrnpvb0lq6dkIh62rdk0Hfp',
        'https://drive.google.com/uc?id=1-U2sZLo0HU1DdM_A2h6hvXiLwEgHAkmb',
        'https://drive.google.com/uc?id=1-iJ3zVjjw8GmxcnZSufglL9qr2WsxQjM',
        'https://drive.google.com/uc?id=116GMHxphOvveF-lY8WZTGUOBHPRFg1L-',
        'https://drive.google.com/uc?id=1t2VZwu5PD_i6OQqO_KLZSFJP9SPc9Fcd',
      ],
    },
    {
      name: 'Organization Training',
      desc: 'Organization Training adalah kegiatan pelatihan yang diadakan untuk para pengurus LDKJS UPR. Kegiatan ini diadakan pada Sabtu, 11 Februari 2023 di Ruang F.E. 7 dan berlangsung dari pukul 07.00 WIB hingga selesai.',
      photos: [
        'https://drive.google.com/uc?id=19vQuXSJPj53YCWpooo3-k2wn-i-f_HtN',
        'https://drive.google.com/uc?id=1xWDBtpu8W1PuRBz-aiAaidpsAJu-BPTY',
        'https://drive.google.com/uc?id=1x__Y7gW4_fE5Fih4wbllrMZAFdy-0xmI',
        'https://drive.google.com/uc?id=1wpSzFmjzclsjxjHUQGVFIFUxBJjiuj48',
        'https://drive.google.com/uc?id=1JlzIqCsRhROMH9tSX1l9l29Nysqdkz7y',
        'https://drive.google.com/uc?id=1JFdd4Xgze16fX8pD7OuP74nzsaTA2aCp',
      ],
    },
    {
      name: "Isra Mi'raj",
      desc: "Kegiatan Isra Mi'raj diadakan pada Senin, 13 Februari 2023 di Masjid Kampus Shalahuddin UPR. Kegiatan ini dimulai pukul 19.00 WIB hingga selesai.",
      photos: [
        'https://drive.google.com/uc?id=1NUTvkwbX-Tzo2lHErWA0y-njDLeisFYU',
        'https://drive.google.com/uc?id=1LqRkhbZPhLaAd4CHU3NUXXU8hLmvAys4',
        'https://drive.google.com/uc?id=1NwonvtK6_NCMw6-v_fE3l7aFVLV33ptm',
        'https://drive.google.com/uc?id=1N9L8v7cQ9CoODws6k9Fm-Q6Hyx67qnZ5',
        'https://drive.google.com/uc?id=1NHgnegdTfeZWgeOCPuT8yU9U-3QH-alR',
        'https://drive.google.com/uc?id=1y4mg-5HH4Wmpse4BVunCCIEuNfkwiPok',
      ],
    },
    {
      name: 'Gerakan Pungut Sampah Kolaborasi',
      desc: 'Gerakan Pungut Sampah Kolaborasi adalah kegiatan bersama dengan masyarakat sekitar dalam membersihkan lingkungan. Kegiatan ini diadakan pada Minggu, 19 Februari 2023. Titik kumpul awal adalah di samping UPR menuju Jl. Bukit Keminting dan titik kumpul akhir adalah di daerah bawah jembatan Kahayan.',
      photos: ['https://drive.google.com/uc?id=1OYY2x4wlrbnhMkBKS6GU5d215ELnMdMC'],
    },
    {
      name: 'Rapat Kerja',
      desc: 'Rapat Kerja diadakan pada Sabtu, 25 Februari 2023 di Ruang F.E. 7 dengan tema "Regenerasi Kepemimpinan dalam Membentuk Kepengurusan yang Berintegritas". Kegiatan ini dimulai pukul 07.00 WIB hingga selesai dan WAJIB dihadiri oleh seluruh pengurus LDKJS UPR Tahun 2023.',
      photos: [
        'https://drive.google.com/uc?id=1bltuc-qvzT3suMN3P_w7FIMEQttHGYki',
        'https://drive.google.com/uc?id=1ag9sYzyOi7YMyR4b9xsEwiHt7-mivIho',
        'https://drive.google.com/uc?id=1aoqs5jSFS7-sMJUHOLbSEnce89YjkMV9',
        'https://drive.google.com/uc?id=1aMwiy4T9KFJKmynQlNWiciIlh7KMoLyF',
        'https://drive.google.com/uc?id=1_bVFLCWoKfxA8BQ7etqCndg8Xok0gd6J',
        'https://drive.google.com/uc?id=1_nsdVYlasNfaXAeyPakL0tVLbVBeEi2R',
      ],
    },
    {
      name: 'MILAD LDK JS UPR Ke-31',
      desc: 'Acara Milad LDK JS UPR tahun ini mengangkat tema "Meneguhkan Solidaritas dan Menebarkan Kebermanfaatan". Acara ini diselenggarakan sebagai bentuk tasyakuran atas pencapaian dan pengalaman berharga selama LDK JS UPR berkiprah dalam masyarakat. Selain itu, ada juga rangkaian kegiatan kilas balik untuk merefleksikan perjalanan LDK JS UPR sejauh ini, serta mengevaluasi dan memperbaiki program-program yang telah dilakukan.',
      photos: [
        'https://drive.google.com/uc?id=167Vcp3jssRXrsAFQhXlbp0BmKA2lK4Iz',
        'https://drive.google.com/uc?id=15rn-RiJx-XdYzDGfAZr_MMO2FcmR0URl',
        'https://drive.google.com/uc?id=16TDaUvsM8ARZrj-fpg8r4hmVgNdMMeuh',
        'https://drive.google.com/uc?id=16IkYamsub8R4HY6F5F1YZcDZn-qJ6ilb',
        'https://drive.google.com/uc?id=16PRNeV1RuJb0rslyQBUf8Qhv8U-ylqR3',
        'https://drive.google.com/uc?id=176c7wt-WusEQV3rlQ5I_3o3caUNxpkYa',
      ],
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
                <Heading color={'orange.500'} fontSize={{ base: '2xl', md: '4xl' }}>
                  {gambar.name}
                </Heading>
                <Text maxW={'container.md'} color={'gray.700'} fontSize={{ base: 'lg', md: 'xl' }} align={'center'}>
                  {gambar.desc}
                </Text>
                <Flex wrap={'wrap'} justify={'center'} gap={2}>
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
