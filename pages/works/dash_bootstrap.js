import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title="Bootstrap">
             <Container>
                <Title>
                    Dashboard Bootstrap <Badge>2022</Badge>
                </Title>
                <P>
                Dashboard feita durante aprendizado meu aprendizado do framework <strong>Bootstrap</strong>.
                </P>
                <List ml={4} my={4} >
                    <ListItem>
                        <Meta>Website </Meta>
                        <Link href='https://bootstrap-dashboard-gules.vercel.app/'> 
                        Acesse Aqui <ExternalLinkIcon mx="2px" />
                         </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>HTML, CSS, Bootstrap, JavaScript.</span>
                    </ListItem>
                </List>
                <WorkImage src="/images/works/dash_bootstrap.png" alt="Dash" />
             </Container>
        </Layout>
    )
}

export default Work