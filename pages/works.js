import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbHackathon from '../public/images/works/hackathon.png'
import thumbDll from '../public/images/works/dll.png'
import thumbChess from '../public/images/works/chess.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h1" fontSize={35} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem 
            id="hackathon" 
            title="The Hackathon Trilogy" 
            thumbnail={thumbHackathon}
          >
            A trilogy of (general) hackathons I attended in a one-year time span, which changed me fundamentally as a developer.
          </WorkGridItem>
        </Section>

        <Section>
          <WorkGridItem
            id="deeplearnlab"
            title="DeepLearnLab"
            thumbnail={thumbDll}
          >
            Implementations of various computer vision algorithms like VGG, ResNet, and EfficientNet.
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="chess"
            title="Custom Chess Engine"
            thumbnail={thumbChess}
          >
            Custom chess engine that I later used for soldiers without internet access.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
