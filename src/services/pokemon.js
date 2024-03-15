import axios from "axios"

const getEvolutionsData = (evolutios) => {
    return  evolutios.map(
        async(evolution) => 
        await axios.get(`https://pokeapi.co/api/v2/pokemon/${evolution.name}/`)
    )
}
export { getEvolutionsData}