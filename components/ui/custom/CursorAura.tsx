'use client'

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export default function CursorAura({
    x,
    y,
    className
}: {
    x: number
    y: number
    className?: string
}) {
    return (
        <motion.div
            className={cn(
                "absolute pointer-events-none w-[150px] h-[150px] rounded-full blur-xl -translate-x-1/2 -translate-y-1/2",
                className
            )}
            style={{
                left: x,
                top: y,
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 2, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
        />
    )
}