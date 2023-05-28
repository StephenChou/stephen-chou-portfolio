"use client"
import React from 'react'
import Image from 'next/image'

export default function AboutSection() {

    return(
        <section id="home">
            <div className="flex flex-col text-center items-center justify-center bg-[#18181b] text-[#f4f4f5] px-4 sm:px-6 space-x-5 space-y-5 h-[55vh]">

                <div className="">
                     <img src="/sc_profile.png" alt="" width="160" height="160" />
                </div>
                <div className="">
                    <h1 className="font-bold text-4xl py-1">Stephen Chou</h1>
                    <p className="text-xl">Software Engineer @ Bloomberg, graduate of The Ohio State University.</p>
                </div>
            </div>
        </section>
    )

}