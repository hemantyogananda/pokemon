import './App.css';
import { useGetPokemonByNameQuery } from './services/pokemon';

function App() {
  const {data, error, isLoading} = useGetPokemonByNameQuery('bulbasaur')
  return (
    <div className="App">
      {error?(
        <>
        There is an error
        </>
      ): isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
        <h3>{data.species.name}</h3>
        <img src={data.sprites.front_shiny} alt={data.species.name} />
        </>
      ) : null
      }
    </div>
  );
}

export default App;
