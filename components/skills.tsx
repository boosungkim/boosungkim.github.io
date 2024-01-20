"use client";

import React from 'react'
import SectionHeading from './section-heading'
import { skillsData } from '@/lib/data'
import useSectionInView from '@/lib/hooks';
import SkillsDomain from './skills-domain';

export default function Skills() {
    const { ref } = useSectionInView("Skills");
    
  return (
    <section ref={ref} id="skills" className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40">
        <SectionHeading>My Skills</SectionHeading>
        <div className="flex flex-col sm:flex-row">
            {skillsData.map((domain, index) => (
                <React.Fragment key={index}>
                <SkillsDomain {...domain}/>
                </React.Fragment>
            ))}
        </div>
    </section>
  )
}
