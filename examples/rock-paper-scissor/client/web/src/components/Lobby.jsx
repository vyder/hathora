import React from 'react'
import {
    Button,
} from '@chakra-ui/react'

const Lobby = ({ onConnect }) => {
    return (
        <Button mb={40} colorScheme="blue" onClick={onConnect}>Create Challenge</Button>
    )
}

export default Lobby