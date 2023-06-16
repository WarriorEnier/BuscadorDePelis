import PropTypes from "prop-types";

function ResMovies({ movies }) {
  return (
    <ul className="grid   grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-[70%] lg:w-[90%]">
      {movies.map((movie) => (
        <li
          key={movie.id}
          className="flex flex-col items-center justify-center my-4 bg-slate-800 rounded-t-lg"
        >
          <div className="h-[20%]">
            <h3 className="text-white text-center mt-2">{movie.title}</h3>
            <p className="text-white mb-4 text-center">{movie.year}</p>
          </div>
          <div className="h-full w-full">

            <img
              src={movie.poster}
              alt={movie.title}
              className="rounded-t-lg w-full h-full"
            />
          </div>
          
        </li>
      ))}
    </ul>
  );
}
function NoMovies() {
  return <p className="text-white">No hay nada</p>;
}

export const Movies = ({ movies }) => {
  const hasMovies = movies?.length > 0;

  return hasMovies ? <ResMovies movies={movies} /> : <NoMovies />;
};

Movies.propTypes = {
  movies: PropTypes.array.isRequired,
};
