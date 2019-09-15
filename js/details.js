const MOVIE_ENDPOINT = "http://www.omdbapi.com/";
const API_KEY = "apikey=d08f6dbc";

// function to get movie details from id of movie
const callMovieDetailsApi = id => {
  return new Promise((resolve, reject) => {
    fetch(`${MOVIE_ENDPOINT}/?i=${id}&${API_KEY}`)
      .then(res => res.json())
      .then(data => resolve(data))
      .catch(err => {
        reject(err);
      });
  });
};

// get the url of the movie from the browser url
const getIdFromUrl = () => {
  return window.location.search;
};

// function to get and render movie details to dom
const renderMovieDetails = (data) => {
  let movieDetails = document.getElementById("movie-details-container");
  movieDetails.innerHTML = `<div class="movie-details">
    <img
      src=${data.Poster}
      alt=${data.Title}
    />
    <h2 class="title" >Title: ${data.Title}</h2>
    <p class="title" >Actors: Robert Downey Jr., Gwyneth Paltrow, Don Cheadle, Guy Pearce</p>
    <div class="body">
      <p>Director: ${data.Director}</p>
      <p>Released: ${data.Released}</p>
      <p>Runtime: ${data.Runtime}</p>
      <p>Plot: ${data.Plot}</p>
    </div>
  </div>`;
};

// get movie details and render to dom
const getMovieDetails = () => {
  let id = getIdFromUrl();
  // call the api to get the movie details
  callMovieDetailsApi(id.substr(1))
    .then(data => {
      // call the function to render the data received
      renderMovieDetails(data);
    })
    .catch(err => {
      console.log(err);
    });
};

getMovieDetails();
