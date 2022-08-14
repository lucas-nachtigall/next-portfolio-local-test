import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title="Find your Address">
             <Container>
                <Title>
                    Buscador de endereços <Badge>2022</Badge>
                </Title>
                <P>
                Uma aplicação feita com JavaScript puro que utiliza a API ViaCEP para encontrar endereços
                    digitando apenas o CEP, muito útil para ganho de tempo em formulários.
                </P>
                <List ml={4} my={4} >
                    <ListItem>
                        <Meta>Website </Meta>
                        <Link href='https://consulta-cep-dusky.vercel.app/'> 
                        Acesse Aqui <ExternalLinkIcon mx="2px" />
                         </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>HTML, CSS, JavaScript, Axios, Tailwindcss.</span>
                    </ListItem>
                </List>
                <WorkImage src="/images/works/busca_cep.png" alt="Dash" />
             </Container>
        </Layout>
    )
}

export default Work