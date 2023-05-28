"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default interface ProjectCard {
    img: string,
    title: string,
    tech_stack: string,
    description: string,
    github_url: string,
    proj_url: string
}

export default function ProjectCard ({img, title, tech_stack, description, github_url, proj_url = ''}: ProjectCard) {
    
    return(
        <div className="max-w-sm bg-white rounded-lg h-128 px-4 py-4 my-5 transform hover:scale-105 duration-100 hover:shadow-lg ">
            
                <div className="pb-4 relative bottom-50">
                    <Image src={`/${img}`} alt="" width={50} height={50} className="bottom-50"/>
                    <h2 className="font-bold text-xl">{title}</h2>
                    <p className="text-sm text-[#9ca3af]">{tech_stack}</p>
                </div>
                
                <div className="flex-shrink-0 h-32">
                    {description}
                </div>
                <div className="my-5">
                    {proj_url.length > 0 && <a href={proj_url} target="_blank" rel="noopener noreferrer"><button className="rounded-xl bg-black text-white text-xs flex-shrink-0 w-[65px] h-[24px] mx-1">Website</button></a>}
                    <a href={github_url} target="_blank" rel="noopener noreferrer"><button className="rounded-xl bg-black text-white text-xs flex-shrink-0 w-[65px] h-[24px] mx-1">GitHub</button></a>
                </div>

        </div>
    )
}