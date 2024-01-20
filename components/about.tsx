"use client";

import React from 'react'
import SectionHeading from './section-heading'
import useSectionInView from '@/lib/hooks';

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <section ref={ref} className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28" id="about">
        <SectionHeading>About Me</SectionHeading>
        <p className="mb-3">
        My interest in software development began in college when I decided to create a better college cafeteria interface with Python. Little did I know, balancing API calls and pita 🌮 options would be easier than navigating the complex tastes of college students. Who knew that an extra mayo option could crash a server?
        </p>
        <p className="mb-3">
            Fast forward to today, I've had the privilege of working at {" "}
            <a href="https://www.84lumber.com/" className="hyperlinks">84 Lumber</a>, {" "}
            <a href="https://www.dickinson.edu/" className="hyperlinks">university labs</a>,
            the <a href="https://en.wikipedia.org/wiki/1st_Infantry_Division_(South_Korea)" className="hyperlinks">South Korean Army Intelligence</a>,
            and a <a href="https://naeilconsulting.modoo.at/" className="hyperlinks">Korean start-up</a>.
            My main focus these days are building accessible digital services and completing my college diploma (expected May 2025).
        </p>
        <p className="mb-3">
            Away from my keyboard, I'm all about the outdoors. You'll often find me taking walks 🚶, enjoying hot springs ♨️, or star-gazing in open fields 🌠.
        </p>
    </section>
  )
}
