'use client';

import { motion } from "framer-motion"
import dreamcasaLogo from "@/media/dreamcasa.png"
import capgeminiLogo from "@/media/capgemini.png"
import mazikLogo from "@/media/maziktech.png"
import type { StaticImageData } from "next/image";
import ExperienceCard from "@/components/sections/home/Experience/ExperienceCard";
import Container from "@/components/ui/custom/Container";

interface ExperienceItem {
    id: number
    role: string
    company: string
    location: string
    period: string
    description: string[]
    skills: string[]
    companyUrl?: string
    logoUrl?: string | StaticImageData
}

const experienceData: ExperienceItem[] = [
    {
        id: 1,
        role: "Software Engineer",
        company: "Capgemini",
        location: "Bengaluru, India",
        period: "Oct 2023 - Present",
        description: [
            "Collaborated with cross-functional teams to develop scalable and maintainable backend services using Spring Boot.",
            "Maintained a robust multitenant Spring Boot application, supporting multiple clients with isolated data and configurations.",
            "Assisted in migrating a legacy monolithic system to a scalable microservices architecture, improving maintainability and performance.",
            "Built responsive and user- friendly UIs using HTML, CSS, JavaScript, and Bootstrap to deliver a modern user experience.",
            "Proposed and developed a browser extension that increased user engagement by 55 % through enhanced usability and accessibility.",
            "Developed background jobs to automate document processing from SharePoint and Confluence, streamlining workflows.",
        ],
        skills: ["Java", "Spring Boot", "Microservices", "Postgres", "REST", "HTML", "CSS", "JS"],
        companyUrl: "https://www.capgemini.com/",
        logoUrl: capgeminiLogo,
    },
    {
        id: 2,
        role: "Freelance - Full stack Developer",
        company: "Dream Casa",
        location: "Remote",
        period: "Aug 2024 - Jan 2025",
        description: [
            "Developed a fully responsive, modern web application using Next.js and Tailwind CSS, ensuring optimal performance across devices.",
            "Integrated secure user authentication with Auth.js, supporting multiple providers and enhancing overall security.",
            "Built robust eCommerce functionality, including dynamic cart and wishlist systems with persistent state.",
            "Engineered a scalable property listing module featuring Google Maps integration for precise location selection and display."
        ],
        skills: ["NextJS", "TypeScript", "Strapi", "NestJS", "Postgres", "TailwindCSS", "TypeORM"],
        companyUrl: "http://www.dreamcasarealestate.in",
        logoUrl: dreamcasaLogo,
    },
    {
        id: 3,
        role: "Associate Technical Consultant",
        company: "MazikTech Solutions",
        location: "Hyderabad, India",
        period: "Jul 2023 - Sep 2023",
        description: [
            "Integrated interactive maps using Syncfusion to display accurate hospital locations, improving user navigation and location accuracy.",
            "Developed and implemented user forms with robust validation mechanisms in .NET, ensuring a seamless and error- free user experience.",
            "Created and delivered multiple Proofs of Concept(POCs) to demonstrate the feasibility and effectiveness of new solutions."
        ],
        skills: ["HTML5", "CSS3", "JavaScript", "jQuery", "Bootstrap"],
        companyUrl: "https://maziktech.com/",
        logoUrl: mazikLogo,
    },
]

export default function Experience() {

    return (
        <section id="experience" className="pt-24 mx-auto">
            <Container className="w-full relative">
                <div className="mb-10 text-center">
                    <h2 className="text-4xl font-bold mb-2">EXPERIENCE</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        My professional journey and the companies I&apos;ve had the pleasure to work with.
                    </p>
                </div>

                <div className="space-y-8 relative before:absolute before:top-0 before:bottom-0 before:left-5 before:w-0.5 before:bg-gradient-to-b before:from-primary/60 before:via-primary/40 before:to-primary/20 md:before:left-1/2">
                    {experienceData.map((experience, index) => {
                        return (
                            <div key={experience.id} className="relative group">
                                <div className="absolute left-4 top-5 h-3 w-3 rounded-full bg-primary md:left-1/2 md:-ml-[5px]" />

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.3, delay: 0.3 }}
                                    className={`ml-12 md:ml-0 ${index % 2 === 0 ? "md:mr-auto md:pr-8 md:text-right" : "md:ml-auto md:pl-8"} md:max-w-[calc(50%-40px)]`}
                                >

                                    <ExperienceCard key={experience.id} {...experience} />
                                </motion.div>
                            </div>
                        )
                    })}
                </div>
            </Container>
        </section>
    )
}
