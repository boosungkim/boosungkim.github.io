"use client";

import Image from 'next/image'
import React from 'react'
import profileImg from '@/public/profile.png'
import Link from 'next/link'
import { BsLinkedin } from "react-icons/bs"
import { HiDownload } from "react-icons/hi"
import { FaGithubSquare } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'
import useSectionInView from '@/lib/hooks';
import { useActiveSectionContext } from '@/context/active-section-context';


export default function Intro() { 
    const { ref } = useSectionInView("Home", 0.5);
    const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

    return (
        <section ref={ref} className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]" id="home">
            <div className="flex items-center justify-center">
                <div>
                    <Image 
                        src={profileImg} 
                        alt="Boosung Kim"
                        quality="95"
                        priority={true}
                        className="h-40 w-40 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
                    />
                </div>
            </div>

            <h1 className="mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl">
                Hi, I'm <span className="font-bold">Boosung Kim!</span> I create innovative tech solutions for the world.
            </h1>
            <p className="mb-10 mt-2 sm:mx-auto sm:w-[40rem] px-4">
                I am a Software Engineer specializing in building backend and ML services with about <a href="#experience" className="hyperlinks">2 years</a> of experience. I'm currently attending Dickinson College (expected 2025).
            </p> 

            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium">
                <Link href="#contact" className="bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-105 focus:bg-orange-600 hover:scale-105 hover:bg-orange-600 active:scale-103 transition" onClick={() => {
                    setActiveSection("Contact");
                    setTimeOfLastClick(Date.now());
                }}>Contact me!
                </Link>
                <a href="/resume.pdf" download={true} className="bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-105 focus:bg-orange-600 hover:scale-105 hover:bg-orange-600 active:scale-103 transition cursor-pointer borderBlack">
                    Download Resume <HiDownload className="opacity-70"/>
                </a>
                <div className="flex gap-2">
                    <a href="https://www.linkedin.com/in/boosungk"target="_blank" className="bg-white text-gray-700 p-4 flex items-center gap-2 rounded-full outline-none focus:scale-110 focus:bg-orange-600 hover:scale-110 hover:bg-orange-600 hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack">
                        <BsLinkedin/>
                    </a>
                    <a href="https://github.com/boosungkim" target="_blank" className="bg-white text-gray-700 p-4 flex items-center gap-2 rounded-full text-[1.35rem] outline-none focus:scale-110 focus:bg-orange-600 hover:scale-110 hover:bg-orange-600 hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack">
                        <FaGithubSquare/>
                    </a>
                    <a href="https://twitter.com/bytesofboosung" target="_blank" className="bg-white text-gray-700 p-4 flex items-center gap-2 rounded-full text-[1.35rem] outline-none focus:scale-110 focus:bg-orange-600 hover:scale-110 hover:bg-orange-600 hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack">
                        <FaSquareXTwitter/>
                    </a>
                </div>
            </div>
        </section>
    )
}
