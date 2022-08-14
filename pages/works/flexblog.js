import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title="FlexBlog">
             <Container>
                <Title>
                    FlexBlog <Badge>2021</Badge>
                </Title>
                <P>
                Site feito durante aprendizado do recurso CSS flexbox seguindo
                o tutorial do canal <strong>Origamid</strong>.
                </P>
                <List ml={4} my={4} >
                    <ListItem>
                        <Meta>Website </Meta>
                        <Link href='https://flexblog-gamma.vercel.app/'> 
                        Acesse Aqui <ExternalLinkIcon mx="2px" />
                         </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>HTML, CSS, JavaScript.</span>
                    </ListItem>
                </List>
                <WorkImage src="/images/works/flexblog.png" alt="Dash" />
             </Container>
        </Layout>
    )
}

export default Work