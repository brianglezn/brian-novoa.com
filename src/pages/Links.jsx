import { useTranslation } from 'react-i18next';

import './Links.css';
import Footer from '../components/Footer';

function Links() {
    const { t } = useTranslation();
    return (
        <>
            <section className='links'>
                <img src='https://res.cloudinary.com/dz0mwxb0v/image/upload/v1697707821/brian-novoa.com/l1bqno262wg6rd2gqp45.jpg'></img>
                <h1>Brian González Novoa</h1>
                <div className='rrss'>
                    <a className='fa-regular fa-envelope' target='_blank' rel='noreferrer' href='mailto:brianglezn@gmail.com'></a>
                    <a className='fa-brands fa-instagram' target='_blank' rel='noreferrer' href='https://www.instagram.com/brinovoa_dev/'></a>
                    <a className='fa-brands fa-linkedin' target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/brianglezn/'></a>
                </div>
                <button> <a href='https://www.brian-novoa.com'>{t('websiteButton')}</a></button>
            </section>
            <Footer />

        </>
    );
}

export default Links;