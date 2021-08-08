import { Button } from '../../components/Button/Button'
import './SobreMim.css'

import Linkedin from '../../Assets/linkedin-icon.png'
import Github from '../../Assets/github-icon.png'

export function SobreMim() {
    return (
        <div id="sobreMim-container">
            <img id='image-sobre-mim' src="https://avatars.githubusercontent.com/u/79036409?v=4" alt="" />
            <section>
                <h1>Sobre Mim</h1>
                <span>
                    Meu Nome é Gustavo, tenho 20 anos, moro no Brasil, especificamente em Luziânia-GO.
                    Atualmente estou estudando em uma universidade.
                    Também tenho estudado bastante sozinho para aprender novas tecnologias.
                    <br /><br />Iniciei meus estudos sobre programação em 2019.
                    Desde então tenho me esforçado para ser um grande profissional na área da tecnologia.
                    Vejo que estou no caminho certo, pois vejo os
                    resultados que as horas dedicadas aos estudos trazem.
                </span>
                <div className="button-div-sobremim">
                    <a href="https://www.linkedin.com/in/gustavo-siqueira00/"><Button image={Linkedin} title='Linkedin' /></a>
                    <a href="https://github.com/Gust4voSiqueira"><Button image={Github} title='Github' /></a>
                </div>
            </section>
        </div>
    )
}