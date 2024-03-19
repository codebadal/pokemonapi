import { useState } from "react";
import Search from "./Search/search";
import GetPokemon from "./GetPokemon/GetPokemon";
import Pokemondtails from "./pokemonDtails/pokemondtails";

function Pokemondex() {
    const [searchWord, setSearchWord] = useState('')
    // retuning data on the cundtion of search
    return(
        <div>
            <Search upsearchTerm={setSearchWord}/>
            {searchWord}
            {(!searchWord)? <GetPokemon/>: <Pokemondtails pokemonName={searchWord}/>}
        </div>
    )
}
export default Pokemondex