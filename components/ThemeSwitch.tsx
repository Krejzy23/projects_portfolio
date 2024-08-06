"use client";

import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { IconSun, IconMoon } from "@tabler/icons-react";
import { Button } from "./ui/MovingBorder";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);

  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  if (!mounted) return null;

  return (
    <Button
      borderRadius="1rem"
      className="bg-white hover:bg-secondary-color dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
      aria-label="Toggle theme"
      onClick={toggleTheme}
    >
      {theme === "dark" ? (
        <IconSun className="h-4 w-4 md:w-6 md:h-6 lg:w-8 lg:h-8 stroke-1" />
      ) : (
        <IconMoon className="h-4 w-4 md:w-6 md:h-6 lg:w-8 lg:h-8 stroke-1" />
      )}
    </Button>
  );
}
