import React from "react"
import {
    ChakraProvider,
    ThemeProvider,
    Flex,
    Box,
} from "@chakra-ui/react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import rpsPattern from './assets/rps-pattern.svg'

import theme  from './theme'
import config from './config'

import Game from "./components/Game"
console.log("CONFIG", config)

export default function App() {
    return (
        <ChakraProvider>
            <ThemeProvider theme={theme}>
                <Box h="full" bgImage={rpsPattern} bgSize="25%" color="white">
                <Flex direction="column" alignItems="center" h="full" justifyContent="space-between"  pt={8}
                      bgColor="blackAlpha.700">
                    <Header/>
                    <Game/>
                    <Footer/>
                </Flex>
                </Box>
            </ThemeProvider>
        </ChakraProvider>
    )
}
