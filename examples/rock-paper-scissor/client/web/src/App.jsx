import React, { useCallback } from "react"
import { Route, Routes, useLocation, useNavigate, useParams } from 'react-router-dom'
import {
    ChakraProvider,
    ThemeProvider,
    Flex,
    Box,
} from "@chakra-ui/react"
import rpsPattern from './assets/rps-pattern.svg'

import theme  from './theme'

import Header   from "./components/Header"
import Footer   from "./components/Footer"
import Game     from "./components/Game"
import Lobby    from "./components/Lobby"
import NotFound from "./components/NotFound"

import {
    HathoraClient,
    // HathoraConnection,
    // UpdateArgs,
} from "../../.hathora/client"

const client = new HathoraClient()
console.log("APP ID", client.appId)

export default function App() {

    const location = useLocation()
    console.log(location.pathname)
    const navigate = useNavigate()
    const params   = useParams()

    const handleConnect = useCallback(() => {
        navigate('/challenge/banana')
    }, [navigate])

    return (
        <ChakraProvider>
            <ThemeProvider theme={theme}>
                <Box h="full" bgImage={rpsPattern} bgSize="25%" color="white">
                <Flex direction="column" alignItems="center" h="full" justifyContent="space-between"  pt={8}
                      bgColor="blackAlpha.700">
                    <Header/>
                    <Routes>
                        <Route path="/challenge/:stateId" element={<Game/>} />
                        <Route path="/" element={<Lobby onConnect={handleConnect}/>} />
                        <Route path="*" element={<NotFound/>} />
                    </Routes>
                    <Footer/>
                </Flex>
                </Box>
            </ThemeProvider>
        </ChakraProvider>
    )
}
