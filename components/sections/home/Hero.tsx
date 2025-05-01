import Container from '@/components/ui/custom/Container'

const Hero = () => {
    return (
        <section id="home" className="relative flex items-center justify-center w-full h-screen bg-hero-pattern">
            <Container className="w-full flex flex-col items-center justify-center h-screen">
                <div className="text-center transition-all duration-300">
                    <h1 className="text-5xl font-bold text-foreground">Hello, I&apos;m Sharath</h1>
                    <p className="mt-4 text-lg text-foreground">I&apos;m a software developer.</p>
                    <a href="#projects" className="mt-6 inline-block px-6 py-3 text-lg font-semibold text-white bg-primary rounded-full hover:bg-primary/80 transition duration-300">View Projects</a>
                </div>
            </Container>
        </section>
    )
}

export default Hero