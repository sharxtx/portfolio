'use client'

import Image from 'next/image';
import Link from 'next/link';
import notfoundLight from '@/media/notfound-light.png';
import notfoundDark from '@/media/notfound.png';

import { Button } from '@/components/ui/button';
import Container from '@/components/ui/custom/Container';
import { useTheme } from 'next-themes';

export default function NotFound() {
    const { theme } = useTheme();
    return (
        <Container
            className=" min-h-screen flex items-center justify-center relative px-4 text-center"

        >
            <div
                className="hidden md:block absolute top-0 left-0 w-[500px] h-[500px] rounded-full mix-blend-multiply filter blur-3xl opacity-10"
                style={{ backgroundColor: 'var(--fancy-blob-1)' }}
            />
            <div
                className="hidden md:block absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full mix-blend-multiply filter blur-2xl opacity-10"
                style={{ backgroundColor: 'var(--fancy-blob-2)' }}
            />
            <div className="relative flex flex-col gap-2 items-center justify-center text-center p-8">
                <Image
                    src={theme === 'dark' ? notfoundLight: notfoundDark }
                    alt="404 Not Found"
                    width={200}
                    height={200}
                />
                <p className="mb-6 max-w-md text-sm">
                    Oops! The page you&apos;re looking for doesn&apos;t exist.
                </p>

                <Button variant="default">
                    <Link href="/" className=" no-underline px-4 py-2">
                        home
                    </Link>
                </Button>
            </div>
        </Container>
    );
}
