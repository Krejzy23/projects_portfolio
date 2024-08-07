import React from 'react'
import ThemeSwitch from './ThemeSwitch'

const Footer = () => {
  return (
    <footer className="max-w-7xl">
      <div className="">
        <div className="h-[30rem] w-full dark:bg-black bg-white  dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] relative flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="">
          <h1 className="">FOOTER</h1>
        </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer