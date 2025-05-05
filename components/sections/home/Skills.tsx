"use client"

import { motion } from "framer-motion"
import { Code, Database, Server, GitBranch, Layers, Code2 } from "lucide-react"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Container from "@/components/ui/custom/Container"
import { FaReact, FaNodeJs, FaJava } from "react-icons/fa";
import { SiSpringboot, SiNextdotjs, SiPostgresql, SiTailwindcss, SiTypescript, SiHtml5, SiJavascript, SiExpress, SiNestjs, SiShadcnui, SiTypeorm, SiMongodb, SiMysql, SiCplusplus, SiFramer } from "react-icons/si";

export default function SkillsSection() {

  const skillCategories = [
    {
      id: "frontend",
      name: "Frontend",
      icon: <Code2 className="h-5 w-5" />,
      skills: [
        { name: "Next.js", proficiency: 80, icon: <SiNextdotjs className="h-4 w-4" /> },
        { name: "React", proficiency: 70, icon: <FaReact className="h-4 w-4" /> },
        { name: "TypeScript", proficiency: 80, icon: <SiTypescript className="h-4 w-4" /> },
        { name: "Tailwind CSS", proficiency: 95, icon: <SiTailwindcss className="h-4 w-4" /> },
        { name: "HTML/CSS", proficiency: 90, icon: <SiHtml5 className="h-4 w-4" /> },
        { name: "JavaScript", proficiency: 90, icon: <SiJavascript className="h-4 w-4" /> },
      ],
    },
    {
      id: "backend",
      name: "Backend",
      icon: <Server className="h-5 w-5" />,
      skills: [
        { name: "Spring", proficiency: 80, icon: <FaJava className="h-4 w-4" /> },
        { name: "Spring boot", proficiency: 85, icon: <SiSpringboot className="h-4 w-4" /> },
        { name: "REST APIs", proficiency: 85, icon: <Code className="h-4 w-4" /> },
        { name: "Nest Js", proficiency: 70, icon: <SiNestjs className="h-4 w-4" /> },
        { name: "Node.js", proficiency: 70, icon: <FaNodeJs className="h-4 w-4" /> },
        { name: "Express", proficiency: 70, icon: <SiExpress className="h-4 w-4" /> },
      ],
    },
    {
      id: "tools",
      name: "Languages & Tools",
      icon: <Layers className="h-5 w-5" />,
      skills: [
        { name: "Git", proficiency: 90, icon: <GitBranch className="h-4 w-4" /> },
        { name: "Zustand", proficiency: 80, icon: <Code className="h-4 w-4" /> },
        { name: "Shadcn UI", proficiency: 90, icon: <SiShadcnui className="h-4 w-4" /> },
        { name: "Framer Motion", proficiency: 60, icon: <SiFramer className="h-4 w-4" /> },
        { name: "Java", proficiency: 90, icon: <FaJava className="h-4 w-4" /> },
        { name: "C++", proficiency: 70, icon: <SiCplusplus className="h-4 w-4" /> },
      ],
    },
    {
      id: "database",
      name: "Database",
      icon: <Database className="h-5 w-5" />,
      skills: [
        { name: "MongoDB", proficiency: 80, icon: <SiMongodb className="h-4 w-4" /> },
        { name: "PostgreSQL", proficiency: 75, icon: <SiPostgresql className="h-4 w-4" /> },
        { name: "TypeORM", proficiency: 85, icon: <SiTypeorm className="h-4 w-4" /> },
        { name: "Convex", proficiency: 70, icon: <Code2 className="h-4 w-4" /> },
        { name: "MySQL", proficiency: 70, icon: <SiMysql className="h-4 w-4" /> },
      ],
    },
  ]

  return (
    <section id="skills" className="pt-16 mx-auto w-full">
      <Container className="w-full relative">
        <div className="mb-10 text-center">
          <h2 className="text-4xl font-bold mb-2 tracking-widest">SKILLS</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I&apos;ve worked with a variety of technologies and tools over the years.
          </p>
        </div>
        
        <Tabs defaultValue="frontend" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="h-auto grid grid-cols-4 gap-1 p-1">
              {skillCategories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="flex flex-col sm:flex-row items-center p-2 text-xs cursor-pointer rounded-lg hover:bg-muted-foreground/10 transition-colors duration-200 ease-in-out"
                >
                  <span className="mb-1 sm:mb-0">{category.icon}</span>
                  <span className="text-[10px] sm:text-xs md:text-sm px-2 text-wrap">{category.name}</span>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {skillCategories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="bg-card rounded-lg p-5 border shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <div className="bg-primary/10 p-2 rounded-md">{skill.icon}</div>
                        <h3 className="font-medium">{skill.name}</h3>
                      </div>
                      <Badge variant={getProficiencyVariant(skill.proficiency)}>
                        {getProficiencyLabel(skill.proficiency)}
                      </Badge>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className={cn(
                          "h-2 rounded-full bg-primary transition-all duration-1000 ease-in-out",
                          getProficiencyColorClass(skill.proficiency),
                        )}
                        style={{ width: `${skill.proficiency}%` }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </Container>
    </section>
  )
}

function getProficiencyLabel(proficiency: number): string {
  if (proficiency >= 90) return "Expert"
  if (proficiency >= 75) return "Advanced"
  if (proficiency >= 60) return "Intermediate"
  return "Beginner"
}

function getProficiencyVariant(proficiency: number): "default" | "secondary" | "outline" {
  if (proficiency >= 90) return "default"
  if (proficiency >= 75) return "secondary"
  return "outline"
}

function getProficiencyColorClass(proficiency: number): string {
  if (proficiency >= 90) return "bg-primary"
  if (proficiency >= 75) return "bg-primary"
  if (proficiency >= 60) return "bg-primary/80"
  return "bg-primary/60"
}
