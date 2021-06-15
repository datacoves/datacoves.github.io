import Head from 'next/head'
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Stack,
  Link,
  Divider
} from '@chakra-ui/react'

import Container from '../components/Container'
import FeaturedProjectCard from '../components/FeaturedProjectCard'

export default function Index() {
  const { colorMode } = useColorMode()
  const colorSecondary = {
    light: 'gray.700',
    dark: 'gray.400'
  }
  const iconColor = {
    light: 'gray.600',
    dark: 'gray.300'
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
          <Heading mb={2} textAlign="center" fontSize={["3xl", "5xl", "6xl", "7xl"]} letterSpacing="tighter" fontWeight="extrabold">Open Source tools for the Modern Data Stack</Heading>
          <Text color={colorSecondary[colorMode]} mt={5} mx={10} fontSize={["sm", "md", "lg", "xl"]} textAlign="center">There are great open source analytics tools, but integrating them is an evergrowing challenge. Our mission is to connect them and <strong>make them available to everyone</strong> 💪.</Text>

          <Divider mb={12} mt={16} w='90%' alignSelf="center" />

          <Heading letterSpacing="tight" mt={8} size="lg" fontWeight={700} as="h2">Projects</Heading>
          <FeaturedProjectCard
            title="dbt-coves"
            href="https://github.com/datacoves/dbt-coves"
            src="/img/dbt-coves.svg"
            alt='Dbt-coves'
          >
            dbt-coves is the CLI tool for <Link href="https://getdbt.com">dbt</Link> that applies the <strong>datacoves</strong> practices. It can help you bootstrap your new dbt project, generate new models, and check for documentation and tests.
            </FeaturedProjectCard>
        </Flex>
      </Stack>
    </Container>
  )
}