import _ from 'lodash'
import React, {
    useCallback,
    useContext,
    useEffect,
    useMemo,
} from 'react'
import {
    Flex,
    Button,
    Text,
    Box,
} from '@chakra-ui/react'

import HathoraContext from '../context'
import NotificationBadge from './NotificationBadge'
import PlayerMat from './PlayerMat'

const Game = ({
    user,
    connection,
    updateArgs,
}) => {
    const { state } = useContext(HathoraContext)
    const {
        round,
        player1,
        player2,
    } = (state || {})

    const isInGame = useMemo(() => {
        if (!user) {
            return false
        }
        return (player1 && player1.id === user.id ||
                player2 && player2.id === user.id)
    }, [user, player1, player2])

    useEffect(() => {
        if(connection && !isInGame) {
            connection.joinGame()
        }
    }, [connection])

    console.log("STATE", state)
    console.log("USER", user)

    const chooseGesture = useCallback(gesture => {
        connection.chooseGesture({ gesture })
    }, [connection])

    const isSpectator = useMemo(() => {
        return (player1 && player1.id !== user.id &&
                player2 && player2.id !== user.id)
    }, [player1, player2, user])

    updateArgs.events.forEach(event => console.log(`Event:`, event))
    return (
        <Flex h="full" direction="column" w="full" justifyContent="space-around">
            <Flex h="full" w="full" alignItems="center" justifyContent="space-around">
                <PlayerMat user={user} player={player1} chooseGesture={chooseGesture}/>
                <PlayerMat user={user} player={player2} chooseGesture={chooseGesture}/>
            </Flex>
            { isSpectator &&
                <NotificationBadge status="subtle" title="Spectating Match"/>
            }
        </Flex>
    )
}

export default Game