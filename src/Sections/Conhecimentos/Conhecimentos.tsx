import './conhecimentos.css'

import javascriptIcon from '../../Assets/javascript-icon.png'
import HtmlIcon from '../../Assets/html5-icon.png'
import CssIcon from '../../Assets/css3-icon.png'
import ReactIcon from '../../Assets/react-icon.png'
import JavaIcon from '../../Assets/java-icon.png'
import SassIcon from '../../Assets/sass-icon.png'
import { useState } from 'react'

const database = [
    {
        image: HtmlIcon,
        description: "HTML é uma linguagem baseada em marcação, onde marcamos os elementos para definir quais informações a página vai exibir."
    },
    {
        image: CssIcon,
        description: 'CSS é uma linguagem de folha de estilo composta por "camadas", criado com o propósito de estilizar as páginas HTML.'
    },
    {
        image: javascriptIcon,
        description: 'Javascript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma'
    },
    {
        image: ReactIcon,
        description: "React é uma biblioteca Javascript de ccódigo abeerto com foco em criar interfaces de usuário em páginas web."
    },
    {
        image: JavaIcon,
        description: "Java é uma linguagem de programação orientada a objetos desenvolvida na década de 90 por uma equipe de programadores chefiada por James Gosling, na empresa Sun Microsystems."
    },
    {
        image: SassIcon,
        description: "Sass (o pré-processador) é uma linguagem de folhas de estulo. É uma simples linguagem de script usada em arquivos Sass."
    },
]


export function Conhecimentos() {
    const [conhecimentos, setConhecimentos] = useState('')

    return (
        <div id="conhecimentos-container">
            <section id="text">
                <h1>Conhecimentos</h1>
                <p>Confira aqui o que tenho estudado!</p>
                <br />
                <p id='message-cursor'>*Passe o cursor para conferir mais detalhes*</p>
                {conhecimentos ? (<p>{conhecimentos}</p>) : (<p></p>)}
            </section>
            <section id="cards">
                {database.map((database) => {
                    return (
                        <div id="conhecimentosCard-container" onMouseOut={() => setConhecimentos(database.description)}>
                            <img src={database.image} alt="" />
                        </div>
                    )
                })}

            </section>

        </div >
    )
}