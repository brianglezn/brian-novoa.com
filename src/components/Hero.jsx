import React from 'react';
import { useTranslation } from 'react-i18next';
import './Hero.css';

function Hero() {
    const { t } = useTranslation();

    return (
        <main className='hero' >
            <div className='hero__text'>
                <p>{t('heroGreeting')}</p>
                <h1>{t('title-hero')}</h1>
                <p>{t('heroProfession')}</p>
            </div>
            <div className='hero__contact'>
                <button><a href='mailto:brianglezn@gmail.com'>{t('heroContact')}</a></button>
            </div>
        </main>
    );
}

export default Hero;
