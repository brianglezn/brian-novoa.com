import { useTranslation } from 'react-i18next';

import './Services.css';
import servicesData from '../assets/services/services.json';

function Services() {
    const { t } = useTranslation();
    const services = servicesData.map((service) => {
        return (
            <div className='services__service' key={service.id}>
                <div className='services__service-cont1'>
                    <p>{service.name}</p>
                    <span>{t(service.description)}</span>
                </div>
                <div className='services__service-cont2'>
                    {service.more.map((mores) => (
                        <span key={mores} className={mores}>{t(mores)}</span>
                    ))}
                </div>
            </div>
        );
    });

    return (
        <>
            <h2 className='section__title' id='services'>{t('title-services')}</h2>
            <section className='services'>
                <div className='services_container'>
                    {services}
                </div>
            </section>
        </>

    );
}

export default Services;