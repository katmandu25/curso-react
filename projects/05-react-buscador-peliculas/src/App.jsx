import './App.css';
import responseMovies from './mocks/with-results.json';
import withoutResults from './mocks/no-results.json';

function App() {
  
  const movies = responseMovies.Search
  const hasMovies = movies?.length>0

  return (
    <div className='page'>
      <header>
        <h1>Buscador de peliculas</h1>
        <form className='form'>
          <input
            size='30'
            placeholder='Avengers, Star Wars, The Matrix ...'
          ></input>
          <button type='submit'>Buscar</button>
        </form>
      </header>
      <main>
        {
          hasMovies
          ? (
            <ul>
              {
                movies.map(movie=> {
                  (
                  <li key={movie.imdbID}>
                    <h3>{movie.Title}</h3>
                    <p>{movie.Year}</p>
                    <img src={movie.Poster} alt={movie.Title}></img>
                  </li>
                ))
              }
            </ul>
          ) 
        }</main>
    </div>
  );
}

export default App;
