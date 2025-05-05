'use client'

import { motion, useAnimation } from "framer-motion";
import Container from '@/components/ui/custom/Container';
import Image from 'next/image';

import profile from '@/media/profile.jpg'
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowDown, Download } from "lucide-react";

const Hero = () => {
    const controls = useAnimation();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        if (!scrolled) {
            const sequence = async () => {
                await controls.start({
                    opacity: 1,
                    y: 0,
                    transition: {
                        type: "spring",
                        stiffness: 100,
                        damping: 20,
                        delay: 0.7
                    }
                });

                controls.start({
                    y: [0, -10, 5, 0],
                    transition: {
                        duration: 1,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatDelay: 2.5,
                        ease: "easeInOut"
                    }
                });
            };
            sequence();
        }
    }, [scrolled, controls]);

    return (
        <section id="hero" className="relative flex items-center justify-center w-full h-screen bg-hero-pattern">
            <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background/30 z-0" />

            <Container className="mt-10 w-full flex flex-col-reverse md:flex-row items-center justify-center gap-16 md:justify-between h-screen relative z-10 px-4">
                <motion.div
                    className="md:w-3/4 text-center md:text-left mb-8 md:mb-0 flex flex-col md:gap-2"
                    initial="hidden"
                    animate="visible"
                >
                    <motion.h1
                        className="text-4xl md:text-6xl font-bold text-foreground mb-2 md:leading-16"
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: { opacity: 1, y: 0 }
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 100,
                            damping: 20,
                            delay: 0.1
                        }}
                    >
                        Hello, <span className="whitespace-nowrap">I&apos;m <span className="text-primary">Sharath</span></span>
                    </motion.h1>

                    <motion.p
                        className="text-xl md:text-2xl text-foreground font-medium"
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0 }
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 100,
                            damping: 20,
                            delay: 0.3
                        }}
                    >
                        Software Developer
                    </motion.p>

                    <motion.p
                        className="mt-4 text-muted-foreground text-sm md:text-md"
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0 }
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 100,
                            damping: 20,
                            delay: 0.5
                        }}
                    >
                        Building clean frontends and powerful, scalable backends<br />
                        Creating web experiences that work
                    </motion.p>

                    <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3 mt-4">
                        <motion.a
                            href='/resume.pdf'
                            download="Sharath-Resume.pdf"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.7 }}
                            className="group flex items-center justify-center gap-2 text-primary border-2 border-primary/80 bg-transparent px-4 py-2 text-md rounded-lg hover:bg-primary/10 transition-colors duration-300 sm:w-auto"
                        >
                            Download Resume
                            <Download className="h-4 w-4 transition-all ease-in-out duration-300 group-hover:translate-y-0.5" />
                        </motion.a>
                        <Link href="#projects">
                            <motion.button
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.8 }}
                                className="group flex items-center justify-center gap-2 text-white bg-primary/90 px-4 py-2 text-md rounded-lg hover:bg-primary transition-colors duration-300 w-full sm:w-auto"
                            >
                                View projects
                                <svg
                                    className="h-4 w-4 transition-all ease-in-out duration-500"
                                    viewBox="2 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    alternate-title="Arrow Right"
                                    role="img"
                                    aria-label="Arrow Right"
                                >
                                    <g className="group-hover:scale-x-120 origin-left transition-transform duration-200">
                                        <line x1="4" y1="12" x2="20" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                        <polyline
                                            points="14,6 20,12 14,18"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </g>
                                </svg>
                            </motion.button>
                        </Link>
                    </div>
                </motion.div>

                <motion.div
                    className="md:w-1/3 flex justify-center items-center"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                        type: "spring",
                        delay: 0.4,
                        stiffness: 100,
                        damping: 20
                    }}
                >
                    <div className="relative w-[200px] h-[200px] md:w-[300px] md:h-[300px] 
            overflow-hidden 
            rounded-[40%_60%_60%_40%_/_60%_40%_60%_40%]
            rotate-3 hover:rotate-6 transition-transform duration-500
            shadow-xl shadow-black/20">
                        <Image
                            src={profile}
                            alt="Sharath's Profile"
                            layout="fill"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            objectFit="cover"
                            className="scale-105 hover:scale-100 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent" />
                    </div>
                </motion.div>
            </Container>


            {!scrolled && <motion.div initial={{ opacity: 0, y: 20 }} animate={controls} transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.7 }} className="absolute bottom-0 text-center w-full h-16"><span className="flex items-center justify-center gap-2"> Scroll Down <ArrowDown /></span> </motion.div>}
        </section>
    )
}

export default Hero;