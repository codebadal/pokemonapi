import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./pokemonDtails.css"
function Pokemondtails({pokemonName}) {
    const {id} = useParams()
    const [pokemonDt, setPokemonDt] = useState({})

    async function dtails(){
        let response ;
        if (pokemonName) {
            //fetching data by name of pokemon  
            response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        } else {
            // feaching data by id
            response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        }
        console.log(response);
        setPokemonDt({
            // all pokemon data to show 
            name: response.data.name,
            image: response.data.sprites.other.dream_world.front_default,
            height: response.data.height,
            weight: response.data.weight,
            status: response.data.order
        })

    }
    useEffect(()=>{dtails()}, [])
    return(
        <div className="dtails-box">
            <div className="text">name: {pokemonDt.name}</div>
            <img src={pokemonDt.image} alt="" />
            <div className="text">height: {pokemonDt.height}</div>
            <div className="text">weight: {pokemonDt.weight}</div>
            <div className="text">status: {pokemonDt.status}</div>
        </div>
    )
}
export default Pokemondtails;