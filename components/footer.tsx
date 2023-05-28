"use client"
import Image from "next/image"
import React from "react"

export default function Footer() {
    return(
        <footer className="px-10">
            {/* <div className="h-[6vh] bg-[#18181b] flex items-center">
                    <Image src="/github.png" alt="" width={25} height={25}/>
                    <Image src="/linkedin_.png" alt="" width={25} height={25}/>
            </div> */}

            <div className="border-t-2">
                <ul className="flex flex-wrap justify-center my-2">
                    <li className="px-1">
                        <a href="https://github.com/StephenChou" target="_blank" rel="noopener noreferrer"><Image src="/github.png" alt="" width={25} height={25}/></a>
                    </li>
                    <li className="px-1">
                        <a href="https://www.linkedin.com/in/stephenchouosu/" target="_blank" rel="noopener noreferrer"><Image src="/linkedin_.png" alt="" width={25} height={25}/></a>
                    </li>
                </ul>
            </div>
            

        </footer>
    )
}