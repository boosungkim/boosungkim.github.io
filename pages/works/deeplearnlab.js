import {
  Container,
  Badge,
  Link,
  List,
  ListItem
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="DeepLearnLab">
    <Container>
      <Title>
        DeepLearnLab <Badge>2023</Badge>
      </Title>
      <P>
        DeepLearnLab is a visual accumulation of my Pytorch implementations of milestone papers in Deep Learning. When I was doing active research in the AI field, I implemented various computer vision algorithms like VGG, ResNet, and EfficientNet. I thought it would be a good idea to share my implementations with the world, so I created a website to showcase my work.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <span>
            <Link href="https://boosungkim.github.io/dllab/" target="_blank">
            https://boosungkim.github.io/dllab/ <ExternalLinkIcon mx="2px" />
            </Link>
          </span>
        </ListItem>
        <ListItem>
          <Meta>GitHub</Meta>
          <span>
            <Link href="https://github.com/boosungkim/dllab" target="_blank">
            https://github.com/boosungkim/dllab <ExternalLinkIcon mx="2px" />
            </Link>
          </span>
        </ListItem>
        <ListItem>
          <Meta>Blog</Meta>
          <span>
            <Link href="https://boosung.substack.com/p/i-implemented-5-cnn-papers-heres" target="_blank">
            https://boosung.substack.com/p/i-implemented-5-cnn-papers-heres <ExternalLinkIcon mx="2px" />
            </Link>
          </span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>
            Python PyTorch
          </span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/dll-01.png" alt="DeepLearnLab" />
      <WorkImage src="/images/works/dll-02.png" alt="Example code explanation" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
