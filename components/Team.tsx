import Head from 'next/head'
import {
    useColorMode,
    Heading,
    Text,
    Flex,
    Stack,
    Avatar,
    Link
} from '@chakra-ui/react'
import { profile } from 'console'


export default function Team() {
    const { colorMode } = useColorMode()
    const linkColor = {
        light: 'blue',
        dark: 'gray.100'
    }
    const boxShadowColor = {
        light: '0px 8px 26px rgba(0, 0, 0, 0.1)',
        dark: '0px 8px 26px rgba(0, 0, 0, 0.9)'
    }
    const profiles = [
        {
            name: 'Noel Gomez',
            image: 'gomezn.jpeg',
            bio: <>
            Co - founded < Link isExternal color={ linkColor[colorMode]} href="https://ninecoves.com" > Ninecoves</Link> to help companies quickly create a DataOps foundation, +12 years building data driven apps in large enterprises.
            </>
        },
        {
            name: 'Michael Kahan',
            image: 'mkahan.jpeg',
            bio: <>
                Founder of <Link isExternal color={linkColor[colorMode]} href="https://www.kahandatasolutions.com/">Kahan Data Solutions</Link> and regularly creates content on <Link isExternal color={linkColor[colorMode]} href="https://www.youtube.com/c/KahanDataSolutions/playlists">Youtube</Link> to help aspiring data professionals learn data technologies.
                </>
        },
        {
            name: 'Sebastian Sassi',
            image: 'ssassi.jpeg',
            bio: <>
                Co-founded <Link isExternal color={linkColor[colorMode]} href="https://convexa.ai">Convexa</Link> to help companies deliver actionable insights via NLP and voice assistants, +15 years building web and mobile apps.
                </>
        }
    ]
    return (
        <Stack spacing={10} my={20} w="100%" direction={{ base: 'column', lg: 'row' }} alignItems="center">
            {
                profiles.map( profile =>
                    <Flex
                        key={profile.name}
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
                        <Avatar size="xl" name="{profile.name}" src={`/img/${profile.image}`} filter="brightness(1.2) grayscale(1)" />
                        <Heading size="md" fontWeight="extrabold" letterSpacing="tight" my={3}>{profile.name}</Heading>
                        <Text fontSize="small" textAlign="center">{profile.bio}</Text>
                    </Flex>
                )
            }
        </Stack>
    );
}