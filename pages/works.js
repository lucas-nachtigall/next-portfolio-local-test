import React from "react";
import { Container, Box, Heading, SimpleGrid, Divider, Link } from "@chakra-ui/react";
import Section from '../components/Section'
import { WorkGridItem } from "../components/grid-item";

import dash_starwars from '../public/images/works/dash_starwars.png'
import lista_presenca from '../public/images/works/lista_presenca.png'
import muda_tema from '../public/images/works/muda_tema.png'
import link_tree from '../public/images/works/link_tree.png'
import task_list from '../public/images/works/task_list.png'
import flexblog from '../public/images/works/flexblog.png'
import dash_bootstrap from '../public/images/works/dash_bootstrap.png'
import busca_cep from '../public/images/works/busca_cep.png'

const Works = () => {
    return (
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Projetos
            </Heading>
            <SimpleGrid columns={[1,1,2]} gap={6}>
                <Section>
                    <WorkGridItem id="dash_starwars" title="Dashboard Star Wars" thumbnail={dash_starwars}>
                        Uma Dashboard mostrando informações de Naves, Personagens,
                        Planetas e Luas do universo de Star Wars.
                        Foi utilizado o <strong>Axios</strong> para realizar as requisições
                        à <strong>API</strong> <i>SWAPI'</i>.
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem id="lista_presenca" title="Lista de Presença" thumbnail={lista_presenca}>
                        Uma aplicação de lista de presença desenvolvida utilizando a
                        biblioteca ReactJS.
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem id="muda_tema" title="Troca Tema" thumbnail={muda_tema}>
                        Uma aplicação feita com JavaScript puro em que o usuário pode mudar o tema
                        e escolher a cor do botão.
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem id="link_tree" title="Árvore de Links" thumbnail={link_tree}>
                        Uma árvore de links para ser usada em redes sociais.
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem id="task_list" title="Lista de Tarefas" thumbnail={task_list}>
                        Uma aplicação de lista de tarefas feita com JavaScript puro.
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem id="flexblog" title="FlexBlog" thumbnail={flexblog}>
                        Site feito durante aprendizado do recurso CSS flexbox.
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem id="dash_bootstrap" title="Dashboard Bootstrap" thumbnail={dash_bootstrap}>
                    Dashboard feita durante aprendizado do framework Bootstrap.
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem id="busca_cep" title="Encontre seu Endereço" thumbnail={busca_cep}>
                    Uma aplicação feita com JavaScript puro que utiliza a API ViaCEP para encontrar endereços
                    digitando apenas o CEP, muito útil para ganho de tempo em formulários.
                    </WorkGridItem>
                </Section>
            </SimpleGrid>
        </Container>
    )
}

export default Works
