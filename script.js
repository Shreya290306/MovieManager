let movies = [
    { title: "Welcome", genre: "Comedy", rating: 8.4, releaseYear: 2009 }, 
    { title: "Lagaan", genre: "Drama", rating: 8.1, releaseYear: 2001 },
    { title: "Kabhi Khushi Kabhie Gham", genre: "Drama", rating: 7.4, releaseYear: 2001 },
    { title: "Yeh Jawaani Hai Deewani", genre: "Adventure", rating: 8.1, releaseYear: 2011 }
  ];
  
  function addMovie(title, genre, rating, releaseYear) {
    const newMovie = { title, genre, rating, releaseYear };
    if (genre !== "Romance") {
      movies.push(newMovie);
      displayMessage(`Added new movie: ${title}`);
    }
  }
  
  function listMoviesByGenre(genre) {
    const filteredMovies = movies.filter(movie => movie.genre === genre);
    let output = `Movies in genre "${genre}":<br>`;
    filteredMovies.forEach(movie => {
      output += `- ${movie.title} (${movie.releaseYear})<br>`;
    });
    displayMessage(output);
  }
  
  function findHighestRatedMovie() {
    const highestRatedMovie = movies.reduce((max, movie) => (movie.rating > max.rating ? movie : max), movies[0]);
    displayMessage(`Highest rated movie: ${highestRatedMovie.title} with a rating of ${highestRatedMovie.rating}`);
  }
  
  function listAllMovieTitles() {
    const titles = movies.map(movie => movie.title);
    let output = "All Bollywood movie titles:<br>";
    titles.forEach(title => {
      output += `- ${title}<br>`;
    });
    displayMessage(output);
  }
  
  function findMoviesAfterYear(year) {
    const filteredMovies = movies.filter(movie => movie.releaseYear > year);
    let output = `Bollywood movies released after ${year}:<br>`;
    filteredMovies.forEach(movie => {
      output += `- ${movie.title} (${movie.releaseYear})<br>`;
    });
    displayMessage(output);
  }
  
  function displayMessage(message) {
    const outputDiv = document.getElementById('moviesOutput');
    outputDiv.innerHTML = message;
  }
  