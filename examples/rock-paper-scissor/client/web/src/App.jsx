import React from "react"
import {
    ChakraProvider,
    ThemeProvider,
    Flex,
    Heading,
    Button
} from "@chakra-ui/react"

import theme from './theme'

import config from './config'
console.log("CONFIG", config)


export default function App() {
    return (
        <ChakraProvider>
            <ThemeProvider theme={theme}>
                <Flex direction="column" alignItems="center" mt={8}>
                    <Heading mb={8}>Hello, World</Heading>
                    <Button colorScheme='brand'>Start</Button>
                </Flex>
            </ThemeProvider>
        </ChakraProvider>
    )
}
