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
        <div className="max-w-sm bg-white rounded-lg h-128 px-4 py-4 my-5 transform hover:scale-105 duration-100 hover:shadow-lg h-[42vh]">
            
                <Link href={proj_url.length > 0 ? proj_url : github_url} target="_blank">
                <div className="pb-4 relative bottom-50">
                    <Image src={`/${img}`} alt="" width={50} height={50} className="bottom-50"/>
                    <h2 className="font-bold text-xl">{title}</h2>
                    <p className="text-sm text-[#9ca3af]">{tech_stack}</p>
                </div>
                
                <div className="flex-shrink-0 h-[20vh]">
                    {description}
                </div>
                <div className="flex justify-end">
                    <Image src="/external.png" alt="" width={20} height={20} className=""/>
                </div>
                </Link>
        </div>
    )
}