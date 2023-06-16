import { useMovies } from "./hooks/useMovies";
import { useSearchMovies } from "./hooks/useSearchMovies";
import { useCallback } from "react";
import { Movies } from "./components/Movies";
import { Header } from "./components/Header";
import { useState } from "react";
import debounce from "just-debounce-it";

function App() {
  const [sort, setSort] = useState(false);
  const { search, setSearch, error } = useSearchMovies();
  const { movies, getMovies, loading } = useMovies({ search, sort });
  const [currentPage, setCurrentPage] = useState(1)

  const moviesPerPage = 10;
  const totalPages = Math.ceil(movies.length/ moviesPerPage)

  const debouncedgetMovies = useCallback(
    debounce((search) => {
      getMovies({ search });
    }, 400),
    [getMovies]
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    //Formulario sin controlar
    //Capturar lo que esta en el input con el useRef
    /* const value = inputRef.current.value; */
    //console.log(value);
    //Capturar lo que esta en el input con vanillaJS
    /* const fields = Object.fromEntries(new FormData(event.target));
    console.log(fields); */

    //Formulario Controlado
    getMovies({ search });
  };

  const handleSort = () => {
    setSort(!sort);
  };

  const handleChange = (event) => {
    const newSearch = event.target.value;
    setSearch(newSearch);
    debouncedgetMovies(newSearch);
  };

  const handlePageClick = (page) => {
    setCurrentPage(page)
  }

  const indexOflastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOflastMovie -moviesPerPage;
  const currentMovies = movies.slice(indexOfFirstMovie, indexOflastMovie)

  return (
    <>
      <header className="flex flex-col w-full items-center gap-3">
       <Header
          search={search}
          sort={sort}
          error={error}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          handleSort={handleSort}
        /> 
      </header>
      <main className="w-full h-screen flex justify-center">
        {loading ? (
          <p className="text-white">CARGANDO</p>
        ) : 
          currentMovies.length > 0 &&(
            <div className="flex flex-col items-center gap-4">
              <Movies movies={currentMovies} />
              <nav>
                <ul className="flex justify-center gap-4 mb-8">
                  {Array.from({ length: totalPages }).map((_, i) => (
                    <li
                      key={i}
                      onClick={() => handlePageClick(i + 1)}
                      className={`${
                        currentPage === i + 1 && "bg-blue-500 text-white"
                      } py-1 px-2 lg:py-2 lg:px-4 rounded-lg text-blue-100 hover:bg-blue-500 hover:text-white cursor-pointer`}
                    >
                      {i + 1}
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

          )
        }
      </main>
    </>
  );
}

export default App;
