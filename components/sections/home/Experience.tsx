import React from 'react'

const Experience = () => {
    return (
        <section id="experience" className="flex flex-col items-center justify-center w-full h-screen bg-background text-foreground">
            <div className="w-full flex flex-col items-center justify-center h-screen">
                <div className="text-center transition-all duration-300">
                    <h1 className="text-5xl font-bold text-foreground">Experience</h1>
                    <p className="mt-4 text-lg text-foreground">I&apos;m a software developer.</p>
                    <a href="#projects" className="mt-6 inline-block px-6 py-3 text-lg font-semibold text-white bg-primary rounded-full hover:bg-primary/80 transition duration-300">View Projects</a>
                </div>
            </div>
        </section>
    )
}

export default Experience