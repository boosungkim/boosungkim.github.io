import {
    Heading,
    Box,
    Text,
    Tag,
    Stack,
} from '@chakra-ui/react'
import Paragraph from './paragraph'
import Section from './section'
import Image from 'next/image'

const ExperienceSection = ({ title, role, location, period, description, skills, imageSrc }) => (
  <Section delay={0.1}>
    <Box
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      mb={6}
      p={4}
      borderRadius="lg"
      boxShadow="md"
      transition="all 0.3s ease"
      _hover={{
        transform: "translateY(-5px)",
        boxShadow: "lg",
        borderColor: "teal.500",
        backgroundColor: "teal.900",
      }}
      borderWidth={2}
      borderStyle="solid"
    >
      <Box display={{ md: 'flex' }} alignItems="center" w="100%">
        <Box flexGrow={1}>
          <Heading as="h3" fontSize={25} fontWeight="bold">
            {title}
          </Heading>
          <Text fontSize={18} fontWeight="semibold" color="gray.500">
            {role}
          </Text>
          <Text fontSize={16} color="gray.400" mt={1}>
            {location} <Text as="span" fontStyle="italic">({period})</Text>
          </Text>
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
              src={imageSrc}
              alt="Company logo"
              width="90"
              height="90"
            />
          </Box>
        </Box>
      </Box>
      <Paragraph mt={3}>
        {description}
      </Paragraph>
      <Stack direction="row" wrap="wrap" mt={3} spacing={2}>
        {skills.map(skill => (
          <Tag key={skill} size="md" colorScheme="teal" mb={1}>
            {skill}
          </Tag>
        ))}
      </Stack>
    </Box>
  </Section>
)

export default ExperienceSection