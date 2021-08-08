import './header.css'

import menu from '../../Assets/menu-icon.png'
import close from '../../Assets/close-icon.png'

import { useState } from 'react'

export function Header() {
    const [main, setMain] = useState(false)
    const handleClick = (() => {

    })

    return (
        <>
            <div id="header-container">
                <h1>Portifólio</h1>

                <nav id='main-desktop'>
                    <li>Sobre Mim</li>
                    <li>Projetos</li>
                    <li>Conhecimentos</li>
                    <li>Contato</li>
                </nav>
                <img id='main-icon' src={menu} alt="" onClick={() => {
                    setMain(!main)
                }} />

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