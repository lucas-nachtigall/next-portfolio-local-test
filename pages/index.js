import NextLink from 'next/link'
import { Container, Box, Heading, Image, useColorModeValue, Button, Link, SimpleGrid, List, ListItem, Icon } from '@chakra-ui/react'
import Section from '../components/Section'
import Paragraph from '../components/paragraph'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import { BioSection, BioYear } from '../components/bio'
import {
  FiTwitter,
  FiGithub,
  FiInstagram
} from 'react-icons/fi'
import { FaDiscord, FaGitAlt, FaReact, FaNodeJs } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";
import { SiMysql, SiTypescript } from "react-icons/si";

const Page = () => {
  return (
    <Layout>
      <Container>
        <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} align="center">
          Seja bem vindo(a) ao meu portfólio!
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box flexFlow={1}>
            <Heading as="h2" variant="page-title">
              Mateus Arce
            </Heading>
            <p className="">Desenvolvedor Web</p>
            <p>UI | UX</p>

          </Box>
          <Box flexShrink={0} mt={{ base: 4, md: 0 }} ml={{ md: 6 }} align="center">
            <Image borderColor="whiteAlpha.400" borderWidth={2} borderStyle="solid" maxWidth="100px" display="inline-block" borderRadius="20%" src="/images/arce.png" alt="Profile Image" />
          </Box>
        </Box>

        <Section delay={0.1} >
          <Heading as="h3" variant="section-title" mb={3}>
            Sobre
          </Heading>
          <Paragraph>
            Sou um desenvolvedor web com paixão por criar serviços digitais. Gosto de fazer as coisas desde o planejamento de produtos e design até a solução de problemas da vida real com código.
            Quando não estou online, adoro ir ao cinema. Atualmente, estou estudando a biblioteca React e o framework Laravel, bem como Estrutura de dados.
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/works">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="blue">
                Meus Projetos
              </Button>
            </NextLink>
          </Box>
        </Section>
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title" mb={3}>
            Bio
          </Heading>
          <BioSection>
            <BioYear>2001</BioYear>
            Nasceu em Manaus, Brasil.
          </BioSection>
          <BioSection>
            <BioYear>2019</BioYear>
            Formou em Técnico em Informática no Instituto Federal de Educação do Amazonas.
          </BioSection>
          <BioSection>
            <BioYear>2019</BioYear>
            Estagiou no Instituto de Desenvolvimento Sustentável <Link href='https://www.mamiraua.org.br/'>Mamirauá</Link>.
          </BioSection>
          <BioSection>
            <BioYear>2020</BioYear>
            Começou a cursar Engenharia da Computação.
          </BioSection>
          <BioSection>
            <BioYear>2022 até o presente</BioYear>
            Estagia na área de desenvolvimento web na empresa <Link href='https://www.visteon.com/'>Visteon</Link>.
          </BioSection>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title" mb={3}>
            Eu ♥
          </Heading>
          <Paragraph>
            Música, Futebol, Fotografia, Programação, Cinema, Livros.
          </Paragraph>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title" mb={3}>
            Minhas Redes Sociais
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/mateusarcedev" target="_blank">
                <Button variant="ghost" colorScheme="blue" leftIcon={<Icon as={FiGithub} />} >@mateusarcedev</Button>
              </Link>
            </ListItem>
            {/* <ListItem>
              <Link href="https://twitter.com/mateusarce00" target="_blank">
                <Button variant="ghost" colorScheme="blue" leftIcon={<Icon as={FiTwitter} />} >@mateusarce00</Button>
              </Link>
            </ListItem> */}
            {/* <ListItem>
              <Link href="https://instagram.com/_m_arce" target="_blank">
                <Button variant="ghost" colorScheme="blue" leftIcon={<Icon as={FiInstagram} />} >@_m_arce</Button>
              </Link>
            </ListItem> */}
            <ListItem>
              <Link href="https://discordapp.com/users/technomancer#8791" target="_blank">
                <Button variant="ghost" colorScheme="blue" leftIcon={<Icon as={FaDiscord} />} >@technomancer</Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://www.linkedin.com/in/mateus-arce/" target="_blank">
                <Button variant="ghost" colorScheme="blue" leftIcon={<Icon as={GrLinkedin} />} >mateus-arce</Button>
              </Link>
            </ListItem>
          </List>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title" mb={3}>
            Skills
          </Heading>
          <List>
            <ListItem>
              <Button variant="ghost" colorScheme="red" leftIcon={<Icon as={FaGitAlt} />} >Git</Button>
            </ListItem>
            <ListItem>
              <Button variant="ghost" colorScheme="red" leftIcon={<Icon as={FaReact} />} >ReactJS</Button>
            </ListItem>
            <ListItem>
              <Button variant="ghost" colorScheme="red" leftIcon={<Icon as={FaNodeJs} />} >NodeJS</Button>
            </ListItem>
            <ListItem>
              <Button variant="ghost" colorScheme="red" leftIcon={<Icon as={SiMysql} />} >MYSQL</Button>
            </ListItem>
            <ListItem>
              <Button variant="ghost" colorScheme="red" leftIcon={<Icon as={SiTypescript} />} >TypeScript</Button>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page;
