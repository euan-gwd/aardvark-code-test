import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header';
import Fridge from './Fridge';
import BeerDetail from './BeerDetail';

function App() {
  const [beers, setBeers] = useState([]);
  const [selectedBeer, setSelectedBeer] = useState(undefined);

  useEffect(() => {
    axios.get(`https://api.punkapi.com/v2/beers`).then(res => {
      const beers = res.data;
      setBeers(beers);
    });
  }, []);

  const grabBeer = id => {
    axios.get(`https://api.punkapi.com/v2/beers/${id}`).then(res => {
      const selectedBeer = res.data;
      setSelectedBeer(selectedBeer[0]);
    });
  };

  const returnToFridge = () => {
    setSelectedBeer(undefined);
  };

  return (
    <>
      <Header />
      {selectedBeer !== undefined ? (
        <BeerDetail beer={selectedBeer} returnToFridge={returnToFridge} />
      ) : (
        <Fridge beers={beers} grabBeer={grabBeer} />
      )}
    </>
  );
}

export default App;
