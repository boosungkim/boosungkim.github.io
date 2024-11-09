// import NextLink from 'next/link'
import {
  Container,
  Heading
} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import ExperienceSection from '../components/experience-section'

const Home = () => (
  <Layout>
    <Container>
      <Heading as="h1" fontSize={35} mb={4}>
        Experience
      </Heading>

      <ExperienceSection
        title="Box, Inc."
        role="SWE Intern"
        location="Redwood City, California"
        period="Summer 2024"
        description="Developed backend services to streamline file conversions, contributing to infrastructure improvements and preview/AI feature additions for seamless cloud content management."
        skills={["Scala", "Google Cloud Platform", "Kubernetes", "Distributed Systems"]}
        imageSrc="/images/experiences/box.png"
      />

      <ExperienceSection
        title="Republic of Korea Army"
        role="Underground Tunnel Detection Specialist"
        location="Paju, South Korea"
        period="2021 ~ 2023"
        description="Detected and analyzed North Korean underground activities using advanced data processing techniques and ensured operational safety in the Demilitarized Zone."
        skills={["Python", "Teamwork", "Data Analysis"]}
        imageSrc="/images/experiences/army.png"
      />

      <ExperienceSection
        title="Dickinson College"
        role="Computer Vision Research Intern"
        location="Carlisle, PA"
        period="Summer 2021"
        description="Developed Convolutional Neural Network visualization pipelines using Deconvolution, Filter Visualization, and Activation Maximization techniques written in Python and Tensorflow for easier interpretability."
        skills={["Python", "Tensorflow", "Computer Vision", "Docker"]}
        imageSrc="/images/experiences/dickinson.png"
      />

      <ExperienceSection
        title="Dickinson College"
        role="Research Assistant at Roberts Biology Lab"
        location="Carlisle, PA"
        period="Spring 2021"
        description="Developed data pipelines and trained machine learning models to predict EGR1 cancer relapse levels, contributing to weekly meetings and presenting research findings on Acute Myeloid Leukemia."
        skills={["Python", "Machine Learning"]}
        imageSrc="/images/experiences/dickinson.png"
      />

      <ExperienceSection
        title="Dickinson College"
        role="Teaching Assistant, Resident Advisor"
        location="Carlisle, PA"
        period="2020 ~ 2021, 2023 ~ Present"
        description="Taught students. Took care of students."
        skills={[]}
        imageSrc="/images/experiences/dickinson.png"
      />
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
