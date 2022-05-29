import React, { useCallback } from 'react'
import {
    Button,
} from '@chakra-ui/react'

const Game = () => {
    const createChallenge = useCallback(() => {
        console.log("Creating Challenge...")
    }, [])

    return (
        <Button mb={40} colorScheme="blue" onClick={createChallenge}>Create Challenge</Button>
    )
}

export default Game