import { FaGithub, FaInstagram } from 'react-icons/fa';
import { TbBrandLinkedin } from "react-icons/tb";
import { MdEmail } from 'react-icons/md';
import { TbWorld } from 'react-icons/tb';

import brianAvatar from '../../assets/linktree/brian.jpg';
import xacoAvatar from '../../assets/linktree/xaco.jpeg';

export const linktreeUsers = [
    {
        path: 'brian',
        name: 'Brian G. Novoa',
        role: 'Web Developer',
        avatar: brianAvatar,
        links: [
            {
                title: 'Portafolio Web',
                url: 'https://brian-novoa.com/',
                icon: <TbWorld />,
                description: 'Pagina web'
            },
            {
                title: 'LinkedIn',
                url: 'https://www.linkedin.com/in/brianglezn/',
                icon: <TbBrandLinkedin />,
                description: 'LinkedIn'
            },
            {
                title: 'GitHub',
                url: 'https://github.com/brianglezn/',
                icon: <FaGithub />,
                description: 'GitHub'
            },
            {
                title: 'Instagram',
                url: 'https://www.instagram.com/briaan_glez',
                icon: <FaInstagram />,
                description: 'Instagram Personal'
            },
            {
                title: 'Instagram',
                url: 'https://www.instagram.com/dev_brianglezn',
                icon: <FaInstagram />,
                description: 'Instagram developer'
            },
            {
                title: 'Email',
                url: 'mailto:brianglezn@gmail.com',
                icon: <MdEmail />,
                description: 'brianglezn@gmail.com'
            }
        ]
    },
    {
        path: 'xaco',
        name: 'Xacobo PA',
        role: 'Comercial-Administrativo-Contable',
        avatar: xacoAvatar,
        links: [
            {
                title: 'LinkedIn',
                url: 'https://www.linkedin.com/in/xacobo-pereira-amaral-51089a317/',
                icon: <TbBrandLinkedin />,
                description: 'LinkedIn'
            },
            {
                title: 'Instagram',
                url: 'https://www.instagram.com/Xacobo_pa',
                icon: <FaInstagram />,
                description: 'Instagram Personal'
            },
            {
                title: 'Email',
                url: 'mailto:xacoboa@gmail.com',
                icon: <MdEmail />,
                description: 'xacoboa@gmail.com'
            }
        ]
    }
]; 