import './App.scss';
import HomePage from './pages/HomePage/HomePage';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"; 
import CharactersPage from './pages/CharactersPage/CharactersPage';
import HousesPage from './pages/HousesPage/HousesPage';
import CharacterDetailPage from './pages/CharactersPage/pages/CharacterDetailPage/CharacterDetailPage';
import HouseDetailPage from './pages/HousesPage/pages/HouseDetailPage/HouseDetailPage';
import ChronologyPage from './pages/ChronologyPage/ChronologyPage';
import Loading from './core/Loading/Loading';
import LoadingContext from './shared/context/LoadingContext';
import React, { useState } from 'react';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <Router>
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
    <Loading></Loading>
      <Switch>
        <Route path="/personajes">
          <CharactersPage></CharactersPage>
        </Route>
        
        <Route path="/casas">
          <HousesPage></HousesPage>
        </Route>

        <Route path="/cronologia">
          <ChronologyPage></ChronologyPage>
        </Route>

        <Route path="/detalleDePersonaje/:name">
          <CharacterDetailPage></CharacterDetailPage>
        </Route>

        <Route path="/detalleCasa/:name">
          <HouseDetailPage></HouseDetailPage>
        </Route>
        
        <HomePage></HomePage>
      </Switch>
    </LoadingContext.Provider>
    </Router>
    )
} 

export default App;
