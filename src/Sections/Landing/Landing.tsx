import { Button } from '../../components/Button/Button'

import instagram from '../../Assets/instagram-icon.png'
import capa from '../../Assets/capa-landing.png'

import './Landing.css'


export function Landing() {
    return (
        <>
            <div id="landing-container">
                <section>
                    <span>Olá, eu sou o <h1>Gustavo Siqueira</h1> Seja Bem-Vindo ao meu Website</span>
                    <a  href="https://www.instagram.com/gustavo_siqueira3/"><div className='div-button'><Button image={instagram} title='Instagram' /></div></a>
                </section>

                <img id='capa-image' src={capa} alt="landing-image" />
            </div>
        </>
    )
}

