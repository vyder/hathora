import React, {
    useEffect,
} from 'react'
import {
    useParams,
} from 'react-router-dom'

import Game from './Game'
import NotificationBadge from './NotificationBadge'

const AutoJoin = ({
    token,
    user,
    connection,
    updateArgs,
    connectionError,
    onConnect,
    onDisconnect
}) => {
    const { stateId } = useParams()

    useEffect(() => {
        if (token && !connection) {
            onConnect(stateId)
        }
        return onDisconnect
    }, [connection, token])

    if (connectionError) {
        return <NotificationBadge status="error"
                                  title="Connection Error"
                                  message={connectionError.message} mb={40}/>
    }
    if (!connection || !updateArgs || !user) {
        return <NotificationBadge status="info"
                                  title="Loading..." mb={40}/>
    }

    return (
        <Game user={user}
              connection={connection}
              updateArgs={updateArgs}/>
    );
}

export default AutoJoin