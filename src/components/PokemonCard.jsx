import { Link } from "react-router-dom";

function PokemonCard({dataPokemon}) {
  return (
    <div className="container">
        <h1>{dataPokemon.name.fr}</h1>
        <img src={dataPokemon.sprites.regular} alt={dataPokemon.name.fr} />
        <div>
            <div>
                <h2>Types:</h2>
                <ul>
                    {dataPokemon.types.map((type, index) => (
                        <li key={index}>{type.name}</li>
                    ))}
                </ul>
                <h2>Evolutions:</h2>
                <ul>
                    {dataPokemon.evolution.next != null ? dataPokemon.evolution.next.map((evolution, index) => (
                        <li key={index}><Link to={`/detail/${evolution.pokedexId}`}>{evolution.name}</Link> à partir du {evolution.condition}</li>
                    )) : <li>Aucune évolution</li>}
                </ul>
            </div>

            <div>
                <h2>Caractéristiques</h2>
                <ul>
                    <li>Taille: {dataPokemon.height}</li>
                    <li>Poids: {dataPokemon.weight}</li>
                    {dataPokemon.egg_groups.map((group, index) => (
                        <li key={index}>{group}</li>
                    ))}
                </ul>

                <h2>Talents:</h2>
                <ul>
                    {dataPokemon.talents.map((talent, index) => (
                        <li key={index}>{talent.name}</li>
                    ))}
                </ul>

                <h2>Stats:</h2>
                <ul>
                    <li>HP: {dataPokemon.stats.hp}</li>
                    <li>Attack: {dataPokemon.stats.atk}</li>
                    <li>Defense: {dataPokemon.stats.def}</li>
                    <li>Special Attack: {dataPokemon.stats.spe_atk}</li>
                    <li>Special Defense: {dataPokemon.stats.spe_def}</li>
                    <li>Speed: {dataPokemon.stats.vit}</li>
                </ul>
            </div>
        </div>
    </div>
  );
}

export default PokemonCard;
