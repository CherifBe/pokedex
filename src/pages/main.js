import React, { useState, useEffect } from 'react'
import '../styles/css/main.css';
import axios from 'axios'
import PokemonList from '../components/PokemonList';
import Data from '../data/pokemon.json';

function Main() {
 //   const [data, setData] = useState([])
 //   useEffect(() => {
 //       fetchData()
 //   }, [])

 //   const fetchData = async () => {
 //       try {
 //           const response = await axios.get('https://api-pokemon-fr.vercel.app/api/v1/gen/1')
 //           setData(response.data)
 //       } catch (error) {
 //           console.error(error)
 //       }
 //   }

    return (
        <PokemonList data={Data} />
    )
}

export default Main;