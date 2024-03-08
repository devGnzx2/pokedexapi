import { IconSearch } from "@tabler/icons-react"
import axios from "axios"
import { useEffect, useState, useRef } from "react"
import PokemonList from "./PokemonList"
import { useIntersectionObserver } from "../hooks/useIntersectionObserver"

const INITIAL_LIMIT = 40
const INCREASE_LIMIT = 20


const Pokemons = () => {
  const [allPokemons, setAllPokemons] = useState ([])
  const [pokemonName, setPokemonName] = useState ("")
  const [limit, setLimit] = useState (INITIAL_LIMIT)

  const targetObserver = useRef(null)
  const entry = useIntersectionObserver(targetObserver, {})
  const isVisible = !!entry?.isIntersecting

  const pokemonByName = allPokemons.filter((pokemon) => pokemon.name.includes(pokemonName));

  const handleChangePokemonName = (e) => setPokemonName(e.target.value.toLowerCase());

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=898")
      .then(({ data }) => setAllPokemons(data.results))
      .catch((err) => console.log(err))
  },[])

  useEffect(() => {
    const maxPokemons = pokemonByName.length
    if(isVisible && maxPokemons !== 0) {
      const newLimit = limit + INCREASE_LIMIT
      newLimit > maxPokemons ? setLimit(maxPokemons) :
      setLimit(newLimit)
    } 
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[isVisible])

  useEffect(() => {
    setLimit(INITIAL_LIMIT)
  }, [pokemonName])
  return (
    <section className="p-4 PY-5">
      <form>
        <div className="bg-white p-4 flex rounded-2xl text-lg">
          <input className="outline-none flex-1" 
                type="text" 
                autoComplete="off" 
                placeholder="Search your pokemon" 
                name="pokemonName" 
                onChange={handleChangePokemonName}/>
          <button type="button" className="bg-red-500 p-2 rounded-xl shadow-lg shadow-red-500/20 hover:bg-red-400 transition-colors">
            <IconSearch color="white" stroke={3}/>
          </button>
        </div>
      </form>
      <PokemonList pokemons={pokemonByName.slice(0, limit)}/>
      {/*observer*/}
      <span ref={targetObserver}></span>
    </section>
  )
}

export default Pokemons
