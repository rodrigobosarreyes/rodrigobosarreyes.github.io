import React from 'react'
import { useTranslation } from 'react-i18next';
import Marquee from '../components/Marquee';

import './Home.css'

export default function Home() {
  const { t, i18n } = useTranslation();

  return (
    <div className="container mt-3 pb-3">
      <div className="text-center font-color-dark bg-grey pb-2 row">
        <div className="col-12">
          <h4>{ t('page.home.title1') }</h4>
        </div>
        <div className="col-12">
          <h4>{ t('page.home.title2') }</h4>
        </div>
      </div>

      <div className="my-3 row">
        <div className="jumbotron bg-white w-100 mb-0 rb-shadow p-3">
          <div className="row">
            <div className="col-auto">
              <img className="img-fluid" src="https://via.placeholder.com/660x250" alt="Image placeholder"/>
            </div>
            <div className="col align-self-center text-right">
              <h2 className="text-left">{ t('page.home.jumbotron.title') }</h2>
              <a className="btn btn-primary btn-lg" href="#" role="button">{ t('page.home.jumbotron.button') }</a>
            </div>
          </div>
        </div>
      </div>

      <div className="row bg-grey">
        <div className="card-deck px-3 py-4">
          <div className="card rb-shadow">
            <div className="text-center my-3">
              <img src="https://via.placeholder.com/150x150" className="card-header-image" alt="..." />
            </div>
            <div className="card-body text-center">
              <h5 className="card-title">{ t('page.home.card.skill1.title') }</h5>
              <p className="card-text">{ t('page.home.card.skill1.description') }</p>
            </div>
            <div className="card-footer text-right">
              <a className="btn btn-primary text-right" href="#" role="button">{ t('common.learnMore') }</a>
            </div>
          </div>
          <div className="card rb-shadow">
            <div className="text-center my-3">
              <img src="https://via.placeholder.com/150x150" className="card-header-image" alt="..." />
            </div>
            <div className="card-body text-center">
              <h5 className="card-title">{ t('page.home.card.skill2.title') }</h5>
              <p className="card-text">{ t('page.home.card.skill2.description') }</p>
            </div>
            <div className="text-right card-footer">
              <a className="btn btn-primary text-right" href="#" role="button">{ t('common.learnMore') }</a>
            </div>
          </div>
          <div className="card rb-shadow">
            <div className="text-center my-3">
              <img src="https://via.placeholder.com/150x150" className="card-header-image" alt="..." />
            </div>
            <div className="card-body text-center">
              <h5 className="card-title">{ t('page.home.card.skill3.title') }</h5>
              <p className="card-text">{ t('page.home.card.skill3.description') }</p>
            </div>
            <div className="text-right card-footer">
              <a className="btn btn-primary text-right" href="#" role="button">{ t('common.learnMore') }</a>
            </div>
          </div>
        </div>
      </div>
      <Marquee></Marquee>
    </div>
  )
}
