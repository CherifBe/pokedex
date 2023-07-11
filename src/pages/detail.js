import React, { useState, useEffect } from 'react'
import '../styles/css/detail.css';
import axios from 'axios'
import PokemonCard from '../components/PokemonCard';
import { useParams } from 'react-router-dom';
import Data from '../data/pokemon.json';

function Detail() {
    const {id} = useParams();
    const myData = Data.find((myData) => myData.pokedexId.toString() === id);

    if (!myData) {
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
        <PokemonCard dataPokemon={myData} />
    )
}

export default Detail;