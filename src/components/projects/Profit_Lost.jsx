import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import Footer from '../Footer';

import './Projects.css';

function Profit_Lost() {
  const { t } = useTranslation();

  return (
    <>
      <Link to='/' className='backHome'>{t('backHome')}</Link>
      <section className="project">
        <h2>PROFIT & LOST</h2>
        <img src="https://res.cloudinary.com/dz0mwxb0v/image/upload/v1711033634/brian-novoa.com/Projects/profit-lost/profit_lost.png" alt="profit-lost.com" />
        <p>{t('PLDescription')}</p>
        <p>{t('PLfrontendDescription')}</p>
        <p>{t('PLbackendDescription')}</p>
        <p>{t('PLdeploymentDescription')}</p>
        <a href="https://profit-lost.com" target="_blank" rel="noopener noreferrer">
          <button>{t('PLvisitApp')}</button>
        </a>
        <div className="project__gallery">
        
        </div>
      </section >
      <Footer />
    </>
  );
}

export default Profit_Lost;
