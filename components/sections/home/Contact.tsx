'use client'

import Container from '@/components/ui/custom/Container'
import React from 'react'
import ContactForm from './contact/ContactForm'
import { Button } from '@/components/ui/button'
import { Github } from '@/components/ui/icons/Github'
import { X } from '@/components/ui/icons/X'
import { Mail } from 'lucide-react'
import { LinkedIn } from '@/components/ui/icons/Linkedin'
import Link from 'next/link'

const Contact = () => {
  return (
    <section id="contact" className="flex flex-col items-center justify-center w-full relative overflow-hidden md:mt-24 border-t-2 pt-24 md:py-24">
      <Container className='relative w-full flex flex-col md:flex-row md:gap-24 gap-8 items-center justify-around px-4 text-center'>
        <section className='w-full md:w-1/2'>
          <h2 className="text-3xl md:text-8xl md:flex flex-col justify-between gap-5 font-bold animate-gradient tracking-widest">
            {['LET\'S ', 'GET IN ', 'TOUCH '].map((text, index) => (
              <span key={text} className={`md:text-${index % 2 === 1 ? 'right' : 'left'} md:font-serif md:text-muted-foreground`}>{text}</span>
            ))}
          </h2>
        </section>
        <section className="w-full md:w-1/2 p-8 bg-background rounded-lg shadow-sm">
          <div className="max-w-md mx-auto">
            <ContactForm />

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Or continue with
                </span>
              </div>
            </div>

            <div className="flex justify-center gap-4">
              <Link href="https://github.com/sharxtx" target="_blank">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-10 w-10 rounded-full hover:bg-accent transition-colors cursor-pointer"
                >
                  <Github className="h-5 w-5" />
                </Button>
              </Link>

              <Link href="https://x.com/sharxtx" target="_blank">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-10 w-10 rounded-full hover:bg-accent transition-colors cursor-pointer"
                >
                  <X className="h-5 w-5" />
                </Button>
              </Link>

              <Link href="https://www.linkedin.com/in/psharath2205/" target="_blank">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-10 w-10 rounded-full hover:bg-accent transition-colors cursor-pointer"
                >
                  <LinkedIn className="h-5 w-5" />
                </Button>
              </Link>

              <a href="mailto:pendyalasharath321@gmail.com">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-10 w-10 rounded-full hover:bg-accent transition-colors cursor-pointer"
                >
                  <Mail className="h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>
        </section>
      </Container>
    </section>
  )
}

export default Contact