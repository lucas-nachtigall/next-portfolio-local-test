import NextLink from 'next/link'
import {
    Box,
    Heading,
    Text,
    Container,
    Divider,
    Button
} from '@chakra-ui/react'

const NotFound = () => {
    return (
        <Container>
            <Heading as="h1">Não Encontrado</Heading>
            <Text>Essa página não existe.</Text>
            <Divider my={6} />
            <Box my={6} align="center">
                <NextLink href="/">
                    <Button colorScheme="teal">Retornar à Página Inicial</Button>
                </NextLink>
            </Box>
        </Container>
    )
}

export default NotFound