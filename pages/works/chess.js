import {
  Container,
  Badge,
  Link,
  List,
  ListItem
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Chess for Soldiers">
    <Container>
      <Title>
        Chess for Soldiers <Badge>2022</Badge>
      </Title>
      <P>
        Once upon a time, when I was serving in the Republic of Korea Army, I noticed that there was no proper recreational activity for soldiers at our base. So, I decided to create a chess game that could be played offline. I coded the game in Python and used MySQL to store the game data. I also created a simple web interface using Django to allow soldiers to compete with each other.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Blog</Meta>
          <Link href="https://boosung.substack.com/p/the-time-i-coded-chess-with-pen-and">
            https://boosung.substack.com/p/the-time-i-coded-chess-with-pen-and
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>GitHub</Meta>
          <Link href="https://github.com/boosungkim/custom-chess-engine">
            https://github.com/boosungkim/custom-chess-engine
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Python / C++ / MySQL / DJango</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/chess-02.png" alt="Chess GUI" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
