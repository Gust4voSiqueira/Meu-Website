import { ProjectsCard } from '../../components/ProjectsCard/ProjectsCard'
import './projects.css'

const databaseProducts = [
    {
        title: 'Burger Lets',
        description: 'O Burger Lets é um projeto desenvolvido para uma hamburgueria da minha cidade.',
        tecnologies: ['ReactJs', 'SpringBoot'],
        website: true,
        link: 'https://burgerlets.vercel.app'
    },
    {
        title: 'Igreja IPCC',
        description: 'O projeto Igreja IPCC é um website desenvolvido para a Igreja que eu frequento.',
        tecnologies: ['ReactJs', 'SpringBoot'],
        website: true,
        link: 'https://igrejaipcc.vercel.app'
    },
    {
        title: 'Tasks',
        description: 'Tasks é um gerenciador de tarefas simples.',
        tecnologies: ['ReactJs'],
        website: false,
        link: 'https://github.com/Gust4voSiqueira/Tasks'
    },
    {
        title: 'dtMoney',
        description: 'dtMoney é um gerenciador de finanças desenvolvido durante o programa de aceleração de carreira (Ignite).',
        tecnologies: ['ReactJs'],
        website: true,
        link: 'https://dt-money-gustavo.vercel.app'
    },

]

export function Projects() {
    return (
        <>
            <h1 id='projects-title'>Projetos</h1>
            <div id="projects-container">

                {databaseProducts.map((databaseProducts) => {
                    return <ProjectsCard
                        title={databaseProducts.title}
                        description={databaseProducts.description}
                        tecnologies={databaseProducts.tecnologies}
                        website={databaseProducts.website}
                        link={databaseProducts.link}
                    />
                })}
            </div>
        </>
    )
}