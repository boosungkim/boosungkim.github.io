// import NextLink from 'next/link'
import {
  // Link,
  Container,
  Heading,
  Box,
  Text
} from '@chakra-ui/react'
import Paragraph from '../components/paragraph'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Image from 'next/image'

const Home = () => (
  <Layout>
    <Container>
      <Heading as="h1" fontSize={35} mb={4}>
        Experience
      </Heading>

      <Section delay={0.1}>
        <Box display={{ md: 'flex' }} alignItems="center">
          <Box flexGrow={1}>
            <Heading as="h3" fontSize={30}>
              Box
            </Heading>
            <Heading as="h4" fontSize={20}>
              SWE Intern - Conversion Team (Storage)
            </Heading>
            <p>Redwood City, California (<Text as="span" fontStyle="italic">Summer 2024</Text>)</p>
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
              w="90px"
              h="90px"
              display="inline-block"
              borderRadius="full"
              overflow="hidden"
            >
              <Image
                src="/images/experiences/box.png"
                alt="Company logo"
                width="100"
                height="100"
              />
            </Box>
          </Box>
        </Box>

        <Paragraph>
          Developed backend services to streamline file conversions, contributing to infrastructure improvements and preview/AI feature additions for seamless cloud content management.
        </Paragraph>
      </Section>

      <Section delay={0.1}>
        <Box display={{ md: 'flex' }} alignItems="center">
          <Box flexGrow={1}>
            <Heading as="h3" fontSize={30}>
              Republic of Korea Army
            </Heading>
            <Heading as="h4" fontSize={20}>
              Tunnel Neutralization Team
            </Heading>
            <p>Paju, South Korea (<Text as="span" fontStyle="italic">2021 ~ 2023</Text>)</p>
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
              w="90px"
              h="90px"
              display="inline-block"
              borderRadius="full"
              overflow="hidden"
            >
              <Image
                src="/images/experiences/army.png"
                alt="Company logo"
                width="100"
                height="100"
              />
            </Box>
          </Box>
        </Box>

        <Paragraph>
          Detected and analyzed North Korean underground activities using advanced data processing techniques and ensured operational safety in the Demilitarized Zone.
        </Paragraph>
      </Section>

      <Section delay={0.1}>
        <Box display={{ md: 'flex' }} alignItems="center">
          <Box flexGrow={1}>
            <Heading as="h3" fontSize={30}>
              Dickinson College
            </Heading>
            <Heading as="h4" fontSize={20}>
              Computer Vision Research Intern
            </Heading>
            <p>Carlisle, PA (<Text as="span" fontStyle="italic">Summer 2021</Text>)</p>
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
              w="90px"
              h="90px"
              display="inline-block"
              borderRadius="full"
              overflow="hidden"
            >
              <Image
                src="/images/experiences/dickinson.png"
                alt="Company logo"
                width="100"
                height="100"
              />
            </Box>
          </Box>
        </Box>

        <Paragraph>
          Developed Convolutional Neural Network visualization pipelines using Deconvolution, Filter Visualization, and Activation Maximization techniques written in Python and Tensorflow for easier interpretability.
        </Paragraph>

        <br />

        <Box flexGrow={1}>
          <Heading as="h4" fontSize={20}>
            Research Assistant at Roberts Biology Lab
          </Heading>
          <p>(<Text as="span" fontStyle="italic">Spring 2021</Text>)</p>
        </Box>
        <Paragraph>
          Developed data pipelines and trained machine learning models to predict EGR1 cancer relapse levels, contributing to weekly meetings and presenting research findings on Acute Myeloid Leukemia.
        </Paragraph>

        <br />

        <Box flexGrow={1}>
          <Heading as="h4" fontSize={20}>
            Teaching Assistant
          </Heading>
          <p>(<Text as="span" fontStyle="italic">2020 ~ 2021, 2023 ~ Present</Text>)</p>
        </Box>
        <Paragraph>
          I taught students.
        </Paragraph>

        <br />

        <Box flexGrow={1}>
          <Heading as="h4" fontSize={20}>
            Resident Advisor
          </Heading>
          <p>(<Text as="span" fontStyle="italic">2020 ~ 2021, 2023 ~ Present</Text>)</p>
        </Box>
        <Paragraph>
          I took care of freshmen.
        </Paragraph>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
