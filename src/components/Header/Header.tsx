import './header.css'

import menu from '../../Assets/menu-icon.png'
import close from '../../Assets/close-icon.png'

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
                {main ? (
                    <img id='main-icon' src={close} alt="" onClick={() => {
                        setMain(!main)
                    }} />
                ) : (

                    <img id='main-icon' src={menu} alt="" onClick={() => {
                        setMain(!main)
                    }} />
                )}

            </div>

            {main && (
                <nav id='main-mobile'>
                    <li>Sobre Mim</li>
                    <li>Projetos</li>
                    <li>Conhecimentos</li>
                    <li>Contato</li>
                </nav>
            )}



        </>
    )
}