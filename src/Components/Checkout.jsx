import { Link } from 'react-router-dom'
import './Checkout_css.css'

const Checkout = ({}) =>{

    return(
        <>
        <div className='divcheckout'>
            <h2 className='h2'>Nombre: </h2>
            <input className='inputs' type='text'/>
            <h2 className='h2'>Apellido: </h2>
            <input className='inputs' type='text'/>
            <h2 className='h2'>Email: </h2>
            <input className='inputs' type='text'/>
            <br></br>
            <button className='confirm'>
                Confirmar compra
            </button>
        </div>
        </>

    )
}
export default Checkout