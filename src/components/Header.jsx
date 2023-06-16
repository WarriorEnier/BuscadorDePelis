import PropTypes from 'prop-types'
export const Header = ({search, error, handleSubmit, handleChange, handleSort, sort}) => {
  

  return (
    <>
      <h1 className="text-gray-200 text-3xl md:text-5xl my-4 uppercase">
        Buscador de Peliculas
      </h1>
      <form
        onSubmit={handleSubmit}
        className="flex gap-2 w-[80%] justify-evenly h-[50px]"
      >
        <input
          onChange={handleChange}
          value={search}
          name="input_movie"
          //ref={inputRef}
          type="text"
          className={
            error
              ? "bg-red-200 w-[80%] outline-none pl-2 rounded-lg text-white"
              : "pl-2 rounded-lg  text-gray-200 bg-slate-800 w-[80%] outline-none"
          }
          placeholder="Batman, Avengers..."
        />
        <input type="checkbox" onChange={handleSort} checked={sort} />
        <button
          type="submit"
          className="circle-in-hesitate text-gray-800 bg-gray-300  rounded-lg w-[20%] items-center hover:bg-gray-500 hover:text-gray-200 uppercase font-bold"
        >
          Buscar
        </button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </>
  );
};

Header.propTypes = {
  search: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
  sort: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleSort: PropTypes.func.isRequired
}
