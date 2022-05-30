import React from 'react'
import {
    Flex,
    Text,
} from '@chakra-ui/react'

const NotificationBadge = ({ status, title, message, mb = 0 }) => {

    const statusColorMap = {
        'error':   { bg: 'red.500',   fg: 'white'    },
        'success': { bg: 'green.500', fg: 'white'    },
        'subtle':  { bg: 'blue.100',  fg: 'blue.600' },
        'info':    { bg: 'blue.500',  fg: 'white'    },
    }

    const { bg, fg } = statusColorMap[status] || statusColorMap['info']

    return (
        <Flex direction="column" mb={mb} w="full"
            alignItems="center" justifyContent="space-around">
            <Flex bg={bg} color={fg} px={4} py={2} borderRadius="md" textAlign="center" direction="column" w={250}>
                { title && <Text fontWeight="bold">{title}</Text>}
                { message && <Text>{message}</Text>}
            </Flex>
        </Flex>
    )
}

export default NotificationBadge