import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  Heading
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Frody">
    <Container>
      <Title>
        The Hackathon Trilogy <Badge>2023 ~ 2024</Badge>
      </Title>
      
      <P>
      From September 2023 to October 2024, I attended 3 general hackathons:
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>At PennApps,</Meta>
          I set up an AI model to detect credit card fraud 💳, which introduced me to hackathons.
        </ListItem>
        <ListItem>
          <Meta>At HoyaHacks,</Meta>
          I developed a backend structure that unfortunately didn&apos;t work as intended. 😅
        </ListItem>
        <ListItem>
          <Meta>At HackHarvard,</Meta>
          I designed the overall architecture and implemented the backend and data streaming infrastructure to produce our first fully working hackathon demo. 🎯
        </ListItem>
      </List>

      <P>
        Through these experiences, I progressed from focusing on small, isolated components to designing and implementing comprehensive projects. Seeing a fully working demo for the first time was rewarding, but more importantly, it marked a milestone in my journey from tackling individual tasks to owning larger projects!
      </P>
      

      <Heading as="h3" variant="section-title">
          Frody
      </Heading>

      <P>
        Real-time credit card fraud detection system. PennsApps 2023 award-winning project.
      </P>

      <WorkImage src="/images/works/hackathon-frody.png" alt="frody" />

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Devpost</Meta>
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


      <Heading as="h3" variant="section-title">
          Prospectus
      </Heading>

      <P>
        An AI assistant to answer questions about specific colleges. Prospectus is designed to answer questions ranging from general Academics and Campus Life questions to specific Meal Plans and Menus.
      </P>

      <WorkImage src="/images/works/hackathon-prospectus.jpg" alt="prospectus" />

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Devpost</Meta>
          <Link href="https://devpost.com/software/prospectus">
          https://devpost.com/software/prospectus <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>GitHub</Meta>
          <Link href="https://github.com/HoyaHacks2024-Team">
          https://github.com/HoyaHacks2024-Team <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Microsoft Azure, Python Django, ReactJS, Kubernetes, MongoDB Atlas, Cloudflare</span>
        </ListItem>
      </List>


      <Heading as="h3" variant="section-title">
          Albatross
      </Heading>

      <P>
        An AI-powered navigation for safer, smarter cities using real-time crime datas. Using real-time crime data, Albatross provides the safest route to your destination.
      </P>

      <WorkImage src="/images/works/hackathon-albatross.png" alt="albatross" />

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Devpost</Meta>
          <Link href="https://devpost.com/software/albatross">
          https://devpost.com/software/albatross <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>GitHub</Meta>
          <Link href="https://github.com/orgs/HackHarvard2024-Team">
          https://github.com/orgs/HackHarvard2024-Team <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>AWS, Cloudflare, Databricks, Here Routing API, VueJS, Scala, Python</span>
        </ListItem>
      </List>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
