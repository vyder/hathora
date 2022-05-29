import React from 'react'
import {
    Button,
} from '@chakra-ui/react'

const Lobby = ({ isLoading, onCreateChallenge }) => {

    const title = isLoading ? "Loading..." : "Create Challenge"

    return (
        <Button mb={40} colorScheme="blue" disabled={isLoading} onClick={onCreateChallenge}>
            { title }
        </Button>
    )
}

export default Lobby