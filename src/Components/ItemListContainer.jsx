import './ItemListContainer.css'
import { useEffect, useRef, useState } from "react"
import imagenes from '../Imagenes/imagenes'
//import Itemlist from './itemlist'
import Item from './Item'
import { db } from '../firebase/client'
import {getDocs, collection, query, where, limit, getDoc, doc } from 'firebase/firestore'
import { useParams } from 'react-router-dom'

const ItemListcontainer = ({}) =>{

    const [cargando, setCargando] = useState(true)
    const [productos, setproduct] = useState ([])

    const { categoryid } = useParams()

    
    useEffect(()=> {
        setCargando(true)
        setproduct([])

        const collectionRef = categoryid ? query(collection(db, 'products'), where('categoryld', '==', categoryid)) : collection(db, 'products')
        
        getDocs(collectionRef)
        .then(Response=>{
            const productoadapted = Response.docs.map(doc => {
                const data = doc.data()
                return {id: doc.id, ...data}
            })
            setproduct(productoadapted)
        }).catch (Error => {
            console.log(Error)
        }).finally(() => {
            setCargando(false)
        })

    }, [categoryid])

        return(
            
        <>
            {cargando ? (
                 <>
                <p>Cargando productos..</p>
                </>
            ) : (
                <>
                {productos.map((prod, index) => <Item key={prod.id} category={categoryid} producto={prod} />)}
                </>

            )}

        </>
    )
}
export default ItemListcontainer
