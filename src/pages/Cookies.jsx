import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import './Cookies.css';

function Cookies() {
    const { t } = useTranslation();

    return (
        <section className='cookies'>
            <Link to='/' className='backHome'>{t('backHome')}</Link>
            <h1 className='title'>{t('title-cookies')}</h1>
            <section className='legal'>
                <h3>{t('cookiesNoticeTitle')}</h3>
                <p>{t('cookiesNoticeText')}</p>

                <h3>{t('whatAreCookies')}</h3>
                <p>{t('cookiesDescription')}</p>

                <h3>{t('cookiesTypesTitle')}</h3>
                <p>{t('cookiesAnalysis')}</p>
                <p>{t('cookiesTechnical')}</p>
                <p>{t('cookiesPersonalization')}</p>
                <p>{t('cookiesAdvertising')}</p>
                <p>{t('cookiesBehavioralAdvertising')}</p>

                <h3>{t('disableCookiesTitle')}</h3>
                <p>{t('disableCookiesDescription')}</p>
                <p>{t('disableCookiesBrowsers')}</p>

                <h3>{t('thirdPartyCookiesTitle')}</h3>
                <p>{t('thirdPartyCookiesDescription')}</p>
                <p>{t('specificThirdPartyCookies')}</p>
                <p>{t('thirdPartyFunctionalities')}</p>

                <h3>{t('cookiesWarningTitle')}</h3>
                <p>{t('cookiesWarningDescription')}</p>
                <p>{t('cookiesPolicyInquiries')}</p>
            </section>
            <Footer />
        </section>
    );
}

export default Cookies;
