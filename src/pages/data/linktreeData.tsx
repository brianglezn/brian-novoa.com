import IconLinkedin from '../../components/icons/IconLinkedin';
import IconGitHub from '../../components/icons/IconGitHub';
import IconInstagram from '../../components/icons/IconInstagram';
import IconEmail from '../../components/icons/IconEmail';
import IconWebsite from '../../components/icons/IconWebsite';

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
                title: 'Pagina web',
                url: 'https://brian-novoa.com/',
                icon: <IconWebsite />,
                description: 'Pagina web personal'
            },
            {
                title: 'LinkedIn',
                url: 'https://www.linkedin.com/in/brianglezn/',
                icon: <IconLinkedin />,
                description: 'LinkedIn'
            },
            {
                title: 'GitHub',
                url: 'https://github.com/brianglezn/',
                icon: <IconGitHub />,
                description: 'GitHub'
            },
            {
                title: 'Instagram',
                url: 'https://www.instagram.com/briaan_glez',
                icon: <IconInstagram />,
                description: 'Instagram Personal'
            },
            {
                title: 'Instagram',
                url: 'https://www.instagram.com/dev_brianglezn',
                icon: <IconInstagram />,
                description: 'Instagram developer'
            },
            {
                title: 'Email',
                url: 'mailto:brianglezn@gmail.com',
                icon: <IconEmail />,
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
                icon: <IconLinkedin />,
                description: 'LinkedIn'
            },
            {
                title: 'Instagram',
                url: 'https://www.instagram.com/Xacobo_pa',
                icon: <IconInstagram />,
                description: 'Instagram Personal'
            },
            {
                title: 'Email',
                url: 'mailto:xacoboa@gmail.com',
                icon: <IconEmail />,
                description: 'xacoboa@gmail.com'
            }
        ]
    }
]; 