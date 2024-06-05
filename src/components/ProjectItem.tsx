import './ProjectItem.scss';

interface ProjectItemProps {
    imgSrc: string;
    title: string;
    description: string;
    href: string;
}

const ProjectItem: React.FC<ProjectItemProps> = ({ imgSrc, title, description, href }) => {
    return (
        <a className="projectItem" href={href}>
            <img src={imgSrc} alt={title} />
            <div>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </a>
    );
}

export default ProjectItem;
