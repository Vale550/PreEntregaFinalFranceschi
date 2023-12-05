import { Link } from 'react-router-dom'
import './Item.css'
import ItemDetails from './ItemDetails'

const Item = ({category, producto}) =>{

    return(
        <div className='divcss'>
            <img className='imgcss' src={`http://localhost:5173/src/Imagenes/${producto.image}`} />
            <h2 className='h2css'>{producto.title}</h2>
            <h2 className='h2css'>{producto.price}</h2>
            <Link as={Link} to={`/Item/${producto.id}`}>
                <button>
                Mas detalles
                </button>
            </Link>
        </div>

    )
}
export default Item