// Importing styles
import './ProjectItem.scss';

// Interfaces for ProjectItem properties
interface ProjectItemProps {
    mainImage: string; // Main image of the project
    title: string; // Title of the project
    description: string; // Description of the project
    href?: string; // Link to the project
}

// Main component for displaying a project item
export default function ProjectItem({ mainImage, title, description, href }: ProjectItemProps) {
    
    const itemContent = (
        <>
            <div className="projectItem-image">
                <img src={mainImage} alt={title} />
                <h3>{title}</h3>
                <div className="projectItem-overlay"></div>
            </div>
            <div className='projectItem-content'>
                <p>{description}</p>
            </div>
        </>
    );
    
    return href ? (
        <a href={href} className="projectItem">
            {itemContent}
        </a>
    ) : (
        <div className="projectItem">
            {itemContent}
        </div>
    );
}
