import { ReactNode } from 'react';

// Importing icons
import { FaReact, FaNodeJs, FaSass, FaWordpress } from 'react-icons/fa';
import { SiTypescript, SiMongodb, SiExpress } from 'react-icons/si';

// Project logos
const LOGO_PL_URL = 'https://res.cloudinary.com/dz0mwxb0v/image/upload/v1741470590/brian-novoa.com/Projects/profit-lost/logoPL.png';
const LOGO_WP_URL = 'https://s.w.org/style/images/about/WordPress-logotype-simplified.png';

// Interfaces for project links and technologies
export interface LinkItem {
    url: string; // URL for the link
    nameKey?: string; // Optional key for translation
    defaultName: string; // Default name to display
}

export interface Technology {
    name: string; // Name of the technology
    icon: ReactNode; // Icon associated with the technology
}

export interface Project {
    id: string; // Unique identifier for the project
    mainImage: string; // Main image for the project
    logo: string; // Logo for the project
    galleryImages: string[]; // Array of gallery images
    projectLinks: LinkItem[]; // Links to the project
    gitLinks: LinkItem[]; // Links to the project's GitHub repositories
    technologies: Technology[]; // List of technologies used in the project
}

// ProfitLost project images
const PL_ANNUAL_REPORT_URL = 'https://res.cloudinary.com/dz0mwxb0v/image/upload/v1741468441/brian-novoa.com/Projects/profit-lost/annualReport.png ';
const PL_ANNUAL_REPORT_DARK_URL = 'https://res.cloudinary.com/dz0mwxb0v/image/upload/v1741468441/brian-novoa.com/Projects/profit-lost/annualReportDark.png ';
const PL_TRANSACTIONS_URL = 'https://res.cloudinary.com/dz0mwxb0v/image/upload/v1741468441/brian-novoa.com/Projects/profit-lost/transactions.png';
const PL_DASHHOME_URL = 'https://res.cloudinary.com/dz0mwxb0v/image/upload/v1741468441/brian-novoa.com/Projects/profit-lost/dashHome.png';
const PL_ACCOUNTS_URL = 'https://res.cloudinary.com/dz0mwxb0v/image/upload/v1741468441/brian-novoa.com/Projects/profit-lost/accounts.png';

// Wordpress project images
const WP_LABARVERIA_URL = 'https://res.cloudinary.com/dz0mwxb0v/image/upload/v1710074042/brian-novoa.com/Projects/Wordpress/labarveria.png';
const WP_AQUINTADETUIFUTSAL_URL = 'https://res.cloudinary.com/dz0mwxb0v/image/upload/v1710073696/brian-novoa.com/Projects/Wordpress/aquintadetuifutsal.png';
const WP_GLOBALTHERMO_URL = 'https://res.cloudinary.com/dz0mwxb0v/image/upload/v1710073696/brian-novoa.com/Projects/Wordpress/globalthermo.png';
const WP_REFRIGERACIONTRANSPORTE_URL = 'https://res.cloudinary.com/dz0mwxb0v/image/upload/v1710073695/brian-novoa.com/Projects/Wordpress/refrigeraciontransporte.png';
const WP_VIVALACALACA_URL = 'https://res.cloudinary.com/dz0mwxb0v/image/upload/v1710073695/brian-novoa.com/Projects/Wordpress/vivalacalaca.png';
const WP_I2C_URL = 'https://res.cloudinary.com/dz0mwxb0v/image/upload/v1709661556/brian-novoa.com/Projects/Wordpress/i2c.png';
const WP_FERROS_URL = 'https://res.cloudinary.com/dz0mwxb0v/image/upload/v1709661147/brian-novoa.com/Projects/Wordpress/ferros.jpg';

// Project data
export const projectsData: { [key: string]: Project } = {
    ProfitLost: {
        id: 'ProfitLost',
        mainImage: PL_ANNUAL_REPORT_URL,
        logo: LOGO_PL_URL,
        galleryImages: [PL_ANNUAL_REPORT_DARK_URL, PL_TRANSACTIONS_URL, PL_DASHHOME_URL, PL_ACCOUNTS_URL],
        projectLinks: [
            { url: "https://profit-lost.com/", nameKey: "Projects.visit", defaultName: "Visit site" }
        ],
        gitLinks: [
            { url: "https://github.com/brianglezn/PL-front-v2", nameKey: "Projects.frontend", defaultName: "Frontend" },
            { url: "https://github.com/brianglezn/PL-back-v2", nameKey: "Projects.backend", defaultName: "Backend" }
        ],
        technologies: [
            {
                name: "React",
                icon: <FaReact />
            },
            {
                name: "TypeScript",
                icon: <SiTypescript />
            },
            {
                name: "NodeJS",
                icon: <FaNodeJs />
            },
            {
                name: "MongoDB",
                icon: <SiMongodb />
            },
            {
                name: "Express",
                icon: <SiExpress />
            },
            {
                name: "Sass",
                icon: <FaSass />
            }
        ]
    },
    WP: {
        id: 'WP',
        mainImage: WP_REFRIGERACIONTRANSPORTE_URL,
        logo: LOGO_WP_URL,
        galleryImages: [WP_LABARVERIA_URL, WP_AQUINTADETUIFUTSAL_URL, WP_GLOBALTHERMO_URL, WP_FERROS_URL, WP_VIVALACALACA_URL, WP_I2C_URL],
        projectLinks: [], // No project links available
        gitLinks: [], // No GitHub links available
        technologies: [
            {
                name: "Wordpress",
                icon: <FaWordpress />
            }
        ]
    }
};

// Helper function to get a project by ID
export const getProjectById = (projectId: string): Project | undefined => {
    const normalizedProjectId = projectId.charAt(0).toUpperCase() + projectId.slice(1); // Normalize project ID to match keys
    return projectsData[normalizedProjectId]; // Return the project data
}; 