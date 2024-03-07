import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import Footer from '../Footer';

import './Wordpress_webs.css';

function Wordpress_webs() {
  const { t } = useTranslation();

  return (
    <>
      <Link to='/' className='backHome'>{t('backHome')}</Link>
      <section className="wp">
        <h2>{t('WPTitle')}</h2>
        <img src="https://res.cloudinary.com/dz0mwxb0v/image/upload/v1709817216/brian-novoa.com/Projects/Wordpress/muchas.jpg" alt="WordpresWebs" />
        <p>{t('WPDescription')}</p>
        <div className="wp__gallery">
        
        </div>
      </section >
      <Footer />
    </>
  );
}

export default Wordpress_webs;
