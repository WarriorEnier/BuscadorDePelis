export const searchMovies = async ({ search }) => {
  const urlApi = import.meta.env.VITE_API;
  const apikey = import.meta.env.VITE_KEY;
  if (search === "") return null;
  try {
    let movies = []
    for(let i = 1; i<11;i++){

      const response = await fetch(
        `${urlApi}${search}${apikey}&page=${i}`
      );
      const json = await response.json();
      movies = [...movies,...json.Search];
    }
    

    return movies?.map((movie) => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster,
    }));
  } catch (error) {
    throw new Error("Error al buscar una peli");
  }
};
