import './header.css'


import { useState } from 'react'

export function Header() {
    const [main, setMain] = useState(false)

    return (
        <>
            <div id="header-container">
                <h1><a href="#landing-container">Portifólio</a></h1>

                <nav id='main-desktop'>
                    <li><a href="#sobreMim-container">Sobre Mim</a></li>
                    <li><a href="#projects-title">Projetos</a></li>
                    <li><a href="#conhecimentos-container">Conhecimentos</a></li>
                    <li><a href="#contact-container">Contato</a></li>
                </nav>
            </div>

            <div id="menu-mobile" onClick={() => setMain(!main)}>
                <input type="checkbox" name="" id="check" />
                <label htmlFor="check"></label>
                <span id='main-mobile-barra'></span>
            </div>
            {main && (
                <nav id='main-mobile'>
                    <li><a href="#sobreMim-container">Sobre Mim</a></li>
                    <li><a href="#projects-title">Projetos</a></li>
                    <li><a href="#conhecimentos-container">Conhecimentos</a></li>
                    <li><a href="#contact-container">Contato</a></li>
                </nav>
            )}



        </>
    )
}