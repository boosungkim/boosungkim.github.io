"use client";

import React from 'react'
import SectionHeading from './section-heading'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiencesData } from '@/lib/data';
import useSectionInView from '@/lib/hooks';
import Image from 'next/image';

export default function Experience() {
    const { ref } = useSectionInView("Experience", 0.5);
    
  return (
    <section ref={ref} id="experience" className="scroll-mt-28 mb-28 sm:mb-40">
        <SectionHeading>My Experience</SectionHeading>
        <VerticalTimeline lineColor="">
            {
                experiencesData.map((experience,index) => (
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
                                    <Image src={experience.imageUrl} alt="Experience Image" layout="fill" className="rounded-full" />
                                </div>}
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
                ))
            }
        </VerticalTimeline>
    </section>
  )
}
