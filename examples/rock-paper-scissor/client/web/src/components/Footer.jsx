import React from 'react'
import {
    Flex,
    Text,
    Link,
} from '@chakra-ui/react'

const StyledLink = ({ href, children }) => (
    <Link textDecoration="underline"
          textUnderlineOffset={4}
          _hover={{ color: 'yellow.300' }}
          href={href}>
              {children}
    </Link>
)

const Footer = () => (
    <Flex w="full" px={2} pb={1} justifyContent="space-between">
        <Text>
            Images Credit: <StyledLink href="https://www.vecteezy.com/members/nightwolfdezines">nightwolfdezines</StyledLink>
        </Text>
        <Text>
            Powered by <StyledLink href="https://hathora.dev">Hathora.dev</StyledLink>
        </Text>
    </Flex>
)

export default Footer