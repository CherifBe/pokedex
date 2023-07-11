import React, { useState, useEffect } from 'react';
import '../../styles/css/pokemon/detail.css';
import PokemonCard from '../../components/pokemon/PokemonCard';
import { Link, useParams } from 'react-router-dom';
import Data from '../../data/pokemon.json';

function Detail() {
  const { id } = useParams();
  const dataPokemon = Data.find((myData) => myData.pokedexId.toString() === id);

  if (!dataPokemon) {
    return <div>Pokemon inexistant</div>;
  }
  //  const [data, setData] = useState([])
  //  useEffect(() => {
  //      fetchData()
  //  }, [])

  //  const fetchData = async () => {
  //      try {
  //          const response = await axios.get('https://api-pokemon-fr.vercel.app/api/v1/pokemon/'+id)
  //          console.log(response.data);
  //          setData(response.data)
  //      } catch (error) {
  //          console.error(error)
  //      }
  //  }

  return (
    <div>
      <PokemonCard dataPokemon={dataPokemon} />
      <div className="btns">
        {id == 1 ? (
          <div>Pas de précédent</div>
        ) : (
          <button>
            <Link to={`/detail/${parseInt(id) - 1}`}>Précédent</Link>
          </button>
        )}
        {id == 151 ? (
          <div>Pas de suivant</div>
        ) : (
          <button>
            <Link to={`/detail/${parseInt(id) + 1}`}>Suivant</Link>
          </button>
        )}
      </div>
    </div>
  );
}

export default Detail;
