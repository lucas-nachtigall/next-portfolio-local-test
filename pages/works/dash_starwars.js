import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title="Dashboard Star Wars">
             <Container>
                <Title>
                    Dashboard Star Wars <Badge>2021</Badge>
                </Title>
                <P>
                Uma Dashboard mostrando informações de Naves, Personagens, 
                Planetas e Luas do universo de Star Wars.
                </P>
                <List ml={4} my={4} >
                    <ListItem>
                        <Meta>Website </Meta>
                        <Link href='https://dashboard-starwars.vercel.app/'> 
                        Acesse Aqui <ExternalLinkIcon mx="2px" />
                         </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>HTML, CSS, JavaScript, Axios</span>
                    </ListItem>
                </List>
                <WorkImage src="/images/works/dash_starwars.png" alt="Dash" />
             </Container>
        </Layout>
    )
}

export default Work