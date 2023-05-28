"use client"
import React from 'react'
import ProjectCard from './project_card'

const PROJECTS: Array<ProjectCard> = [
    {
        img: "surprisify.png",
        title: "Surprisify",
        tech_stack: "Python, Flask, SQL",
        description: "Spotify playlist generator using Spotify's API. Generates a playlist with obscurity based off user-input level.",
        github_url: "https://github.com/StephenChou/Surprisify-Playlist-Generator",
        proj_url: "https://www.surprisify.me"
    },
    {
        img: "nvidia_img.png",
        title: "Nvidia digital vibrance detector",
        tech_stack: "C/C++",
        description: "Detects if a specific program/game is running and sets the digital vibrance appropriately.",
        github_url: "https://github.com/StephenChou/nvidia_digital_vibrance",
        proj_url: ""
    }
]

export default function ProjectSection() {
    return(
        <section id="projects" className = "px-4 py-4">
            
            <div className="mt-20 mb-8">
                <h1 className="font-bold text-4xl">Projects</h1>
            </div>
            <div className="md:grid md:grid-cols-2 mx-5">
                {PROJECTS.map((project, idx) => {
                    return <ProjectCard key={idx} img={project.img} title={project.title} tech_stack = {project.tech_stack} description = {project.description} github_url={project.github_url} proj_url = {project.proj_url}/>
                })}
            </div>
            
        </section>
    )
}