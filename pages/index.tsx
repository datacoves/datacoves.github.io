import Head from 'next/head'
import {
  useColorMode,
  Heading,
  Text,
  Box,
  Flex,
  Stack,
  SimpleGrid,
  HStack,
  Divider,
  Avatar,
  Link,
  Button
} from '@chakra-ui/react'

import Container from '../components/Container'
import { GithubIcon } from '../components/icons/Github'

export default function Index() {
  const { colorMode } = useColorMode()
  const colorSecondary = {
    light: 'gray.600',
    dark: 'gray.400'
  }
  const iconColor = {
    light: 'gray.600',
    dark: 'gray.300'
  }
  const linkColor = {
    light: 'blue',
    dark: 'gray.100'
  }
  const mainButtonColor = {
    light: 'black',
    dark: 'whiteAlpha.200'
  }
  const boxShadowColor = {
    light: '0px 8px 26px rgba(0, 0, 0, 0.1)',
    dark: '0px 8px 26px rgba(0, 0, 0, 0.9)'
  }
  return (
    <Container>
      <Stack
        as="main"
        spacing={8}
        justifyContent="center"
        alignItems="flex-start"
        m="0 auto 4rem auto"
        maxWidth="1000px"
        px={2}
      >
        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="1000px"
          mt="20"
        >
          <Heading mb={2} textAlign="center" fontSize={["3xl", "5xl", "6xl", "7xl"]} letterSpacing="tighter" fontWeight="extrabold">Do DataOps the right way and deliver reliable insights <i>faster</i></Heading>
          <Text color={colorSecondary[colorMode]} mt={5} mx={10} fontSize={["sm", "md", "lg", "xl"]} textAlign="center">Building a data stack based on solid foundations is an evergrowing challenge. Let's connect the leading data tools while promoting DataOps best practices 💪</Text>

          <HStack margin="auto" mt={10} mb={10} spacing={5}>
            <Button as="a" href="https://github.com/datacoves" bg={mainButtonColor[colorMode]} color="white" fontWeight="500" px={6} border="1px solid black" _hover={{backgroundColor: "white", color: "black"}}>Start with dbt-coves</Button>
            <Button as="a" href="https://github.com/datacoves" variant="outline" fontWeight="500" px={6}><GithubIcon boxSize={5} color={iconColor[colorMode]} mr={2} />GitHub repos</Button>
          </HStack>
          <Text width="100%" align="center" mb={20}>License: MIT</Text>

          <Heading mt={20} mb={2} letterSpacing="tight" size="xl" fontWeight={700} as="h2" textAlign="center" w="100%">Who we are</Heading>
          <Text width="100%" align="center" mb={10}>We're in a mission to make the Analytics Engineer life easier.</Text>

          <Stack spacing={10} my={20} w="100%" direction={{base: 'column', lg: 'row'}} alignItems="center">
            <Flex
              direction="column"
              alignItems="center"
              maxW="400px"
              rounded="md"
              padding="8"
              position="relative"
              shadow={'md'}
              transition="all 0.1s"
              _hover={{
                boxShadow: boxShadowColor[colorMode],
              }}
            >
              <Avatar size="xl" name="Noel Gomez" src="/img/gomezn.jpeg" filter="brightness(1.2) grayscale(1)" />
              <Heading size="md" fontWeight="extrabold" letterSpacing="tight" my={3}>Noel Gomez</Heading>
              <Text fontSize="small" textAlign="center">Co-founded <Link isExternal color={linkColor[colorMode]} href="https://ninecoves.com">Ninecoves</Link> to help companies quickly create a DataOps foundation, +12 years building data driven apps in large enterprises.</Text>
            </Flex>
            <Flex
              direction="column"
              alignItems="center"
              maxW="400px"
              rounded="md"
              padding="8"
              position="relative"
              shadow={'md'}
              transition="all 0.1s"
              _hover={{
                boxShadow: boxShadowColor[colorMode],
              }}
            >
              <Avatar size="xl" name="Michael Kahan" src="/img/mkahan.jpeg" filter="brightness(1.2) grayscale(1)" />
              <Heading size="md" fontWeight="extrabold" letterSpacing="tight" my={3}>Michael Kahan</Heading>
              <Text fontSize="small" textAlign="center">Founder of <Link isExternal color={linkColor[colorMode]} href="https://www.kahandatasolutions.com/">Kahan Data Solutions</Link> and regularly creates content on <Link isExternal color={linkColor[colorMode]} href="https://www.youtube.com/c/KahanDataSolutions/playlists">Youtube</Link> to help aspiring data professionals learn data technologies.</Text>
            </Flex>
            <Flex
              direction="column"
              alignItems="center"
              maxW="400px"
              rounded="md"
              padding="8"
              position="relative"
              shadow={'md'}
              transition="all 0.1s"
              _hover={{
                boxShadow: boxShadowColor[colorMode],
              }}
            >
              <Avatar size="xl" name="Sebastian Sassi" src="/img/ssassi.jpeg" filter="grayscale(1)" />
              <Heading size="md" fontWeight="extrabold" letterSpacing="tight" my={3}>Sebastian Sassi</Heading>
              <Text fontSize="small" textAlign="center">Co-founded <Link isExternal color={linkColor[colorMode]} href="https://convexa.ai">Convexa</Link> to help companies deliver actionable insights via NLP and voice assistants, +15 years building web and mobile apps.</Text>
            </Flex>
          </Stack>
        </Flex>
      </Stack>
    </Container>
  )
}