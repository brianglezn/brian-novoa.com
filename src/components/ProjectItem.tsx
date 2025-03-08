import { ReactNode } from 'react';

// Importing styles
import './ProjectItem.scss';

// Interfaces for ProjectItem properties
interface ProjectItemProps {
    imgSrc: string | ReactNode; // Source of the image or icon
    title: string; // Title of the project
    description: string; // Description of the project
    href: string; // Link to the project
}

// Main component for displaying a project item
export default function ProjectItem({ imgSrc, title, description, href }: ProjectItemProps) {
    return (
        <a className="projectItem" href={href}>
            {typeof imgSrc === 'string' ? (
                <img src={imgSrc} alt={title} /> // Render image if imgSrc is a string
            ) : (
                <div className="icon-container">{imgSrc}</div> // Render icon if imgSrc is a ReactNode
            )}
            <div className='projectItem-container'>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </a>
    );
}
