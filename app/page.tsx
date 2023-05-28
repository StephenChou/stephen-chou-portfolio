import ProjectSection from '@/components/project_section'
import Image from 'next/image'
import React from 'react'
import AboutSection from '@/components/about_section'
import ExperienceSection from '@/components/experience_section'

export default function Home() {
  return (
    // <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
    <main>
      <AboutSection />
      <div className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
        <ProjectSection />
        <ExperienceSection />
      </div>
    </main>
  )
}
