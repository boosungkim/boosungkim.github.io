import { StaticImageData } from 'next/image'
import Image from 'next/image'
import { FiGithub } from "react-icons/fi";
import { FaExternalLinkAlt } from "react-icons/fa";


type ProjectProps = {
    title: string;
    description: string;
    tags: readonly string[];
    link: string;
    github: string;
    imageUrl: StaticImageData;
}

export default function Project({title, description, tags, link, github, imageUrl}: ProjectProps) {
    return (
        <section className="group bg-gray-200 max-w-[42rem] border border-black/5 overflow-hidden sm:pr-3 relative sm:h-[20rem] mb-3 sm:mb-8 last:mb-0 sm:even:pl-8 hover:bg-gray-300 transition rounded-lg">
            <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem] mb-5 sm:mb-0">
                <h3 className="text-2xl font-semibold">{title}</h3>
                <p className="mt-2 leading-relaxed text-gray-700">{description}</p>
                <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
                    {tags.map((tag,index) => (
                        <li className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full" key={index}>{tag}</li>
                    ))}
                </ul>
            </div>

            <div className="absolute hidden sm:block top-0 -right-40 w-[40rem] h-full group-even:-right-[initial] group-even:-left-40 bg-gray-10 rounded-t-lg">
                <Image 
                    src={imageUrl} 
                    alt={title} 
                    quality={95} 
                    layout="fill" 
                    objectFit="contain"
                />
            </div>

            {/* <Image src={imageUrl} alt={title} quality={95} layout="fill" objectFit="contain" className="absolute hidden sm:block top-0 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl group-even:-right-[initial] group-even:-left-40" /> */}


            <a href={github} target="_blank" rel="noopener noreferrer" className="absolute bottom-2 right-3 bg-black text-white py-2 px-4 rounded hover:bg-gray-800">
                <FiGithub />
            </a>

            <a href={link} target="_blank" rel="noopener noreferrer" className="absolute bottom-2 right-[calc(4rem+4px)] bg-black text-white py-2 px-4 rounded hover:bg-gray-800">
                <FaExternalLinkAlt />
            </a>

        </section>
    )
}