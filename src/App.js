import './App.css';
import { useEffect, useState } from 'react';
import { getFavPlaces } from './services/fetch-utils';
import FavPlacesList from './favPlacesList';
// import your arrays here

function App() {
  const [favPlaces, setFavPlaces] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(async () => {
    setIsLoading(true);
    const favPlacesResponse = await getFavPlaces();
    setIsLoading(false);
    setFavPlaces(favPlacesResponse);
  }, []);

  useEffect(async () => {
    setIsLoading(true);
    const favPlacesResponse = await getFavPlaces();
    setIsLoading(false);
    setFavPlaces(favPlacesResponse);
  }, []);

  return (
    <div className="App">
      Favorite Places
      {!isLoading && <FavPlacesList favPlaces={favPlaces} />}
    </div>
  );
}

export default App;
