"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"
import { Github } from "@/components/ui/icons/Github"
import Link from "next/link"
import Image, { type StaticImageData } from "next/image"
import Container from "@/components/ui/custom/Container"
import portfolioDark from "@/media/portfolio-dark.png"
import portfolioLight from "@/media/portfolio-light.png"
import opengate from "@/media/opengate.png"
import { useTheme } from "next-themes"
import { toast } from "sonner"
import useThrottle from "@/lib/hooks/useThrottle"

interface ProjectItem {
  id: number
  title: string
  description: string
  type: 'Website' | 'Extension'
  technologies: string[]
  isPrivateRepo?: boolean
  githubUrl?: string
  liveUrl?: string
  imageUrl: string | StaticImageData
}

const projectsData: ProjectItem[] = [
  {
    id: 1,
    title: "Portfolio",
    description: "Personal portfolio website showcasing my projects and skills",
    type: "Website",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/sharxtx/portfolio",
    isPrivateRepo: false,
    liveUrl: "https://portfolio-azure-eta-87.vercel.app/",
    imageUrl: portfolioDark,
  },
  {
    id: 2,
    title: "OpenGate",
    description: "Chrome extension which allows users to read paid medium articles from freedium page.",
    technologies: ["HTML", "CSS", "JavaScript"],
    type: "Extension",
    githubUrl: "https://github.com/sharxtx/opengate",
    imageUrl: opengate,
    liveUrl: "https://chrome.google.com/webstore/detail/opengate/",
  },
]

export default function Projects() {
  const { theme } = useTheme();

  const handleExtensionLiveLinkEvent = useThrottle(() => {
    toast("Not deployed in webstore. Check out execution instructions from README file.", {
      action: {
        label: "View Code",
        onClick: () => {
          window.open("https://github.com/sharxtx/opengate", "_blank");
        },
      },
      duration: 5000,
    });
  }, 5000);

  const handlePrivateRepoEvent = useThrottle((...args: unknown[]) => {
    const projectItem = args[0] as ProjectItem;
    toast(`${projectItem.title} is private repo. Check out live project instead.`, {
      action: {
        label: "View live",
        onClick: () => {
          window.open(projectItem.liveUrl, "_blank");
        },
      },
      duration: 5000,
    });
  }, 5000);

  return (
    <section id="projects" className="pt-16 md:pt-24 px-4 md:px-6 w-full">
      <Container className="relative w-full">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold mb-2 tracking-widest">PROJECTS</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of my projects, demonstrating my skills and creativity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="group py-0 h-full flex flex-col gap-5 md:gap-0 hover:shadow-md transition-shadow">
                <CardHeader className="p-0 relative">
                  <div className="aspect-video relative overflow-hidden rounded-t-xl">
                    <Image
                      src={project.title === "Portfolio" && theme === "light" ? portfolioLight : project.imageUrl}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </CardHeader>

                <CardContent className="flex-1 px-5 md:p-5">
                  <h3 className="font-bold text-lg mb-2">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="font-normal">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="p-5 pt-0 flex items-center gap-3 text-sm justify-between">
                  {!project.isPrivateRepo ? (
                    project.githubUrl ? (
                      <Link
                        href={project.githubUrl}
                        target="_blank"
                        className="hover:bg-muted transition-colors border p-2 rounded-lg border-muted-foreground/20 flex items-center gap-2"
                      >
                        <div className="flex items-center gap-2 text-foreground">
                          <Github className="w-5 h-5 text-foreground" />
                          <p className="font-sans">Code </p>
                        </div>
                      </Link>) : (
                      <div className="flex items-center gap-2 text-foreground">
                        <Github className="w-5 h-5 text-foreground" />
                        <p className="font-sans">Link unavailable</p>
                      </div>
                    )) : (
                    <div
                      className="hover:bg-muted transition-colors border p-2 rounded-lg border-muted-foreground/20 flex items-center gap-2"
                    >
                      <div className="flex items-center gap-2 text-foreground" onClick={() => handlePrivateRepoEvent(project)} onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          handleExtensionLiveLinkEvent();
                        }
                      }}>
                        <Github className="w-5 h-5 text-foreground" />
                        <p className="font-sans">Code (Private)</p>
                      </div>
                    </div>
                  )}
                  {
                    project.type === "Extension" ? (
                      <div
                        onClick={handleExtensionLiveLinkEvent}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            handleExtensionLiveLinkEvent();
                          }
                        }}
                        className="bg-foreground text-background border p-2 rounded-lg border-muted-foreground/20 flex items-center gap-2"
                      >

                        <ExternalLink className="w-5 h-5" />

                        <span className="">Live Demo</span>
                      </div>

                    ) : (project.liveUrl ? (
                      <Link
                        href={project.liveUrl}
                        target="_blank"
                      >
                        <div
                          className="bg-foreground text-background border p-2 rounded-lg border-muted-foreground/20 flex items-center gap-2"
                        >
                          <ExternalLink className="w-5 h-5" />

                          <span className="">Live Demo</span>
                        </div>
                      </Link>
                    ) :
                      <div className="bg-foreground text-background border p-2 rounded-lg border-muted-foreground/20 flex items-center gap-2" >
                        <span className="">{project.type}</span>
                      </div>
                    )
                  }
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section >
  )
}