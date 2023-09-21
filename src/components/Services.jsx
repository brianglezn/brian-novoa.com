import './Services.css';

import servicesData from '../assets/services/services.json';

function Services() {

    const services = servicesData.map((service) => {
        return (
            <div className='services__service' key={service.id}>
                <div className='services__service-cont1'>
                    <p>{service.name}</p>
                    <span>{service.description}</span>
                </div>
                <div className='services__service-cont2'>
                    <p>{service.price}</p>
                    {service.more.map((mores) => (
                        <span key={mores} className={mores}>{mores}</span>
                    ))}
                </div>
            </div>
        );
    });


    return (
        <>
            <h2 className='section__title' id='services'>SERVICES</h2>
            <section className='services'>

                {services}
            </section>
        </>

    );
}

export default Services;


// <div class='box'>
//    <div class='ribbon'><span>POPULAR</span></div>
// </div>