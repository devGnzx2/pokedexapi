import PokemonDetail from "./PokemonDetail"
import PokemonSelected from "../../public/img/no-pokemon-selected.png"
import Pokeball from "../../public/img/pokeball-icon.png"


const Aside = ({ pokemon, isLoading}) => {
  return (
    <section className="hidden lg:block sticky top-0 h-screen">
      <article className={`absolute z-20 bottom-0 bg-white w-full h-[85%] rounded-tl-3xl rounded-tr-3xl text-center transition-all duration-450 ${ pokemon && !isLoading ? "left-0" : "left-[50vw]"}`}>
        <PokemonDetail pokemon={pokemon}/>
      </article>
      <article className={`absolute z-20 bottom-0 bg-white w-full h-[85%] rounded-tl-3xl rounded-tr-3xl text-center grid place-content-center transition-all duration-450 ${ pokemon ? "left-[50vw]" : "left-0"}`}>
        <header className="absolute left-1/2 -translate-x-1/2 top-0 -translate-y-[50%] scale-90">
          <img src={PokemonSelected} alt="" />
        </header>
        <span className="text-lg text-slate-400 px-2">Select a Pokemon to display here.</span>
      </article>
      <div className="w-[80px] absolute left-1/2 -translate-x-1/2  top-1/2 -translate-y-1/2">
        <img className="contrast-50 animate-spin-slow" src={Pokeball} alt="" />
      </div>
    </section>
  )
}

export default Aside
