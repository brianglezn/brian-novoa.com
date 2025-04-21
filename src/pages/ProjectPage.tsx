import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Importing styles
import './ProjectPage.scss';

// Importing components
import Layout from '../components/Layout';

// Importing icons
import { IoClose, IoChevronBack, IoChevronForward, IoArrowBack } from 'react-icons/io5';

// Importing project data
import { getProjectById, LinkItem, Technology } from './data/projectsData.tsx';

// Interfaces
interface TranslatedLink {
    url: string;
    name: string;
}

// Main component for displaying a project's details
export default function ProjectPage() {
    const { t } = useTranslation();
    const { projectId } = useParams<{ projectId: string }>();
    const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
    
    useEffect(() => {
        // Scroll to top when component mounts
        window.scrollTo(0, 0);
    }, []);

    // Return an empty fragment if no projectId is found
    if (!projectId) {
        return (<></>);
    }

    const project = getProjectById(projectId);

    // Display a message if the project is not found
    if (!project) {
        return (
            <Layout>
                <div className="projectsPage">
                    <div className="project-not-found">
                        <h2>{t('Projects.notFound')}</h2>
                        <Link to="/" className="custom-button">
                            <IoArrowBack /> {t('Projects.backToHome')}
                        </Link>
                    </div>
                </div>
            </Layout>
        );
    }

    const { mainImage, logo, galleryImages, projectLinks, gitLinks, technologies } = project;

    // Include the main image in the gallery
    const allImages = [mainImage, ...galleryImages];

    const translatedProjectLinks: TranslatedLink[] = projectLinks.map((link: LinkItem) => ({
        url: link.url,
        name: link.nameKey ? t(link.nameKey) : link.defaultName
    }));

    const translatedGitLinks: TranslatedLink[] = gitLinks.map((link: LinkItem) => ({
        url: link.url,
        name: link.nameKey ? t(link.nameKey) : link.defaultName
    }));

    const openImageViewer = (index: number) => {
        setSelectedImageIndex(index);
        document.body.style.overflow = 'hidden'; // Prevent scrolling in the background
    };

    const closeImageViewer = () => {
        setSelectedImageIndex(null);
        document.body.style.overflow = 'auto'; // Restore scrolling in the background
    };

    const navigateImage = (direction: 'prev' | 'next') => {
        if (selectedImageIndex === null || !allImages) return;

        // Navigate to the previous or next image
        if (direction === 'prev') {
            setSelectedImageIndex(prev =>
                prev !== null ? (prev === 0 ? allImages.length - 1 : prev - 1) : 0
            );
        } else {
            setSelectedImageIndex(prev =>
                prev !== null ? (prev === allImages.length - 1 ? 0 : prev + 1) : 0
            );
        }
    };

    // Handle keyboard navigation for images
    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (selectedImageIndex === null) return;

        // Navigate images with arrow keys or close with Escape key
        if (e.key === 'ArrowLeft') {
            navigateImage('prev');
        } else if (e.key === 'ArrowRight') {
            navigateImage('next');
        } else if (e.key === 'Escape') {
            closeImageViewer();
        }
    };

    const normalizedProjectId = projectId.charAt(0).toUpperCase() + projectId.slice(1);

    return (
        <Layout>
            <section className='projectsPage'>
                <Link to="/" className="back-to-home">
                    <IoArrowBack /> {t('Projects.backToHome')}
                </Link>
                
                <main className='projectsPageMain'>
                    <div className='projectsPageMain-left'>
                        <div className='projectsPageMain-left--header'>
                            <img src={logo} alt={t(`Projects.projectItems.${normalizedProjectId}.title`)} />
                            <h1>{t(`Projects.projectItems.${normalizedProjectId}.title`)}</h1>
                        </div>
                        
                        <p>
                            {t(`Projects.projectItems.${normalizedProjectId}.description2`)}
                        </p>
                        
                        <div>
                            <ul>
                                {technologies.map((tech: Technology) => (
                                    <li key={tech.name}>
                                        <p>{tech.icon} {tech.name}</p>
                                    </li>
                                ))}
                            </ul>
                            
                            <div className='projectsPageMain-left--links'>
                                {translatedProjectLinks.map((link: TranslatedLink, index: number) => (
                                    <a
                                        key={`project-${index}`}
                                        href={link.url}
                                        className='custom-button'
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {link.name}
                                    </a>
                                ))}

                                {translatedGitLinks.map((link: TranslatedLink, index: number) => (
                                    <a
                                        key={`git-${index}`}
                                        href={link.url}
                                        className='custom-button-sec'
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {link.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                    
                    <div className='projectsPageMain-right'>
                        {mainImage && (
                            <img
                                src={mainImage}
                                alt={t(`Projects.projectItems.${normalizedProjectId}.title`)}
                                onClick={() => openImageViewer(0)}
                                className="main-project-image"
                            />
                        )}
                    </div>
                </main>

                {galleryImages && galleryImages.length > 0 && (
                    <div className="project-gallery">
                        
                        <div className="gallery-container">
                            {galleryImages.map((img: string, index: number) => (
                                <div
                                    key={index}
                                    className="gallery-item"
                                    onClick={() => openImageViewer(index + 1)}
                                >
                                    <img
                                        src={img}
                                        alt={`${t(`Projects.projectItems.${normalizedProjectId}.title`)} - ${index + 1}`}
                                        loading="lazy"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Image Viewer Modal */}
                {selectedImageIndex !== null && allImages && (
                    <div
                        className="image-viewer-overlay"
                        onClick={closeImageViewer}
                        onKeyDown={handleKeyDown}
                        tabIndex={0}
                    >
                        <div
                            className="image-viewer-content"
                            onClick={(e: React.MouseEvent) => e.stopPropagation()}
                        >
                            <button
                                className="close-button"
                                onClick={closeImageViewer}
                                aria-label="Close image viewer"
                            >
                                <IoClose />
                            </button>

                            <button
                                className="nav-button prev-button"
                                onClick={() => navigateImage('prev')}
                                aria-label="Previous image"
                            >
                                <IoChevronBack />
                            </button>

                            <div className="image-container">
                                <img
                                    src={allImages[selectedImageIndex]}
                                    alt={`${t(`Projects.projectItems.${normalizedProjectId}.title`)} - ${selectedImageIndex + 1}`}
                                />
                            </div>

                            <button
                                className="nav-button next-button"
                                onClick={() => navigateImage('next')}
                                aria-label="Next image"
                            >
                                <IoChevronForward />
                            </button>

                            <div className="image-counter">
                                {selectedImageIndex + 1} / {allImages.length}
                            </div>
                        </div>
                    </div>
                )}
            </section>
        </Layout>
    );
}
