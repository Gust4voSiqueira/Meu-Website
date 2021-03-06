/* eslint-disable jsx-a11y/img-redundant-alt */
import { Button } from '../../components/Button/Button'

import instagram from '../../Assets/instagram-icon.png'

import { useThemeGlobal } from '../../context/themeContext'

import './Landing.css'
import { useEffect } from 'react'


export function Landing() {
    const [ useTheme ] = useThemeGlobal()
    const textoArray = "Seja Bem-Vindo ao meu Website!"

    const array = textoArray.split('')


    useEffect(() => {
        array.forEach((letra, i) => {
            setTimeout(() => {
                document.getElementById("span-animation").innerHTML += letra
            }, 75 * i)
        })
    // eslint-disable-next-line
    }, [])

    return (
        <>
            <div className={`landing-container Landing-${useTheme}`} id="landing-container">
                <section>
                    <span className='span-animation' id='span-animation'>Olá, eu sou o <h1>Gustavo Siqueira</h1></span>
                    <a className='a-button' href="https://www.instagram.com/gustavo.siqueira8/">
                        <Button image={instagram} title='Instagram' />
                    </a>
                </section>

                <div className="planet-space">
                    <div className="planet">
                        <div className="details"></div>
                    </div>
                    <div className="shadow">

                    </div>
                </div>

            </div>
        </>
    )
}

