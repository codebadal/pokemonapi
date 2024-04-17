import { Link, useParams } from 'react-router-dom';
import './Pokedex.css'
function Pokedex({name,image,id,}) {
    // giving src path and props
    return(
        <Link to={`/pokemon/${id}`}>
        <div className='list'>
            <img className='img' src={image} alt="img" />
            <div className='name'>{name}</div>
            <div>{id}</div>
        </div>
        </Link>
    )
}
export default Pokedex;