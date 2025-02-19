"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ToggleTheme() {
  const { setTheme, theme } = useTheme()
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div>
      {theme === "dark" ? (
        <Sun onClick={() => setTheme("light")} className="cursor-pointer" />
      ) : (
        <Moon onClick={() => setTheme("dark")} className="cursor-pointer" />
      )}
    </div>
  )
}
