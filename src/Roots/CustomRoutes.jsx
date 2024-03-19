import { Route, Routes } from "react-router-dom";
import Pokemondtails from "../components/pokemonDtails/pokemondtails";
import Pokemondex from "../components/pokemondex";

function CustomRoutes() {
    return(
        <Routes>
            <Route path="/" element={<Pokemondex/>}/>
            <Route path="pokemon/:id" element={<Pokemondtails/>}/>
        </Routes>
    )
}
export default CustomRoutes;