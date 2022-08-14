import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title="Task List">
             <Container>
                <Title>
                    Lista de Tarefas <Badge>2021</Badge>
                </Title>
                <P>
                Uma aplicação de lista de tarefas feita com JavaScript puro.
                </P>
                <List ml={4} my={4} >
                    <ListItem>
                        <Meta>Website </Meta>
                        <Link href='https://listadetarefas-beryl.vercel.app/'> 
                        Acesse Aqui <ExternalLinkIcon mx="2px" />
                         </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>HTML, CSS, JavaScript.</span>
                    </ListItem>
                </List>
                <WorkImage src="/images/works/task_list.png" alt="Dash" />
             </Container>
        </Layout>
    )
}

export default Work