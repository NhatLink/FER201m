import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'
export default function Footer() {
    const { theme, toggle, dark } = useContext(ThemeContext)
    return (
        <footer>

            <div className='foot' style={{ backgroundColor: theme.backgroundColor, color: theme.color }}><p >copyright © 2022</p></div>

        </footer>
    )
}