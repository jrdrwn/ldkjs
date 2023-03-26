import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import '@fontsource/ubuntu'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './components/common/Root'
import Beranda from './pages/Beranda'
import Galeri from './pages/Galeri'
import Profil from './pages/Profil'

const theme = extendTheme({
  fonts: {
    heading: `'Ubuntu', sans-serif`,
    body: `'Ubuntu', sans-serif`,
  },
})

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <Beranda />,
      },
      {
        path: 'profil',
        element: <Profil />,
      },
      {
        path: 'galeri',
        element: <Galeri />,
      },
    ],
  },
])

function App() {
  return (
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  )
}

export default App
