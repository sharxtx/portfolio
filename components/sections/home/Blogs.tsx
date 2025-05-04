import Container from '@/components/ui/custom/Container'
import React from 'react'

const Blogs = () => {
  return (
    <section id="blog" className="pt-16 mx-auto w-full">
      <Container className="w-full relative">
        <div className="mb-10 text-center">
          <h2 className="text-4xl font-bold mb-2 tracking-widest">BLOGS</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Logs from the Journey: Code, Systems, and Beyond.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center text-center text-muted-foreground mt-8 h-44">
          <p>Yeaaa, didn&apos;t write any thing till now. But I&apos;ll do it soon.</p>
        </div>
      </Container>
    </section>
  )
}

export default Blogs