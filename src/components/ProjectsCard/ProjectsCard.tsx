import { Button } from '../Button/Button'
import './ProjectsCard.css'

import LinkIcon from '../../Assets/link-icon.png'

interface ProjectsCardProps {
    title: string;
    description: string;
    tecnologies: string[];
    website: boolean;
    link: string;
}

export function ProjectsCard({ title, description, tecnologies, website, link }: ProjectsCardProps) {
    return (
        <div id="projectsCard-container">
            <h1>{title}</h1>
            <p className='text-projects'>{description}</p>

            <div id='div-button'><a href={link}><Button image={LinkIcon} title={website ? "Website" : "Github"} /></a></div>

            {tecnologies.map((tecnologies) => {
                return <span className='technologies'>{tecnologies}</span>
            })}

        </div>

    )
}