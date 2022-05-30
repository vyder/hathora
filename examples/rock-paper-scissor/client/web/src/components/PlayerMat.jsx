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
    } = player
    const gesture = Gesture[gNum]

    const handleChoose = useCallback(gName => () => chooseGesture(Gesture[gName]))

    const isSelf  = (user.id === id)
    const choices = Object.values(Gesture).filter(g => _.isString(g))

    return (
        <Flex direction="column" gridRowGap={10} alignItems="center">
            { !isSelf && !gesture &&
                <Text>Waiting for Player to choose...</Text>
            }
            { !isSelf && gesture &&
                <NotificationBadge status="success" title="Opponent is Ready!"/>
            }
            { isSelf && gesture &&
                <>
                <Text>You have chosen {gesture}!</Text>
                <NotificationBadge status="success" title="Ready!"/>
                </>
            }
            { isSelf && (gesture === undefined) && choices.map(choice => (
                <Button key={choice} colorScheme="blue"
                        onClick={handleChoose(choice)}>
                    {choice}
                </Button>
            ))}
        </Flex>
    )
}

export default PlayerMat