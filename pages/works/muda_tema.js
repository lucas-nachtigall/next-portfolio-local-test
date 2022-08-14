import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title="Troca">
             <Container>
                <Title>
                    Troca Tema <Badge>2021</Badge>
                </Title>
                <P>
                Uma aplicação feita com JavaScript puro em que o usuário pode mudar o tema 
                e escolher a cor do botão.
                </P>
                <List ml={4} my={4} >
                    <ListItem>
                        <Meta>Website </Meta>
                        <Link href='https://change-theme-one.vercel.app/'> 
                        Acesse Aqui <ExternalLinkIcon mx="2px" />
                         </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>HTML, CSS, JavaScript</span>
                    </ListItem>
                </List>
                <WorkImage src="/images/works/muda_tema.png" alt="Dash" />
             </Container>
        </Layout>
    )
}

export default Work