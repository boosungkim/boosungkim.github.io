import React from 'react'
import { FaGears } from 'react-icons/fa6';
import { RiInfinityLine, RiRobot2Fill } from "react-icons/ri";

type IconTitle = 'Backend' | 'Deep Learning' | 'DevOps';

type SkillsDomainProps = {
    title: IconTitle;
    skills: readonly string[];
}

const ICONS = {
    'Backend': FaGears,
    'Deep Learning': RiRobot2Fill,
    'DevOps': RiInfinityLine,
  };

export default function SkillsDomain({ title, skills }: SkillsDomainProps) {
    const IconComponent = ICONS[title];
  return (
    <section className="group bg-gray-200 sm:w-1/3 border border-black/5 overflow-hidden sm:mr-4 last:sm:mr-0 rounded-lg flex flex-col items-center justify-between mb-5 last:mb-5 sm:mb-0 last:sm:mb-0">
      <div className="flex flex-col items-center justify-center text-center mt-1">
        <div className="flex justify-center items-center h-[8rem] w-[8rem] rounded-full border-[0.35rem] border-white shadow-xl mt-4">
            <IconComponent size={70}/>
        </div>

        <h3 className="text-2xl font-semibold mt-4">{title}</h3>
        <ul className="flex flex-wrap justify-center gap-2 mt-4 mb-4">
          {skills.map((skill, index) => (
            <li className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full" key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

