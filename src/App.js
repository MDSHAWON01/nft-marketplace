import React from 'react';
import Choose from './components/Choose/Choose';
import Clients from './components/Clinents/Clients';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import MarketPlace from './components/MarketPlace/MarketPlace';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Sell from './components/Sell/Sell';
import Subscribe from './components/Subscribe/Subscribe';


const App = () => {
  return (
    <div>
      <ScrollToTop />
      <Home />
      <Clients />
      <Sell />
      <Choose />
      <MarketPlace />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default App;