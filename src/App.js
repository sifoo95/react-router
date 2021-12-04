import './App.css';
import {Data} from './data';
import {MovieList} from './component/movielist';
import {FilterV2} from './component/filterV2';
import {useState} from 'react';
import Trailer from './component/trailer';
import { BrowserRouter, Route } from 'react-router-dom';

function App(props) {
  const [anime, setAnime] = useState(Data);
  const [rateValue, setRateValue] = useState(5);
  const [inputFilter, setInputFilter] = useState('');
  const filterHandler = (searchTerm) => {
    setInputFilter(searchTerm);
  }
  return (
    <div className="App">
      <BrowserRouter>
        <FilterV2 ratevalue={rateValue} setratevalue={setRateValue} searching={filterHandler}/>
        <Route
          path="/anime/:id"
          render={(props) => <Trailer {...props} animelist={anime} />}
        />
        <MovieList animelist={anime.filter(el => el.rate <= rateValue && el.title.toLocaleLowerCase().includes(inputFilter.toLocaleLowerCase()))} setanime={setAnime}/>
      </BrowserRouter>
    </div>
  );
}

export default App;