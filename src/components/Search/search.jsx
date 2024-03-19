import UseDebounce from "../../hookes/UseDebounce"
import "./Search.css"
function Search({upsearchTerm}) {
    // excuting dealy on search function for reducing server load
    const db = UseDebounce((e)=>upsearchTerm(e.target.value))
    return(
        <div className="search-div">
            <input type="text"
            className="search"
            placeholder="enter pokemonName"
            onChange={(e)=>db(e)}/>
        </div>
    )
}
export default Search