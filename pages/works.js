import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbFrody from '../public/images/works/frody.png'
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
            id="frody" 
            title="Frody" 
            thumbnail={thumbFrody}
          >
            Real-time credit card fraud detection system. PennsApps 2023 award-winning project.
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
