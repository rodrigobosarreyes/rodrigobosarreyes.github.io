import React from 'react'
import { useTranslation } from 'react-i18next';
import './Footer.css';
import instagramLogo from '../images/icons/instagram.svg';
import twitterLogo from '../images/icons/twitter.svg';
import linkedinLogo from '../images/icons/linkedin.svg';

export default function Footer() {
  const { t, i18n } = useTranslation();
  return (
    <div className="bg-indigo-dye footer pt-3 pb-2">
      <div className="rb-social-media w-100 d-flex justify-content-center mb-2">
        <img className="mr-2" src={instagramLogo} alt="@rodrigobosarreyes" title="@rodrigobosarreyes" width="24"/>
        <img className="mr-2" src={twitterLogo} alt="@rodrigobosarreyes" title="@rodrigobosarreyes" width="21"/>
        <img className="mr-2" src={linkedinLogo} alt="@rodrigobosarreyes" title="@rodrigobosarreyes" width="21"/>
      </div>
      <div className="pages d-none d-md-flex justify-content-center mb-2">
        <ul className="list-group list-group-horizontal">
          <li className="list-group-item">
            <a className="" href="/">
              {t('component.navbar.home')}
            </a>
          </li>
          <li className="list-group-item">
            <a className="" href="/">
              {t('component.navbar.portfolio')}
            </a>
          </li>
          <li className="list-group-item">
            <a className="" href="/">
              {t('component.navbar.services')}
            </a>
          </li>
          <li className="list-group-item">
            <a className="" href="/">
              {t('component.navbar.about')}
            </a>
          </li>
          <li className="list-group-item">
            <a className="" href="/">
              {t('component.navbar.blog')}
            </a>
          </li>
          <li className="list-group-item">
            <a className="" href="/">
              {t('component.navbar.tutorials')}
            </a>
          </li>
          <li className="list-group-item">
            <a className="" href="/">
              {t('component.navbar.contact')}
            </a>
          </li>
          <li className="list-group-item">
            <a className="" href="/">
              {t('component.footer.privacyPolicy')}
            </a>
          </li>
          <li className="list-group-item">
            <a className="" href="/">
              {t('component.footer.cookiePolicy')}
            </a>
          </li>
          <li className="list-group-item">
            <a className="" href="/">
              {t('component.footer.termsConditions')}
            </a>
          </li>
        </ul>
      </div>
      <div className="copyright d-flex justify-content-center">
        <span>Copyright © 2020 Rodrigo Bosarreyes • Spain based Web Designer &amp; Developer</span>
      </div>
    </div>
  )
}
