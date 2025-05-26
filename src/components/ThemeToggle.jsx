import { Moon, Sun } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import {cn} from '../lib/utils'

export default function ThemeToggle() {

    const [isDarkMode, setIsDarkMode] = useState(true);

    useEffect(()=>{
      const storedTheme = localStorage.getItem("theme");
      if(storedTheme === "light"){
        setIsDarkMode(false);
        document.documentElement.classList.remove("dark");
      }else{
        setIsDarkMode(true);
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      }
    },[]);

    const toggleTheme = () => {
      if(isDarkMode){
        document.documentElement.classList.remove("dark");
        localStorage.setItem('theme',"light");
        setIsDarkMode(false);
      }else{
        document.documentElement.classList.add("dark");
        localStorage.setItem('theme',"dark");
        setIsDarkMode(true);
      }
    } 

  return <button onClick={toggleTheme} className={cn(
    "fixed  top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300 mt-[-4px] mr-[-15px]",
    "focus:outline-hidden")}>{isDarkMode ? <Sun className='h-6 w-6 text-yellow-300'/> : <Moon className='h-6 w-6 text-blue-900'/> }</button>
}
