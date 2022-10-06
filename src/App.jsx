import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { extendTheme, ChakraProvider } from '@chakra-ui/react'
import './App.css'
import Calculator from './Calculator'
const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
}

const theme = extendTheme({ colors })

// 3. Pass the `theme` prop to the `ChakraProvider`
 export  default function App() {
  return (
    <ChakraProvider theme={theme}>
       <Calculator />
    </ChakraProvider>
  )
}