import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title="LinkTree">
             <Container>
                <Title>
                    Árvore de links para redes sociais <Badge>2021</Badge>
                </Title>
                <P>
                Uma árvore de links para ser usada em redes sociais.
                Funciona como o <strong>Linktree</strong> e <strong>Beacons</strong> mas grátis.
                </P>
                <List ml={4} my={4} >
                    <ListItem>
                        <Meta>Website </Meta>
                        <Link href='https://bio-social-medias.vercel.app/'> 
                        Acesse Aqui <ExternalLinkIcon mx="2px" />
                         </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>HTML, CSS</span>
                    </ListItem>
                </List>
                <WorkImage src="/images/works/link_tree.png" alt="Dash" />
             </Container>
        </Layout>
    )
}

export default Work