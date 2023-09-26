import { useState, useEffect } from 'react'
import Switch from '@mui/material/Switch';


export const SwithTheme = () => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "")
    const systemTheme = window.matchMedia('(preferes-color=scheme: dark)').matches

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark")
            localStorage.setItem('theme', 'dark')
        } else {
            document.documentElement.classList.remove("dark")
            localStorage.setItem('theme', 'light')
        }
    }, [theme])



    const handleThemeSwitch = () => {
        setTheme(theme === "dark" ? "light" : "dark")
    }
    const onWindowMatch = () => {
        if (localStorage.theme === "dark" || (!("theme" in localStorage) && systemTheme)) {
            document.documentElement.classList.add("dark")
        } else {
            document.documentElement.classList.remove("dark")
        }
    }

    onWindowMatch()


    return (
        <>
            <Switch onClick={handleThemeSwitch} color="primary" checked={theme === "dark"}/>
        </>
    )
}
