"use client"

import { ThemeProvider as NextThemesProvider } from "next-themes"
// import dynamic from "next/dynamic.js"

// const NoSSR = dynamic(() => import('@/components/providers/theme-provider'), { ssr: false })


export function ThemeProvider({
    children,
    ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
    return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}