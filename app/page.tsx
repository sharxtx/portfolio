'use client'

import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import dynamic from "next/dynamic";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const NoSSR = dynamic(() => import('@/app/page'), { ssr: false })

export default function Home() {
  const { theme, setTheme } = useTheme()
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1 className="text-2xl font-bold">Current Theme: {theme}</h1>
        <Button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
          Toggle Theme
        </Button>
    </main>
  );
}
