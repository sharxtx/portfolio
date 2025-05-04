import Container from '@/components/ui/custom/Container'
import React from 'react'

const About = () => {
  return (
    <section id="about" className="flex flex-col items-center justify-center w-full pt-16 relative overflow-hidden">
      <Container className='relative w-full'>
        <div className="group flex flex-col items-center justify-center w-full max-w-3xl px-4 mx-auto text-center">
          <h2 className="text-4xl font-bold  animate-gradient tracking-widest">
            ABOUT ME
          </h2>

          <p className="mt-4 text-sm text-muted-foreground">
            Hello! I&apos;m Sharath Chandra, a{' '}
            curious and creative developer with 
            <span className='group-hover:text-highlight-primary transition-colors duration-300 ease-in-out'> 2+ years of experience in software development</span>. I like working with different technologies and developing applications: front-end, and back-end.
            I love studying Software Development.
          </p>

          <p className="mt-4 text-sm text-muted-foreground">
            I hold a
            <span className='group-hover:text-highlight-accent transition-colors duration-300 ease-in-out'> degree in Information Technology</span> , which laid the groundwork for my love of <span className='whitespace-nowrap'>problem-solving</span> and systems thinking.
            But the tech world never stops evolving, and neither do I! I&apos;m constantly experimenting with modern frameworks and tools to push boundaries and stay inspired.
          </p>

          <p className="mt-4 text-sm text-muted-foreground ">
            When I&apos;m not building things, I&apos;m probably {" "}
            <span className="group-hover:text-highlight-error transition-colors duration-300 ease-in-out whitespace-nowrap">
            binge-watching anime
            </span>
            , {" "}
            <span className="group-hover:text-highlight-secondary transition-colors duration-300 ease-in-out whitespace-nowrap">
            discovering new music
            </span>. I also unwind with{" "}
            <span className="group-hover:text-highlight-warning transition-colors duration-300 ease-in-out whitespace-nowrap">
              video games
            </span>
            —they&apos;re a fun reminder of how creativity and technology can create immersive worlds.
          </p>
        </div>
       </Container>
    </section>
  )
}

export default About