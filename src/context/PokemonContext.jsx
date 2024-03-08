
import { createContext, useState } from "react";

const PokemonContext = createContext();

const PokemonProvider = ({ children }) => {
    // eslint-disable-next-line no-unreachable
    const [showDetailPokemon, setShowDetailPokemon] = useState(false);
    
    const showPokemonById = () => {
        setShowDetailPokemon(true);
    };
    
    // eslint-disable-next-line no-unreachable
    const closePokemonDetail = () => {
        setShowDetailPokemon(false)
    };
    
    return(
    // eslint-disable-next-line no-unreachable
    <PokemonContext.Provider
        value={{
            showDetailPokemon,
            showPokemonById,
            closePokemonDetail,
        }}
    >
        {children}
    </PokemonContext.Provider>
    )
};

export { PokemonContext, PokemonProvider };