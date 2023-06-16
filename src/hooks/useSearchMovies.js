import { useState, useEffect, useRef } from "react";
export function useSearchMovies() {
    const [search, setSearch] = useState("");
    const [error, setError] = useState(null);
    const isFirstInput = useRef(true);
  
    useEffect(() => {
      if (isFirstInput.current) {
        isFirstInput.current = search === "";
        return;
      }
      if (search === "") {
        setError("Agregar una pelicula para buscar");
        return;
      }
  
      /* if (search.match(/^\d+$/)) {
        setError("No puede buscar una pelicula con un número");
        return;
      } */
  
      if (search.length < 3) {
        setError("La búsqueda debe tener mas de 3 caracteres");
        return;
      }
  
      setError(null);
    }, [search]);
    return { search, setSearch, error };
  }