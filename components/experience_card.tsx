"use client"
import React from "react"
import Image from "next/image"

export default interface ExperienceCard {
    img: string,
    title: string,
    date: string,
    tech_stack: string,
    description: string,
}

export default function ExperienceCard({img, title, date, tech_stack, description}: ExperienceCard) {
    return(
            <div className="bg-white rounded-lg px-6 py-6 my-8 transform hover:scale-105 duration-100 hover:shadow-lg ">
            <div className="pb-4 relative bottom-50">
                <Image src={`/${img}`} alt="" width={50} height={50} className="bottom-50"/>
                <h2 className="font-bold text-xl">{title}</h2>
                <p className="text-sm">{date}</p>
                <p className="text-sm text-[#9ca3af]">{tech_stack}</p>
            </div>
            
            <div className="flex-shrink-0">
                {description}
            </div>
            
        </div>
    )
}