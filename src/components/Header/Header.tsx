import './header.css'


import { useState } from 'react'
import { useThemeGlobal } from '../../context/themeContext'

import { MdOutlineLightMode } from 'react-icons/md'
import { MdOutlineDarkMode } from 'react-icons/md'

export function Header() {
    const [ useTheme, setUseTheme ] = useThemeGlobal()
    const [main, setMain] = useState(false)

    function handleReplacementThemeDark() {
        setUseTheme("Dark")
    }

    function handleReplacementThemeLight() {
        setUseTheme("Light")
    }

    return (
        <>
            <div className={`header-container Header-${useTheme}`}>
                <h1><a href="#landing-container">Portifólio</a></h1>

                <nav className='main-desktop'>
                    <li><a href="#sobreMim-container">Sobre Mim</a></li>
                    <li><a href="#projects-title">Projetos</a></li>
                    <li><a href="#conhecimentos-container">Conhecimentos</a></li>
                    <li><a href="#contact-container">Contato</a></li>
                    <button className="option-Light" onClick={handleReplacementThemeLight}><MdOutlineLightMode /></button>
                    <button className="option-Dark" onClick={handleReplacementThemeDark}><MdOutlineDarkMode /></button>
                </nav>
            </div>

            <div className="menu-mobile" onClick={() => setMain(!main)}>
                <input type="checkbox" name="" className="check" />
                <label htmlFor="check"></label>
                <span className='main-mobile-barra'></span>
            </div>
            {main && (
                <nav className='main-mobile'>
                    <li><a href="#sobreMim-container">Sobre Mim</a></li>
                    <li><a href="#projects-title">Projetos</a></li>
                    <li><a href="#conhecimentos-container">Conhecimentos</a></li>
                    <li><a href="#contact-container">Contato</a></li>
                    <button className="option-Light" onClick={handleReplacementThemeLight}><MdOutlineLightMode /></button>
                    <button className="option-Dark" onClick={handleReplacementThemeDark}><MdOutlineDarkMode /></button>
                </nav>
            )}



        </>
    )
}