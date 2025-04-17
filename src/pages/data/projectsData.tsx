import { ReactNode } from 'react';

// Importing icons
import { FaReact, FaNodeJs, FaWordpress } from 'react-icons/fa';
import { SiTypescript, SiMongodb, SiExpress } from 'react-icons/si';

// Project logos
import LOGO_PL_URL from '../../assets/img/projects/profit-lost/logoPL.png';
import LOGO_WP_URL from '../../assets/img/projects/wordpress/wordpress-logo.png';

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
import PL_ANNUAL_REPORT_URL from '../../assets/img/projects/profit-lost/annualReport.png';
import PL_ANNUAL_REPORT_DARK_URL from '../../assets/img/projects/profit-lost/annualReportDark.png';
import PL_TRANSACTIONS_URL from '../../assets/img/projects/profit-lost/transactions.png';
import PL_DASHHOME_URL from '../../assets/img/projects/profit-lost/dashHome.png';
import PL_ACCOUNTS_URL from '../../assets/img/projects/profit-lost/accounts.png';
import PL_MOVIL_URL from '../../assets/img/projects/profit-lost/PL-movil.png';

// Wordpress project images
import WP_LABARVERIA_URL from '../../assets/img/projects/wordpress/labarveria.png';
import WP_AQUINTADETUIFUTSAL_URL from '../../assets/img/projects/wordpress/aquintadetuifutsal.png';
import WP_GLOBALTHERMO_URL from '../../assets/img/projects/wordpress/globalthermo.png';
import WP_REFRIGERACIONTRANSPORTE_URL from '../../assets/img/projects/wordpress/refrigeraciontransporte.png';
import WP_VIVALACALACA_URL from '../../assets/img/projects/wordpress/vivalacalaca.png';
import WP_I2C_URL from '../../assets/img/projects/wordpress/i2c.png';
import WP_FERROS_URL from '../../assets/img/projects/wordpress/ferros.jpg';

// Project data
export const projectsData: { [key: string]: Project } = {
    ProfitLost: {
        id: 'ProfitLost',
        mainImage: PL_ANNUAL_REPORT_URL,
        logo: LOGO_PL_URL,
        galleryImages: [PL_ANNUAL_REPORT_DARK_URL, PL_MOVIL_URL, PL_TRANSACTIONS_URL, PL_DASHHOME_URL, PL_ACCOUNTS_URL],
        projectLinks: [
            { url: "https://profit-lost.com/", nameKey: "Projects.visit", defaultName: "Visit site" }
        ],
        gitLinks: [],
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
            }
        ]
    },
    WP: {
        id: 'WP',
        mainImage: WP_REFRIGERACIONTRANSPORTE_URL,
        logo: LOGO_WP_URL,
        galleryImages: [WP_LABARVERIA_URL, WP_AQUINTADETUIFUTSAL_URL, WP_GLOBALTHERMO_URL, WP_FERROS_URL, WP_VIVALACALACA_URL, WP_I2C_URL],
        projectLinks: [],
        gitLinks: [],
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