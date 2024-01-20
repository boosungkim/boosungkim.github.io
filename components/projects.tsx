"use client";

import React, { useEffect } from 'react'
import SectionHeading from './section-heading'
import { projectsData } from '@/lib/data'
import Project from './project'
import useSectionInView from '@/lib/hooks';

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);
  
  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
        <SectionHeading>Feature Projects</SectionHeading>
        <div className="">
            {projectsData.map((project, index) => (
                <React.Fragment key={index}>
                <Project {...project}/>
                </React.Fragment>
            ))}
            <div className="flex flex-col items-center">
              <a href="https://github.com/boosungkim" download={true} className="bg-white-200 px-7 py-3 w-52 flex items-center gap-2 rounded-full outline-none focus:scale-105 focus:bg-orange-600 hover:scale-105 hover:bg-orange-600 active:scale-103 transition cursor-pointer borderBlack justify-center text-lg font-medium">
                      View More
                  </a>
            </div>
          </div>
    </section>
  )
}