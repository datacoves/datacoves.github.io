import React from 'react'
import {
    useColorMode,
    Link,
    Flex,
    Box,
    HStack,
    Tooltip,
    IconButton
} from '@chakra-ui/react'
import NextLink from 'next/link'
import styled from '@emotion/styled'

import DarkModeSwitch from '../components/DarkModeSwitch'
import { Logo } from '../components/Logo'
import { GithubIcon } from '../components/icons/Github'

const Container = ({ children }) => {
    const { colorMode } = useColorMode()

    const bgColor = {
        light: 'white',
        dark: '#171717'
    }

    const color = {
        light: 'black',
        dark: 'white'
    }

    const navHoverBg = {
        light: 'gray.600',
        dark: 'gray.300',
    }

    const StickyNav = styled(Flex)`
        position: sticky;
        z-index: 10;
        top: 0;
        backdrop-filter: saturate(180%) blur(20px);
        transition: height .5s, line-height .5s;
        `

    return (
        <>
            <StickyNav
                flexDirection="row"
                alignItems="center"
                maxWidth="1100px"
                minWidth="356px"
                width="100%"
                bg={bgColor[colorMode]}
                as="nav"
                px={[2, 6, 6]}
                py={2}
                mt={8}
                mb={[0, 0, 8]}
                mx="auto"
            >
                <Box flex={1}>
                    <NextLink href="/">
                        <Link><Logo _hover={{ filter: colorMode === 'light' ? 'invert(0.3)' : 'invert(0.8)', transition: "all 0.1s" }} w={150}
                        filter={colorMode === 'light' ? 'none' : 'invert(1)'} /></Link>
                    </NextLink>
                </Box>
                <HStack spacing={2}>
                    {/* <Tooltip label="Github" hasArrow aria-label="GitHub link">
                        <IconButton aria-label="GitHub link" target="_blank" as="a" href="https://github.com/datacoves" icon={<GithubIcon boxSize={5} color={color[colorMode]} />} />
                    </Tooltip> */}
                    <Tooltip label="Toggle Dark mode" hasArrow aria-label="Toggle Dark Mode"><Box><DarkModeSwitch /></Box></Tooltip>
                </HStack>
            </StickyNav >
            <Flex
                as="main"
                justifyContent="center"
                flexDirection="column"
                bg={bgColor[colorMode]}
                color={color[colorMode]}
                px={[0, 4, 4]}
                mt={[4, 8, 8]}
            >
                {children}
            </Flex>
        </>
    )
}

export default Container