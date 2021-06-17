import React from 'react'
import { ChakraProvider, ColorModeProvider, useColorMode } from '@chakra-ui/react'
import customTheme from '../styles/theme'
import { Global, css } from '@emotion/react'
import { DefaultSeo } from 'next-seo'
import SEO from '../next-seo.config'


const GlobalStyle = ({ children }) => {
    const { colorMode } = useColorMode()

    return (
        <>
            <Global
                styles={css`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700;800&display=swap');
          ::selection {
            background-color: #90CDF4;
            color: #fefefe;
          }
          ::-moz-selection {
            background: #ffb7b7;
            color: #fefefe;
          }
          html {
            min-width: 356px;
            scroll-behavior: smooth;
          }
          #__next {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            background: ${colorMode === 'light' ? 'white' : '#171717'};
          }
        `}
            />
            {children}
        </>
    )
}

function MyApp({ Component, pageProps }) {
    return (
        <ChakraProvider resetCSS theme={customTheme}>
            <ColorModeProvider
                options={{
                    initialColorMode: "light",
                    useSystemColorMode: true,
                }}
            >
                <GlobalStyle>
                    <DefaultSeo {...SEO} />
                    <Component {...pageProps} />
                </GlobalStyle>
            </ColorModeProvider>
        </ChakraProvider>
    )
}

export default MyApp