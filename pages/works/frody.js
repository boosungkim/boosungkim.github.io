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
  <Layout title="Frody">
    <Container>
      <Title>
        Frody <Badge>2023</Badge>
      </Title>
      <P>
        Frody was our team&apos;s submission to PennApps 2023, where we were awarded &apos;Most Technically Complex&apos; by UPenn Enineering and &apos;Best Distributed Systems&apos; by Five Rings.
      </P>
      <P>
        Frody is a microservice on the Google Cloud Platform that uses machine learning to flag and inform users on real-time transactional data. The user can subscribe to the transactional activities for multiple cards on a centralized dashboard, where they can monitor their transactional activities. If suspicious activity is detected with Frody&apos;s fraud detection model, the users will be informed via text message immediately.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://devpost.com/software/temptemp">
          https://devpost.com/software/temptemp <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>GitHub</Meta>
          <Link href="https://github.com/PennApps-XXIV-Team">
          https://github.com/PennApps-XXIV-Team <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Java Spring Boot / Python TensorFlow / React / Google Cloud Platform / Firebase / DBT</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/frody-01.jpg" alt="Frody system design" />
      <WorkImage src="/images/works/frody-02.jpeg" alt="Team picture" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
