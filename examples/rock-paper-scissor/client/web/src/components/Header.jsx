import React from 'react'
import {
    Flex,
    Heading,
    Link,
} from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

const Header = () => (
    <Flex direction="column" textAlign="center">
        <Link to="/" as={RouterLink} _hover={{ textDecoration: "none" }}>
            <Heading mb={2}>Rock / Paper / Scissors</Heading>
        </Link>
    </Flex>
)

export default Header