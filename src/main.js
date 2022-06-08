const movie = document.querySelector(".movie");
const search = document.querySelector(".search");
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  const url = "https://www.omdbapi.com/?apikey=trilogy&t=" + search.value;
  fetch(url)
    .then((result) => result.json())
    .then((result) => {
      const { Title, Year, Runtime, Actors, Poster } = result;
      movie.innerHTML = Title;
      document.querySelector(".year").innerHTML = "Year: " + Year;
      document.querySelector(".runtime").innerHTML = "Runtime: " + Runtime;
      document.querySelector(".actors").innerHTML = "Actors: " + Actors;
      document.querySelector("#poster").src = Poster;
    })
    .catch((error) => {
      console.log(error);
    });
});
