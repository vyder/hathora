import React, { useCallback } from 'react'
import {
    Flex,
    Button,
    Text,
} from '@chakra-ui/react'

const Game = ({ token }) => {
    // console.log("TOKEN", token)

    const choices = ["ROCK", "PAPER", "SCISSORS"]

    return (
        <Flex mb={40} w="full" alignItems="center" justifyContent="space-around">
            <Flex direction="column" gridRowGap={10}>
                { choices.map(choice => <Button key={choice} colorScheme="blue">{choice}</Button>)}
            </Flex>
            <Text>Waiting for Player to join...</Text>
        </Flex>
    )
}

export default Game