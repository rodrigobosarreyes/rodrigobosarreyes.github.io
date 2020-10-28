import React, { Suspense } from 'react';

import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';

const Loader = () => (
  <div className="App">
    <div>loading...</div>
  </div>
);


function App() {
  return (
    <Suspense fallback={<Loader />}>
      <div>
        <Navbar />
        <Home />
        <Footer />
      </div>
    </Suspense>
  );
}

export default App;
