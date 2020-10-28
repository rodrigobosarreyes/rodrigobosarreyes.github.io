import { useTranslation } from 'react-i18next';
import React from 'react';

import russiaIcon from '../images/russia.svg';
import spainIcon from '../images/spain.svg';
import ukIcon from '../images/uk.svg';


import './LanguageSelector.css';

export default function LanguageSelector() {

  const { t, i18n } = useTranslation();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  }
  
  return (
    <div>
        <img className="ml-2 cursor-pointer" onClick={() => changeLanguage('es')} src={spainIcon} alt="Spain flag" width="24px"/>
        <img className="ml-2 cursor-pointer" onClick={() => changeLanguage('en')} src={ukIcon} alt="United Kingdom flag" width="24px"/>
        <img className="ml-2 cursor-pointer" onClick={() => changeLanguage('ru')} src={russiaIcon} alt="Russia flag" width="24px"/>
    </div>
  )
}
