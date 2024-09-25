import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoTwitter, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'
import Image from 'next/image'

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        mt={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Building the backbone of tomorrow&apos;s intelligence.
      </Box>

      <Box display={{ md: 'flex' }} alignItems="center">
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Boosung Kim
          </Heading>
          <p>Software Engineer / Senior in college</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <Image
              src="/images/boosungk.jpeg"
              alt="Profile image"
              width="100"
              height="100"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          About Me
        </Heading>
        <Paragraph>
          I am a software engineer specializing in building backend infrastructures
          and distributed systems.
        </Paragraph>
        <br />
        <List>
          <ListItem>
            💻 Previous SWE Intern @ Box
          </ListItem>
          <ListItem>
            ❤️‍🔥 Passion for developing scalable and reliable systems that can support complex features, such as AI
          </ListItem>
          <ListItem>
            🎓 Senior majoring in Computer Science and Math @ Dickinson College
          </ListItem>
          <ListItem>
            🌠 I love star gazing and water related sports 🌊
          </ListItem>
        </List>
        <br />
        <Paragraph>
          💬 I love meeting and talking to new people! Feel free to reach out:{' '}
          <Link as={NextLink} href="mailto:boosung@boosungkim.com" passHref scroll={false}>
            boosung@boosungkim.com
          </Link>
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Story
        </Heading>
        <Paragraph>
          While I started off interested in AI research and data science, after winning the Best Distributed Systems award
          in the{' '}
          <Link as={NextLink} href="https://devpost.com/software/temptemp" passHref scroll={false}>
            2023 PennApps hackathon
          </Link>
          {' '}and working on file conversion systems during my internship at{' '}
          <Link as={NextLink} href="https://www.box.com/" passHref scroll={false}>
            Box
          </Link>
          , I developed a passion for building scalable and reliable systems that
          can support complex features like AI.
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Paragraph style={{ textIndent: '0' }}>
          I sometimes write about my projects and work as well. Check it out!
        </Paragraph>
        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="https://boosung.substack.com/"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="teal"
          >
            My SubStack
          </Button>
        </Box>
      </Section>

      <Section delay={0.3}>
        <List>
          <ListItem>
            <Link href="https://github.com/boosungkim" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @boosungkim
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.linkedin.com/in/boosungk/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoLinkedin />}
              >
                @boosungk
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/bytesofboosung" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoTwitter />}
              >
                @bytesofBoosung
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
