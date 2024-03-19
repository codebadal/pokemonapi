import Pokedex from '../Pokedex/Pokedex';
import usePokemonList from '../../hookes/UsePokemonList';
import './GetPokemon.css';
function GetPokemon() {
    // using custom hook for fetching the data
    const [pokemonListState, setPokemonListState] = usePokemonList()
    return(
        <div>
            {/* declering props */}
            <div className='data'> 
                {pokemonListState.pokemonList.map((p)=><Pokedex
                image={p.image}
                id={p.id}
                name={p.name}
                key={p.id}
                />)}
            </div>
            
            {/* buttons for next and prev page */}
            <div className='btns'>
                <button
                    className='btn'
                    disabled={pokemonListState.prevUrl==null}
                  onClick={()=>setPokemonListState({
                    ...pokemonListState,
                    mainUrl: pokemonListState.prevUrl
                })}>pre</button>
                <button
                    className='btn'
                    disabled={pokemonListState.nextUrl==null}
                 onClick={()=>setPokemonListState({
                    ...pokemonListState,
                    mainUrl: pokemonListState.nextUrl
                })}>next</button>
            </div>
        </div>
    )
}
export default GetPokemon