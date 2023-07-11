import { Link } from "react-router-dom";

function PokemonList({data}) {
    return (
        <div>
        <h1>Pokedex</h1>
            <div className='container'>
            {data.map((pokemon, index) => (
                <div key={index} className='pokemon-card'>
                    <Link to={`/detail/${pokemon.pokedexId}`}>
                        <h3>{pokemon.name.fr}</h3>
                        <img src={pokemon.sprites.regular} alt={pokemon.name.fr} />
                        <h2>Types:</h2>
                        <div className='pokemon-type'>
                            {pokemon.types.map((type, index) => (
                                <div key={index}>{type.name}</div>
                            ))}
                        </div>
                    </Link>
                </div>

            ))}
            </div>
        </div>
    );
  }
  
  export default PokemonList;
  