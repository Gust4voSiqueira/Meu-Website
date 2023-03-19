import { Button } from '../../components/Button/Button'
import './SobreMim.css'

import Linkedin from '../../Assets/linkedin-icon.png'
import Github from '../../Assets/github-icon.png'
import imagePerfil from '../../Assets/ilustracao-sobremim.png'
import { useThemeGlobal } from '../../context/themeContext'

export function SobreMim() {
    const [ useTheme ] = useThemeGlobal()

    return (
        <div className={`sobreMim-container SobreMim-${useTheme}`} id="sobreMim-container">
            <img className='image-sobre-mim' src={imagePerfil} alt="imageSobreMim" />
            <section>
                <h1>Sobre Mim</h1>
                <span>
                    Meu Nome é Gustavo, tenho 22 anos, moro no Brasil, especificamente em Luziânia-GO.
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