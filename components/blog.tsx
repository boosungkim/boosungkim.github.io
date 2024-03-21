"use client";

import React, { useEffect } from 'react';
import SectionHeading from './section-heading';
import useSectionInView from '@/lib/hooks';

declare global {
  interface Window {
    SubstackFeedWidget: {
      substackUrl: string;
      posts: number;
      layout: string;
    };
  }
}

export default function Blog() {
  const { ref } = useSectionInView("Blog");

  useEffect(() => {
    window.SubstackFeedWidget = {
      substackUrl: "boosung.substack.com",
      posts: 4,
      layout: "right"
    };

    const script = document.createElement('script');
    script.src = "https://substackapi.com/embeds/feed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section ref={ref} id="skills" className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40">
      <SectionHeading>Recent Posts</SectionHeading>
      <div id="substack-feed-embed" className="flex flex-col sm:flex-row justify-center items-center gap-4 p-2">
  {/* The Substack feed will be injected here by the script */}
</div>


    </section>
  );
}
