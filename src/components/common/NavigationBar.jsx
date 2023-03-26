import { Box, Button, Flex, HStack, IconButton, Image, Show, useBoolean, VStack } from '@chakra-ui/react'
import { MdClose, MdGroups, MdHome, MdMenu, MdPhone, MdPhotoLibrary } from 'react-icons/md'
import { NavLink } from 'react-router-dom'
import brand from '../../assets/brand.png'

export default function NavigationBar() {
  const [flag, setFlag] = useBoolean()

  const pages = [
    { path: '/', name: 'Beranda', icon: <MdHome size={'18'} /> },
    { path: '/profil', name: 'Profil', icon: <MdGroups size={'18'} /> },
    { path: '/galeri', name: 'Galeri', icon: <MdPhotoLibrary size={'18'} /> },
    { path: '/kontak', name: 'Kontak', icon: <MdPhone size={'18'} /> },
  ]

  return (
    <Flex
      zIndex={'banner'}
      justify={'space-between'}
      gap={4}
      py={2}
      px={8}
      align={'center'}
      pos={'fixed'}
      insetX={2}
      top={2}
      shadow={'md'}
      rounded={'full'}
      border={'1px'}
      borderColor={'orange'}
      backdropFilter="auto"
      backdropBlur={'base'}>
      <Box w={'36'}>
        <Image src={brand} objectFit="cover" />
      </Box>
      <Show above="md">
        <HStack gap={4}>
          {pages.map((page, i) => (
            <NavLink to={page.path} key={i}>
              {({ isActive }) => (
                <Button variant={'ghost'} colorScheme={isActive ? 'orange' : undefined} rounded={'full'} leftIcon={page.icon}>
                  {page.name}
                </Button>
              )}
            </NavLink>
          ))}
        </HStack>
      </Show>
      <Show below="md">
        <IconButton rounded={'full'} icon={flag ? <MdClose size={24} /> : <MdMenu size={24} />} colorScheme={'orange'} onClick={setFlag.toggle} />
        <VStack hidden={!flag} pos={'absolute'} bottom={'-52'} right={'8'} p={2} bgColor={'Background'} border={'1px'} borderColor={'orange'} rounded={'md'} align={'start'} shadow={'md'}>
          {pages.map((page, i) => (
            <NavLink to={page.path} key={i}>
              {({ isActive }) => (
                <Button variant={'ghost'} colorScheme={isActive ? 'orange' : undefined} rounded={'full'} leftIcon={page.icon}>
                  {page.name}
                </Button>
              )}
            </NavLink>
          ))}
        </VStack>
      </Show>
    </Flex>
  )
}
