import './App.css';
import { useEffect, useState } from 'react';
import { getFavPlaces, getGemstones, getAnimals, getSingers } from './services/fetch-utils';
import FavPlacesList from './favPlacesList';
import GemstonesList from './GemstonesList';
import AnimalList from './AnimalList';
import SingersList from './SingersList';
// import your arrays here

function App() {
  const [favPlaces, setFavPlaces] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [gemstones, setGemstones] = useState([]);
  const [animals, setAnimals] = useState([]);
  const [singers, setSingers] = useState([]);

  useEffect(async () => {
    setIsLoading(true);
    const favPlacesResponse = await getFavPlaces();
    setIsLoading(false);
    setFavPlaces(favPlacesResponse);
  }, []);

  useEffect(async () => {
    setIsLoading(true);
    const gemstonesResponse = await getGemstones();
    setIsLoading(false);
    setGemstones(gemstonesResponse);
  }, []);

  useEffect(async () => {
    setIsLoading(true);
    const animalsResponse = await getAnimals();
    setIsLoading(false);
    setAnimals(animalsResponse);
  }, []);

  useEffect(async () => {
    setIsLoading(true);
    const singersResponse = await getSingers();
    setIsLoading(false);
    setSingers(singersResponse);
  }, []);

  return (
    <div className="App">
      Favorite Places
      {!isLoading && <FavPlacesList favPlaces={favPlaces} />}
      Gemstones
      {!isLoading && <GemstonesList gemstones={gemstones} />}
      Favorite Animals
      {!isLoading && <AnimalList animals={animals} />}
      Favorite Singers
      {!isLoading && <SingersList singers={singers} />}
    </div>
  );
}

export default App;
