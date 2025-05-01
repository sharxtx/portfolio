import { motion } from "framer-motion";
import Container from '@/components/ui/custom/Container';
import Image from 'next/image';

import profile from '@/media/profile.jpg'

const Hero = () => {
    return (
        <section id="hero" className="relative flex items-center justify-center w-full h-screen bg-hero-pattern">
            <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background/30 z-0" />

            <Container className="mt-10 w-full flex flex-col-reverse md:flex-row items-center justify-evenly md:justify-between h-screen relative z-10 px-4">
                {/* Text Content */}
                <motion.div
                    className="md:w-3/4 text-center md:text-left mb-8 md:mb-0"
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

                    <motion.div
                        className="mt-8 "
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: "spring",
                            delay: 0.7,
                            stiffness: 150,
                            damping: 20
                        }}
                    >
                        <motion.a
                            href="#projects"
                            className="px-8 py-4 text-lg font-semibold rounded-full shadow-lg"
                            whileHover={{
                                scale: 1.05,
                            }}
                            whileTap={{ scale: 0.95 }}
                        >
                            View Projects
                        </motion.a>
                    </motion.div>
                </motion.div>

                {/* Image Container */}
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
            shadow-xl hover:shadow-2xl">
                        <Image
                            src={profile}
                            alt="Sharath's Profile"
                            layout="fill"
                            objectFit="cover"
                            className="scale-105 hover:scale-100 transition-transform duration-500"
                            priority
                        />
                        {/* Optional pebble shine effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent" />
                    </div>
                </motion.div>
            </Container>
        </section>
    )
}

export default Hero;