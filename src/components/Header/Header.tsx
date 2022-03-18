import './header.css'


import { useState } from 'react'

export function Header() {
    const [main, setMain] = useState(false)

    return (
        <>
            <div className="header-container">
                <h1><a href="#landing-container">Portifólio</a></h1>

                <nav className='main-desktop'>
                    <li><a href="#sobreMim-container">Sobre Mim</a></li>
                    <li><a href="#projects-title">Projetos</a></li>
                    <li><a href="#conhecimentos-container">Conhecimentos</a></li>
                    <li><a href="#contact-container">Contato</a></li>
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
                </nav>
            )}



        </>
    )
}