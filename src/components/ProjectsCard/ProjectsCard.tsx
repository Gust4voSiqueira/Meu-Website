/* eslint-disable react/jsx-no-target-blank */
import { Button } from '../Button/Button'
import './ProjectsCard.css'

import LinkIcon from '../../Assets/link-icon.png'
import { useThemeGlobal } from '../../context/themeContext';

interface ProjectsCardProps {
    title: string;
    description: string;
    tecnologies: string[];
    website: boolean;
    link: string;
}

export function ProjectsCard({ title, description, tecnologies, website, link }: ProjectsCardProps) {
    const [ useTheme ] = useThemeGlobal()

    return (
        <div className={`projectsCard-container projectsCard-${useTheme}`}>
            <h1>{title}</h1>
            <p className='text-projects'>{description}</p>

            <div className='div-button'>
                <a target="_blank" href={link}>
                    <Button image={LinkIcon} title={website ? "Website" : "Github"} />
                </a>
            </div>

            {tecnologies.map((tecnologies) => {
                return <span className={`technologies technologies-${useTheme}`}>{tecnologies}</span>
            })}

        </div>

    )
}