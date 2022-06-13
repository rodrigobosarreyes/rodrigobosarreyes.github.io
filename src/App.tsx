import React, { useEffect } from 'react';
import './App.scss';
import HomePage from './pages/home/HomePage';

function App() {
  useEffect( () => {
    const requestOptions = {
      method: 'GET',
      // mode: 'cors',
      headers: { 
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
        'Access-Control-Allow-Origin': '*',
        'Accept-Encoding':	'gzip, deflate, br',
        'Accept-Language':	'en-GB,en;q=0.5',
        'Connection':	'keep-alive',
        'Host':	'timeapi.io',
        'Sec-Fetch-Dest':	'document',
        'Sec-Fetch-Mode':	'navigate',
        'Sec-Fetch-Site':	'cross-site',
        'Upgrade-Insecure-Requests':	'1'
      }
    };
    fetch('https://timeapi.io/api/Time/current/zone?timeZone=Europe%2FLondon', requestOptions)
      .then(res => res.json())
      .then(a => console.log(a));
  }, []);
  return (
    <div className="App">
      <HomePage />
    </div>
  );
}

export default App;
