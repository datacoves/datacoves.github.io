import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Stack,
  Button
} from '@chakra-ui/react'

import Container from '../components/Container'
import { GithubIcon } from '../components/icons/Github'
import Team from '../components/Team'


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
  const mainButtonColor = {
    light: 'black',
    dark: 'whiteAlpha.200'
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
          <Heading mb={2} textAlign="center" fontSize={["3xl", "5xl", "6xl", "7xl"]} letterSpacing="tighter" fontWeight="extrabold">Deliver reliable insights to production <i>faster</i> </Heading>
          <Text color={colorSecondary[colorMode]} mt={5} mx={10} fontSize={["sm", "md", "lg", "xl"]} textAlign="center">Setting up an Analytics Engineer's development environment is hard and having them apply DataOps best practices is even harder. Let's change that 💪</Text>

          <Stack margin="auto" direction={{ base: 'column', lg: 'row' }} mt={10} mb={10} spacing={5}>
            <Button as="a" href="https://github.com/datacoves" bg={mainButtonColor[colorMode]} color="white" fontWeight="500" px={6} border="1px solid black" _hover={{backgroundColor: "white", color: "black"}}>Start with dbt-coves</Button>
            <Button as="a" href="https://github.com/datacoves" variant="outline" fontWeight="500" px={6}><GithubIcon boxSize={5} color={iconColor[colorMode]} mr={2} />GitHub repos</Button>
          </Stack>
          <Text width="100%" align="center" mb={20}>License: MIT</Text>

          <Heading mt={20} mb={2} letterSpacing="tight" size="xl" fontWeight={700} as="h2" textAlign="center" w="100%">Who we are</Heading>
          <Text width="100%" align="center" px={10} mb={10}>We're on a mission to make the Analytics Engineer's life easier and help them implement DataOps.</Text>

          <Team />
        </Flex>
      </Stack>
    </Container>
  )
}
