"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react";

export function ToggleTheme() {
  const { setTheme, theme } = useTheme()
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
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
