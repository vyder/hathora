import _ from 'lodash'
import React, { useCallback } from 'react'
import {
    Flex,
    Button,
    Text,
} from '@chakra-ui/react'
import { Gesture } from '../../../../api/types'
import NotificationBadge from './NotificationBadge'

const PlayerMat = ({ user, player, chooseGesture }) => {
    if (!player) {
        return <Text>Waiting for Player to join...</Text>
    }

    const {
        id,
        gesture: gNum,
        isReady,
    } = player
    const gesture = Gesture[gNum]

    const handleChoose = useCallback(gName => () => chooseGesture(Gesture[gName]))

    const isCurrentPlayer  = (user.id === id)
    const choices = Object.values(Gesture).filter(g => _.isString(g))

    let matDetails = null

    if (isCurrentPlayer) {
        if (gesture !== undefined) {
            matDetails = (
                <>
                <Text>You have chosen {gesture}!</Text>
                <NotificationBadge status="success" title="Ready!"/>
                </>
            )
        } else {
            matDetails = choices.map(choice => (
                <Button key={choice} colorScheme="blue"
                        onClick={handleChoose(choice)}>
                    {choice}
                </Button>
            ))
        }
    } else {
        if (!isReady) {
            matDetails = <Text>Waiting for Player to choose...</Text>
        } else {
            matDetails = <NotificationBadge status="success" title="Opponent is Ready!"/>
        }
    }

    return (
        <Flex direction="column" gridRowGap={10} alignItems="center">
            { matDetails }
        </Flex>
    )
}

export default PlayerMat