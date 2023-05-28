"use client"
import ExperienceCard from "./experience_card"


const EXPERIENCE: Array<ExperienceCard> = [
    {
        img: "bloomberg.jpg",
        title: "Bloomberg - Incoming Software Engineer",
        date: "August 2023 - Present",
        tech_stack: "TBD",
        description:"Incoming Software Engineer.",
    },
    {
        img: "capital_one.png",
        title: "Capital One - Software Engineer/ML Intern",
        date: "June 2022 - August 2022",
        tech_stack: "Python, XgBoost",
        description:"Machine Learning: Trained and tuned XGBoost model to promote an approximately 35% increase in accuracy and 76% increase in sensitivity. Developed string similarity feature to feed model using Jaccard and Levenshtein algorithms, as well as image similarity feature using difference hash and transfer learning algorithms.",
    },
    {
        img: "crown.png",
        title: "Crown Equipment - Software Engineer Intern",
        date: "May 2021 - August 2021",
        tech_stack: "Angular/Typescript, Java/Spring Boot",
        description:"Overhauled the fuel card tracking process by creating a Spring Boot app to pull data for over 2000 drivers and increased efficiency in which the business tracks drivers’ expenses and fuel consumption. Responsible for developing, reviewing, maintaining, and testing production web applications. Reduced bugs in Angular applications by updating library components.",
    },

]

export default function ExperienceSection() {
    return(
        <section id="experience" className="px-4 py-4">
            <div className="mt-20 mb-8">
                <h1 className="font-bold text-4xl">Experience</h1>
                <p className="text-lg">Current and previous job experiences.</p>
            </div>
            <div className="">
                {EXPERIENCE.map((experience, idx) => {
                    return <ExperienceCard key={idx} img={experience.img} title={experience.title} date={experience.date} tech_stack={experience.tech_stack} description={experience.description}/>
                })}
            </div>

        </section>
    )
}
