import { Container, Heading } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Image from 'next/image';
import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiencesData } from '/lib/data';

const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Experience
      </Heading>

      <VerticalTimeline lineColor="">
            {experiencesData.map((experience, index) => (
              <React.Fragment key={index}>
                <VerticalTimelineElement
                  visible={true}
                  contentStyle={{
                    background: "rgb(229,231,235)",
                    boxShadow: "none",
                    border: "1px solid rgba(0,0,0,0.05)",
                    textAlign: "left",
                    padding: "1.3rem 2rem",
                  }}
                  contentArrowStyle={{
                    borderRight: "0.4rem solid #9ca3af"
                  }}
                  date={experience.date}
                  icon={
                    <div className="flex justify-center items-center h-full w-full rounded-full overflow-hidden">
                      <Image src={experience.imageUrl} alt="Experience Image" fill className="rounded-full" />
                    </div>
                  }
                  iconStyle={{
                    background: "white",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "1.5rem",
                  }}
                >
                  <h3 className="font-semibold !mt-0">
                    {experience.company}
                    <span className="font-normal text-gray-600"> ({experience.location})</span>
                  </h3>

                  {experience.title.map((exp, index) => (
                    <React.Fragment key={index}>
                      <p className="font-semibold capitalize">{exp}</p>
                      {experience.description[index].map((line, ind) => (
                        <p className="!mt-1 !font-normal text-gray-700" key={ind}>{"• " + line}</p>
                      ))}
                    </React.Fragment>
                  ))}
                </VerticalTimelineElement>
              </React.Fragment>
            ))}
          </VerticalTimeline>
      
    </Container>
  </Layout>
)

export default Posts
export { getServerSideProps } from '../components/chakra'
