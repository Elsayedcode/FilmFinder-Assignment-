
const form = document.getElementById("form");
const movieList = document.getElementById("movie-list");
const selectedFilter = document.getElementById("selected-filter");

//To go throuw the movies array and insert them as li inside the movieList
function displayMovies(movies) {
    movieList.innerHTML = "";
for (let i = 0; i < movies.length; i++) {
  const li = document.createElement('li');
  const link = document.createElement('a');
  const img = document.createElement('img');
  li.classList.add("movie");
  link.href = movies[i].imdbID;
  img.src = movies[i].poster;
  li.appendChild(link);
  link.appendChild(img)
  movieList.appendChild(li);
}

// Get the selected value and type
form.addEventListener("click", function(event) {

    const selectedValue = event.target.value;
    const selectedType = event.target.type;
    
  
    // Filter the movies based on the selected value
    let filteredMovies;
    if (selectedValue === "New movies") {
      filteredMovies = allMovies.filter(movie => movie.year >= "2014");
    } else if (selectedValue === "Avenger") {
      filteredMovies = allMovies.filter(movie => movie.type === "Avenger");
    } else if (selectedValue === "X-Men") {
      filteredMovies = allMovies.filter(movie => movie.type === "X-Men");
     } else if (selectedValue === "Princess") {
          filteredMovies = allMovies.filter(movie => movie.type === "Princess");
    } else if (selectedValue === "Batman") {
      filteredMovies = allMovies.filter(movie => movie.type === "Batman");
    } else {
      filteredMovies = allMovies;
    }
    
    // Update the selected filter display
    selectedFilter.textContent = selectedType;
  
  
    // Populate the movie list with the filtered 
    displayMovies(filteredMovies );
    
  });


        }
       

displayMovies(allMovies );



