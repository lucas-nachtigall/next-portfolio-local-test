import Head from 'next/head';
import Navbar from '../navbar.js'
import { Box, Container } from '@chakra-ui/react'
import { Router } from 'next/router';

const Main = ({ children }) => {
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <title>Mateus Arce - Homepage</title>
                <meta name='description' content='Portfólio do desenvolvedor web Mateus Arce' />
                <meta property='og:title' content='Portfólio Mateus Arce' />
                <meta property='og:description' content='Meu nome é Mateus Arce, e eu desenvolvo interfaces modernas e de altíssima qualidade, concentradas em performance, animações, responsividade e SEO.'/>
                <meta property='og:url' content='https://mateusarce.dev/' />
                <meta property='og:type' content='website' />
                <link rel='icon' href='/images/arce.png' />

            </Head>

            <Navbar path={Router.asPath} />

            <Container maxW={"container.md"} pt={14}>
                {children}
            </Container>
        </Box>
    )
}

export default Main;
