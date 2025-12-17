"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ThemeToggle() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = React.useState(false)

    // Avoid hydration mismatch
    React.useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return (
            <button
                className="fixed top-6 right-6 z-50 rounded-full p-3 bg-gray-100 dark:bg-black shadow-lg transition-all duration-300"
                aria-label="Toggle theme"
            >
                <div className="h-5 w-5" />
            </button>
        )
    }

    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="fixed top-6 right-6 z-50 rounded-full p-3 bg-white dark:bg-black shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:scale-110"
            aria-label="Toggle theme"
        >
            {theme === "dark" ? (
                <Sun className="h-5 w-5 text-yellow-500 transition-transform duration-300 rotate-0" />
            ) : (
                <Moon className="h-5 w-5 text-gray-700 transition-transform duration-300 rotate-0" />
            )}
        </button>
    )
}
