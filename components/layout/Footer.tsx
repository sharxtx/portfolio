'use client'

import Container from "../ui/custom/Container"
import { motion } from "framer-motion"

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <section className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-t">
      <Container className="w-full flex flex-col md:flex-row items-center justify-between gap-4 py-8 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center md:items-start gap-2"
        >
          <p className="text-sm text-muted-foreground">
            © {currentYear} - All rights reserved.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col items-center md:items-end gap-2"
        >
          <p className="text-sm text-muted-foreground">
            Created with ❤️ by
            <span className="ml-1 font-medium text-foreground">
              Sharath Chandra
            </span>
          </p>
        </motion.div>

        {/* Animated background pattern */}
        <div className="absolute inset-0 -z-10 opacity-10 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]">
          <div className="absolute inset-0 bg-gradient-to-b from-border/30 to-background/0" />
          <div className="absolute left-1/2 top-0 h-full w-1/2 -translate-x-1/2 bg-[radial-gradient(30%_50%_at_center,hsla(0,0%,100%,0.05),transparent)] animate-pulse" />
        </div>
      </Container>
    </section>
  )
}

export default Footer