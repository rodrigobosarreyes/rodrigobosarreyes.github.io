import React from 'react'
import { useTranslation } from 'react-i18next';
import LanguageSelector from './LanguageSelector';
import logo from '../images/logo.png';

export default function Navbar() {
  const { t, i18n } = useTranslation();
  return (
    <div className="bg-indigo-dye sticky-top rb-shadow">
      <nav 
      className="navbar navbar-expand-md navbar-dark">
        <a className="navbar-brand py-0" href="/">
          <img src={logo} alt="" width="42"/>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-between align-items-center w-100" id="navbarNav">
          <ul className="navbar-nav mx-auto text-right">
            <li className="nav-item active">
              <a className="nav-link" href="/">
                {t('component.navbar.home')}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                {t('component.navbar.portfolio')}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                {t('component.navbar.services')}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                {t('component.navbar.about')}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                {t('component.navbar.blog')}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                {t('component.navbar.tutorials')}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                {t('component.navbar.contact')}
              </a>
            </li>
          </ul>
          <ul className="nav navbar-nav text-right">
            <li className="nav-item">
                <LanguageSelector />
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}
