import axios from "axios";
import { useEffect, useState } from "react";

// custom hook for feching the data

function usePokemonList(){
    const [pokemonListState, setPokemonListState] = useState({
        pokemonList: [],
        mainUrl : 'https://pokeapi.co/api/v2/pokemon',
        nextUrl: '',
        prevUrl: ''
    })

    async function getList(){
        const response = await axios.get(pokemonListState.mainUrl)
        console.log(response);

        setPokemonListState((state)=>({
            ...state,
            nextUrl: response.data.next,
            prevUrl: response.data.previous
        }))
         const result = response.data.results;
         console.log(result);

         const urlResult = result.map((link)=>axios.get(link.url))
         console.log(urlResult);

         const lastResult = await axios.all(urlResult)

         console.log(lastResult);

         const list = lastResult.map((i)=>{
            const poke = i.data
            return{
                image: poke.sprites.other.dream_world.front_default,
                name: poke.name,
                id: poke.id
            }
         })

         setPokemonListState((state)=>({
            ...state,
            pokemonList: list
         }))
         


    }

    useEffect(()=>{getList()}, [pokemonListState.mainUrl])
    return [
        pokemonListState, setPokemonListState
    ]
}

export default usePokemonList