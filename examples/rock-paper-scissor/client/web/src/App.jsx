import React, {
    useCallback,
    useEffect,
    useRef,
    useState,
} from "react"
import {
    Route,
    Routes,
    useNavigate,
} from 'react-router-dom'
import {
    Flex,
    Box,
    useToast,
} from "@chakra-ui/react"

import rpsPattern from './assets/rps-pattern.svg'

import Header   from "./components/Header"
import Footer   from "./components/Footer"
import Game     from "./components/Game"
import Lobby    from "./components/Lobby"
import NotFound from "./components/NotFound"

import {
    HathoraClient,
} from "../../.hathora/client"

const client = new HathoraClient()
// console.log("APP ID", client.appId)

export default function App() {
    const navigate = useNavigate()
    const toast    = useToast()

    const toastRef = useRef()

    // State
    const [token, setToken] = useState(null)
    const [user,  setUser]  = useState(null)

    useEffect(() => {
        if (!token) {
            toastRef.current = toast({
                title: "Loading...",
                status: "info",
            })
            client.loginAnonymous()
                .then(token => {
                    sessionStorage.setItem(client.appId, token)
                    setToken(token)
                    setUser(HathoraClient.getUserFromToken(token))
                    toast.update(toastRef.current, {
                        title: "Logged In!",
                        status: "success",
                        isClosable: true,
                        duration: 1000,
                    })
                })
                .catch(e => toast({
                    title: "Authentication error: " + e.reason,
                    status: 'error',
                    isClosable: true,
                }))
        }
    }, [token])

    // Create token, and go to challenge view
    const createChallenge = useCallback(() => {
        client.create(token, {})
            .then(stateId => navigate(`/challenge/${stateId}`))
            .catch(() => toast({
                title: "Oops!",
                description: "Cannot create a challenge right now.",
                status: 'error',
                duration: 3000
            }))
    }, [token, client, navigate])

    const isLoading = !token || !user

    return (
        <>
            <Box h="full" bgImage={rpsPattern} bgSize="25%" color="white">
            <Flex direction="column" alignItems="center" h="full" justifyContent="space-between"  pt={8}
                    bgColor="blackAlpha.700">
                <Header/>
                <Routes>
                    <Route path="/challenge/:stateId" element={<Game token={token} user={user}/>} />
                    <Route path="/" element={<Lobby isLoading={isLoading} onCreateChallenge={createChallenge}/>} />
                    <Route path="*" element={<NotFound/>} />
                </Routes>
                <Footer/>
            </Flex>
            </Box>
        </>
    )
}
