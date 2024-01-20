"use client";

import React from 'react'
import SectionHeading from './section-heading'
import useSectionInView from '@/lib/hooks';

export default function Contact() {
    const { ref } = useSectionInView("Contact", 0.5);

    return (
        <section ref={ref} id="contact" className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center">
            <SectionHeading>Contact Me</SectionHeading>
            <p className="text-gray-700 -mt-6">I love meeting new people! Whether you have a question or just want to say hi, please contact me directly at <a className="underline" href="mailto:boosung@boosungkim.com">boosung@boosungkim.com</a> or reach out to me on <a className="underline" href="https://twitter.com/bytesofboosung">Twitter</a>.</p>
        </section>
    )
}
