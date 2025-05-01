'use client'

import Hero from "@/components/sections/home/Hero";
import dynamic from "next/dynamic";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const NoSSR = dynamic(() => import('@/app/page'), { ssr: false })

export default function Home() {
  return (
    <main className="flex w-full min-h-screen flex-col items-center justify-between">
        <Hero />
      </main>
  );
}
