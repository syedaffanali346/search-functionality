import React, { useEffect, useState } from "react";
import "../src/index.css";
import PokemonCards from "./PokemonCards";

const Pokemon = () => {
  const [pokemon,setPokemon] = useState([]);
  const [loading,setLoading] = useState(true);
  const [error,setError] = useState(null);
  const [search,setSearch] = useState("");

  const API = "https://pokeapi.co/api/v2/pokemon?limit=500";
  const fetchPokemon = async () => {
    try {
      const response1 = await fetch(API);
      const fullData = await response1.json();

      const getUrl = fullData.results.map(async (curr) => {
        const response2 = await fetch(curr.url);
        const pokemonData = await response2.json();
        return pokemonData;
      });
      const dataFromPromises = await Promise.all(getUrl);
      console.log(dataFromPromises);
      setPokemon(dataFromPromises);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
      setError(err);
    }
  };
  useEffect(() => {
    fetchPokemon();
  }, []);

  const searchContent = pokemon.filter((curr)=> curr.name.toLowerCase().includes(search.toLocaleLowerCase()))

  if (loading) {
    return(
      <div>
        <h1>Loading...</h1>
      </div>
    )
  }

  if (error) {
    return(
      <div>
        <h1>{error.message}</h1>
      </div>
    )
  }

  return (
    <section className="container">
      <header>
        <h1>Pokemons</h1>
      </header>
      <div className="pokemon-search">
        <input type="text" placeholder="Search Pokemon" value={search} onChange={(e)=> setSearch(e.target.value)} />
      </div>
      <div>
        <ul className="cards">
          {
            searchContent.map((pokemons)=>{
              return <PokemonCards key={pokemons.id} allPokemonData={pokemons} />
            })
          }
        </ul>
      </div>
    </section>
  );
};

export default Pokemon;
