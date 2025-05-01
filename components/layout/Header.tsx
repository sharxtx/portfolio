'use client'

import Link from "next/link";
import Container from "../ui/custom/Container";
import { useTheme } from "next-themes";
import { Button } from "../ui/button";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const navItems = [
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/#contact" },
]

const Header: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);
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
        <header className={cn("fixed top-0 z-50 w-full py-4 md:px-4 transition-all duration-300",
            scrolled ? "bg-background/70 backdrop-blur-sm" : "bg-background/0",
        )}>
            <Container className="flex items-center justify-between w-full">
                <div className="font-windsong text-2xl md:text-3xl font-bold hover:text-primary transition ease-in-out duration-300">
                    <Link href={hash !== '' ? '/#hero' : '/'}>Sharath</Link>
                </div>
                <nav className="hidden md:flex items-center justify-center space-x-4 md:space-x-6">
                    <ul className="flex space-x-4 md:space-x-6">
                        {
                            navItems.map((item) => (
                                <li key={item.name}>
                                    <Link href={item.href} className="hover:text-primary transition ease-in-out duration-100">{item.name}</Link>
                                </li>
                            ))
                        }
                    </ul>
                    <Button className="rounded-full bg-transparent hover:bg-button-hover" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
                        {theme === "dark" ? <Sun
                            className={"size-4 font-semibold text-foreground transition ease-in-out duration-300"}
                        /> : <Moon className={"size-4 font-semibold text-foreground transition ease-in-out duration-300"} />}
                    </Button>
                </nav>
            </Container>
        </header>
    )
}

export default Header;