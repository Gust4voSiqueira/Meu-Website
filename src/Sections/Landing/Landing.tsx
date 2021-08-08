/* eslint-disable jsx-a11y/img-redundant-alt */
import { Button } from '../../components/Button/Button'

import instagram from '../../Assets/instagram-icon.png'
import capa from '../../Assets/capa-landing.png'

import './Landing.css'
import { useEffect } from 'react'


export function Landing() {

    let textoArray = " Seja Bem-Vindo ao meu Website!"

    const array = textoArray.split('')

    useEffect(() => {

        array.forEach((letra, i) => {
            setTimeout(function () {
                document.getElementById("span-animation").innerHTML += letra
            }, 75 * i)
        })
    },)


    return (
        <>
            <div id="landing-container">
                <section>
                    <span id='span-animation'>Olá, eu sou o <h1>Gustavo Siqueira</h1></span>
                    <a href="https://www.instagram.com/gustavo_siqueira3/"><div className='div-button'><Button image={instagram} title='Instagram' /></div></a>
                </section>

                <img id='capa-image' src={capa} alt="landing-image" />
            </div>
        </>
    )
}

