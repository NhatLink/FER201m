import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'
export default function Navigation() {
    const { theme, toggle, dark } = useContext(ThemeContext)
    return (
        <div>
            <nav className='task' style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
                <ul>
                    <a className='active' style={{color: theme.color }} href='#home'>Home</a>
                    <a className='active' style={{color: theme.color }} href='#news'>News</a>
                    <a className='active' style={{color: theme.color }} href='#about'>About</a>
                    <a className='active' style={{color: theme.color }} href='#contact'>Contact</a>
                </ul>
                <div style={{ position: 'relative' }}>
                    <a className='switch-mode' href='#' onClick={toggle}
                        style={{
                            backgroundColor: theme.backgroundColor,
                            color: theme.color,
                            outline: 'none'
                        }} data-testid="toggle-theme-btn"
                    >
                        Switch Nav to {!dark ? 'Dark' : 'Light'} mode
                    </a>
                </div>
            </nav>
        </div>
    )
}