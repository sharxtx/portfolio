import { motion, AnimatePresence } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Briefcase, Calendar, ExternalLink } from "lucide-react"
import Link from "next/link"
import Image, { type StaticImageData } from "next/image"
import { cn } from "@/lib/utils";
import { useState } from "react"
import CursorAura from "@/components/ui/custom/CursorAura"

interface ExperienceItem {
    role: string
    company: string
    location: string
    period: string
    description: string[]
    skills: string[]
    companyUrl?: string
    logoUrl?: string | StaticImageData
}

const ExperienceCard: React.FC<ExperienceItem> = ({ role, company, location, period, description, skills, companyUrl, logoUrl }: ExperienceItem) => {
    const [isHovered, setIsHovered] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setPosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        });
    };

    return (
        <div className="relative group overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onMouseMove={handleMouseMove}>

            <Card className="overflow-hidden border-l-4 z-10 border-l-primary hover:shadow-md transition-shadow">
                <CardContent className="p-0 overflow-hidden">
                    <div className="p-5">
                        <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-3">
                                {logoUrl && (
                                    <div className={cn("w-12 h-12 p-3 rounded-full overflow-hidden flex items-center justify-center bg-background", company === "Dream Casa" ? "bg-[#10112b]" : "")}>
                                        <Image
                                            src={logoUrl}
                                            alt={company}
                                            width={40}
                                            height={40}
                                        />
                                    </div>
                                )}
                                <div>
                                    <h3 className="font-bold text-lg text-left">{role}</h3>
                                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                        {companyUrl ? (
                                            <Link
                                                href={companyUrl}
                                                className="hover:text-primary flex items-center gap-1"
                                                target="_blank"
                                            >
                                                <Briefcase className="w-3.5 h-3.5" />
                                                <span>{company}</span>
                                                <ExternalLink className="w-3 h-3" />
                                            </Link>
                                        ) : (
                                            <span className="flex items-center gap-1">
                                                <Briefcase className="w-3.5 h-3.5" />
                                                <span>{company}</span>
                                            </span>
                                        )}
                                        <span className="mx-1">•</span>
                                        <span>{location}</span>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="flex items-center text-sm text-muted-foreground mb-3">
                            <Calendar className="w-3.5 h-3.5 mr-1" />
                            <span>{period}</span>
                        </div>

                        <AnimatePresence>
                            <motion.div
                                key="content"
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <ul className="list-disc pl-5 space-y-1 mb-4 text-sm text-left text-muted-foreground    ">
                                    {description.map((item) => (
                                        <li key={item}>{item}</li>
                                    ))}
                                </ul>

                                <div className="flex flex-wrap gap-2 mt-3">
                                    {skills.map((skill) => (
                                        <Badge key={skill} variant="secondary" className="font-normal">
                                            {skill}
                                        </Badge>
                                    ))}
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </CardContent>
            </Card>
            <AnimatePresence>
                {isHovered && (
                    <CursorAura
                        x={position.x}
                        y={position.y}
                        className="bg-primary/20"
                    />
                )}
            </AnimatePresence>
        </div>
    )
}

export default ExperienceCard