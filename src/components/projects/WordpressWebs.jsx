import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import ImageGallery from 'react-image-gallery';

import Footer from '../Footer';

import './Projects.css';

function WordpressWebs() {
  const { t } = useTranslation();

  const images = [
    {
      original: "https://res.cloudinary.com/dz0mwxb0v/image/upload/v1710074042/brian-novoa.com/Projects/Wordpress/labarveria.png",
      thumbnail: "https://res.cloudinary.com/dz0mwxb0v/image/upload/v1710074042/brian-novoa.com/Projects/Wordpress/labarveria.png",
      description: "La Barveria"
    },
    {
      original: "https://res.cloudinary.com/dz0mwxb0v/image/upload/v1709661147/brian-novoa.com/Projects/Wordpress/fueradelauni.jpg",
      thumbnail: "https://res.cloudinary.com/dz0mwxb0v/image/upload/v1709661147/brian-novoa.com/Projects/Wordpress/fueradelauni.jpg",
      description: "Fuera de la Uni"
    },
    {
      original: "https://res.cloudinary.com/dz0mwxb0v/image/upload/v1709661147/brian-novoa.com/Projects/Wordpress/ferros.jpg",
      thumbnail: "https://res.cloudinary.com/dz0mwxb0v/image/upload/v1709661147/brian-novoa.com/Projects/Wordpress/ferros.jpg",
      description: "Ferros Urban Restaurant"
    },
    {
      original: "https://res.cloudinary.com/dz0mwxb0v/image/upload/v1709661147/brian-novoa.com/Projects/Wordpress/royalsacademy.jpg",
      thumbnail: "https://res.cloudinary.com/dz0mwxb0v/image/upload/v1709661147/brian-novoa.com/Projects/Wordpress/royalsacademy.jpg",
      description: "Royals Academy"
    },
    {
      original: "https://res.cloudinary.com/dz0mwxb0v/image/upload/v1710073696/brian-novoa.com/Projects/Wordpress/globalthermo.png",
      thumbnail: "https://res.cloudinary.com/dz0mwxb0v/image/upload/v1710073696/brian-novoa.com/Projects/Wordpress/globalthermo.png",
      description: "Global Thermo"
    },
    {
      original: "https://res.cloudinary.com/dz0mwxb0v/image/upload/v1709661148/brian-novoa.com/Projects/Wordpress/loscos.jpg",
      thumbnail: "https://res.cloudinary.com/dz0mwxb0v/image/upload/v1709661148/brian-novoa.com/Projects/Wordpress/loscos.jpg",
      description: "TFG: Los Cos"
    },
    {
      original: "https://res.cloudinary.com/dz0mwxb0v/image/upload/v1709661556/brian-novoa.com/Projects/Wordpress/i2c.png",
      thumbnail: "https://res.cloudinary.com/dz0mwxb0v/image/upload/v1709661556/brian-novoa.com/Projects/Wordpress/i2c.png",
      description: "Imagine to Create"
    },
    {
      original: "https://res.cloudinary.com/dz0mwxb0v/image/upload/v1710073695/brian-novoa.com/Projects/Wordpress/refrigeraciontransporte.png",
      thumbnail: "https://res.cloudinary.com/dz0mwxb0v/image/upload/v1710073695/brian-novoa.com/Projects/Wordpress/refrigeraciontransporte.png",
      description: "Refrigeracion Transporte"
    },
    {
      original: "https://res.cloudinary.com/dz0mwxb0v/image/upload/v1710073695/brian-novoa.com/Projects/Wordpress/vivalacalaca.png",
      thumbnail: "https://res.cloudinary.com/dz0mwxb0v/image/upload/v1710073695/brian-novoa.com/Projects/Wordpress/vivalacalaca.png",
      description: "Viva la Calaca"
    },
    {
      original: "https://res.cloudinary.com/dz0mwxb0v/image/upload/v1710073696/brian-novoa.com/Projects/Wordpress/aquintadetuifutsal.png",
      thumbnail: "https://res.cloudinary.com/dz0mwxb0v/image/upload/v1710073696/brian-novoa.com/Projects/Wordpress/aquintadetuifutsal.png",
      description: "A Quinta de Tui futsal"
    }

  ]

  return (
    <>
      <Link to='/' className='backHome'>{t('backHome')}</Link>
      <section className="project">
        <h2>{t('WPTitle')}</h2>
        <img src="https://res.cloudinary.com/dz0mwxb0v/image/upload/v1710073695/brian-novoa.com/Projects/Wordpress/refrigeraciontransporte.png" alt="WordpresWebs" />
        <p>{t('WPDescription')}</p>
        <div className="project__gallery">
          <ImageGallery
            items={images}
            showBullets={true}
            showThumbnails={true}
            showPlayButton={false}
            showFullscreenButton={false}
            showNav={false}
            infinite={true}
            slideInterval={3000}
            slideDuration={500}
            showIndex={false}
            isRTL={false}
            useWindowKeyDown={true}
          />
        </div>
      </section >
      <Footer />
    </>
  );
}

export default WordpressWebs;
