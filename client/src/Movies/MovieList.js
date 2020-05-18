// * [ ] Make it so that the card in `MovieList` is a link, this should direct the user to the `/movies/{id of movie here}` URL, where `:id` is the id of the individual movie.
// * [ ] When a user clicks on a movie card they should be taken to `/movies/{id of movie here}` to see the details for the selected movie.
// * [ ] You will need to modify line 13 of `Movie.js` in order to accept the correct id for the movie selected.


import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom'; 

const MovieList = props => {

  return (
    
    <div className="movie-list">
      {props.movies.map(movie => (
        <MovieDetails key={movie.id} movie={movie} />
      ))}
    </div>
    
  );
}

function MovieDetails({ movie }) {
  const { title, director, metascore, stars } = movie;
  const { url } = useRouteMatch()

  console.log(url)
 
  return (

    <div className="movie-card">

      <Link to={`/movies/${movie.id}`}><h2>{title}</h2></Link>

      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
      <h3>Actors</h3>

      {stars.map(star => (
        <div key={star} className="movie-star">
          {star}
        </div>
      ))}
    </div>
  );
}

export default MovieList;
