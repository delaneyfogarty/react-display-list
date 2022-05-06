import './App.css';
import { useEffect, useState } from 'react';
import { getFavPlaces, getGemstones } from './services/fetch-utils';
import FavPlacesList from './favPlacesList';
import GemstonesList from './GemstonesList';
// import your arrays here

function App() {
  const [favPlaces, setFavPlaces] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [gemstones, setGemstones] = useState([]);

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

  return (
    <div className="App">
      Favorite Places
      {!isLoading && <FavPlacesList favPlaces={favPlaces} />}
      Gemstones
      {!isLoading && <GemstonesList gemstones={gemstones} />}
    </div>
  );
}

export default App;
