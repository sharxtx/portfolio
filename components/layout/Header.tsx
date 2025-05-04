'use client'

import Link from "next/link";
import Container from "../ui/custom/Container";
import { useTheme } from "next-themes";
import { Button } from "../ui/button";
import { Menu, Moon, Sun, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

import { AnimatePresence, motion } from 'framer-motion'

import NavListItem from "../ui/custom/NavListItem";

const navItems = [
    { name: "About", href: "/#about" },
    { name: "Experience", href: "/#experience" },
    { name: "Projects", href: "/#projects" },
    { name: "Skills", href: "/#skills" },
    { name: "Blog", href: "/#blog" },
    { name: "Contact", href: "/#contact" },
]

const Header: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const { theme, setTheme } = useTheme();

    const hash = window.location.hash;


    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 80);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header className={cn("fixed top-0 z-50 w-full py-4 md:px-0 transition-all duration-300",
            scrolled ? "bg-background/70 backdrop-blur-sm" : "bg-background/0",
        )}>
            <Container className="flex items-center justify-between w-full">
                <div className="font-windsong text-2xl z-10 md:text-3xl font-bold hover:text-primary transition ease-in-out duration-300" onClick={() => setIsOpen(false)} onKeyDown={() => setIsOpen(false)} >
                    <Link href={hash !== '' ? '/#hero' : '/'}>Sharath</Link>
                </div>
                <nav className="flex items-center justify-center md:space-x-6">
                    <ul className="hidden md:flex space-x-4 md:space-x-6">
                        {
                            navItems.map((item) => (
                                <NavListItem key={item.name} name={item.name} href={item.href} />
                            ))
                        }
                    </ul>
                    <Button className="rounded-full bg-transparent hover:bg-button-hover" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
                        {theme === "dark" ? <Sun
                            className={"size-4 font-semibold text-foreground transition ease-in-out duration-300"}
                        /> : <Moon className={"size-4 font-semibold text-foreground transition ease-in-out duration-300"} />}
                    </Button>
                    <Button
                        variant="ghost"
                        size="icon"
                        className="md:hidden rounded-full bg-transparent hover:bg-button-hover z-10"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X className="size-4" /> : <Menu className="size-4" />}
                    </Button>
                </nav>

                <AnimatePresence>
                    {
                        isOpen && (
                            <nav className="md:hidden absolute top-0 left-0 w-full h-screen flex flex-col items-center justify-center gap-8 bg-background">
                                <motion.ul initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} exit={{ opacity: 0, y: -5}} className="flex flex-col items-center gap-4">
                                    {
                                        navItems.map((item) => (
                                            <NavListItem key={item.name} name={item.name} href={item.href} onClick={() => setIsOpen(false)} />
                                        ))
                                    }
                                </motion.ul>
                            </nav>
                        )
                    }
                </AnimatePresence>
            </Container>
        </header>
    )
}

export default Header;