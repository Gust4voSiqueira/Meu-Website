import { ProjectsCard } from '../../components/ProjectsCard/ProjectsCard'
import './projects.css'

const databaseProducts = [
    {
        title: 'Burger Lets',
        description: 'O Burger Lets é um projeto desenvolvido para uma hamburgueria da minha cidade.',
        tecnologies: ['ReactJs', 'SpringBoot']
    },
    {
        title: 'Igreja IPCC',
        description: 'O projeto Igreja IPCC é um website desenvolvido para a Igreja que eu frequento.',
        tecnologies: ['ReactJs', 'SpringBoot']
    },
    {
        title: 'Tasks',
        description: 'Tasks é um gerenciador de tarefas simples.',
        tecnologies: ['ReactJs']
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
                />
            })}
        </div>
        </>
    )
}