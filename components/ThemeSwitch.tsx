"use client"

import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'

export default function ThemeSwitch() {

  const [mounted, setMounted] = useState(false);

  const { theme, setTheme }  = useTheme();

  useEffect(() => {
    setMounted(true)
  },[])

  const toggleTheme = () => {
    if( theme === 'dark') {
      setTheme("light");
    } else {
      setTheme("dark")
    }
  }

  if(!mounted) return null

  return (
    <button onClick={toggleTheme}>Zmenit theme</button>
  )
}

