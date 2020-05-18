// * [ ] Add functionality so the `Home` button on the `SavedList` component navigates back to home.
// * [ ] You should now be able to navigate back and forth between the individual movies and the home screen.


import React from 'react';
import { Link } from 'react-router-dom'; 



const SavedList = props => (

  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      <span className="saved-movie">{movie.title}</span>
    ))}
    <Link to='/'> <div className="home-button">Home</div> </Link>
  </div>
);

export default SavedList;
