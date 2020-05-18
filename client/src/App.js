// * [ ] Inside your App file add two routes.
//   * [ ] one route for `/` that loads the `MovieList` component. **This component will need the movies injected into it via props**.
//   * [ ] one route that will take an `id` parameter after`/movies/` (ex: `/movies/2`, `/movies/3` where the id is dynamic). This route should load the `Movie` component.


import React, { useState, useEffect } from 'react';
import axios from 'axios';

import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie'; 

import {Route, Switch}  from 'react-router-dom'; 

import SavedList from './Movies/SavedList';

const App = () => {
  const [savedList, setSavedList] = useState([]);
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies')
        .then(response => {
          setMovieList(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  if (!movieList.length) return 'Loading...'

  return (
    <div>
      <SavedList list={savedList} />
      <Switch>

        <Route path='/movies/:movieID'>
          <Movie />
        </Route>

        {/* <Route path='/movies/:movieID' component={Movie} /> */}

        <Route path='/'>
          <MovieList movies={movieList}/>
        </Route>

      
      </Switch>
    </div>
  );
};

export default App;
