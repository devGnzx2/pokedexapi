import Pokemons from "./components/Pokemons"
import Aside from "./components/Aside"

function App() {

  return (
    <section>
      <main className="max-w-[1400] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_350px] h-screen">
        <Pokemons/>
        <Aside/> 
      </main>
    </section>
  )
}

export default App
