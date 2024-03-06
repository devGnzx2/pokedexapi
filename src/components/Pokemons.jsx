import { IconSearch } from "@tabler/icons-react"
import axios from "axios"
import { useEffect, useState } from "react"
import PokemonList from "./PokemonList"

const Pokemons = () => {
  const [AllPokemons, setAllPokemons] = useState ([])
  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=50")
      .then(({ data }) => setAllPokemons(data.results))
      .catch((err) => console.log(err))
  },[])
  return (
    <section className="p-4 PY-5">
      <form action="">
        <div className="bg-white p-4 flex rounded-2xl text-lg">
          <input className="outline-none flex-1" type="text" placeholder="Search your pokemon"/>
          <button className="bg-red-500 p-2 rounded-xl shadow-lg shadow-red-500/20 hover:bg-red-400 transition-colors">
            <IconSearch color="white" stroke={3}/>
          </button>
        </div>
      </form>
      <PokemonList pokemons={AllPokemons}/>
    </section>
  )
}

export default Pokemons
