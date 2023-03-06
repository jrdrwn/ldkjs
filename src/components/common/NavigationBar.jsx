import { Box, Button, Flex, HStack, IconButton, Image, Show, useBoolean, VStack } from '@chakra-ui/react'
import { MdArticle, MdClose, MdGroups, MdHome, MdMenu, MdPhone } from 'react-icons/md'
import brand from '../../assets/brand.png'

export default function NavigationBar() {
  const [flag, setFlag] = useBoolean()
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
          <Button variant={'ghost'} colorScheme={'orange'} rounded={'full'} leftIcon={<MdHome size={'18'} />}>
            Beranda
          </Button>
          <Button variant={'ghost'} rounded={'full'} leftIcon={<MdGroups size={'18'} />}>
            Profil
          </Button>
          <Button variant={'ghost'} rounded={'full'} leftIcon={<MdArticle size={'18'} />}>
            Blog
          </Button>
          <Button variant={'ghost'} rounded={'full'} leftIcon={<MdPhone size={'18'} />}>
            Kontak
          </Button>
        </HStack>
      </Show>
      <Show below="md">
        <IconButton rounded={'full'} icon={flag ? <MdClose size={24} /> : <MdMenu size={24} />} colorScheme={'orange'} onClick={setFlag.toggle} />
        <VStack hidden={!flag} pos={'absolute'} bottom={'-52'} right={'8'} p={2} bgColor={'Background'} border={'1px'} borderColor={'orange'} rounded={'md'} align={'start'} shadow={'md'}>
          <Button variant={'ghost'} colorScheme={'orange'} rounded={'full'} leftIcon={<MdHome size={'18'} />}>
            Beranda
          </Button>
          <Button variant={'ghost'} rounded={'full'} leftIcon={<MdGroups size={'18'} />}>
            Profil
          </Button>
          <Button variant={'ghost'} rounded={'full'} leftIcon={<MdArticle size={'18'} />}>
            Blog
          </Button>
          <Button variant={'ghost'} rounded={'full'} leftIcon={<MdPhone size={'18'} />}>
            Kontak
          </Button>
        </VStack>
      </Show>
    </Flex>
  )
}
