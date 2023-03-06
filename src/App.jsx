import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import '@fontsource/ubuntu'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Beranda from './pages/Beranda'

const theme = extendTheme({
  fonts: {
    heading: `'Ubuntu', sans-serif`,
    body: `'Ubuntu', sans-serif`,
  },
})

const router = createBrowserRouter([
  {
    path: '/',
    element: <Beranda />,
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
