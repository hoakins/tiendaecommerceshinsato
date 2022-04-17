import './ItemListContainer.css'
import { useState, useEffect } from 'react'
import { getproducts } from '../asyncmock'


const ItemListContainer = (props) => {
        const [products, setProducts] = useState([])
    
        useEffect(() => {
            getproducts().then(prods => {
                    setProducts(prods)
            }).catch(error => {
                console.log(error)
            })  
        }, [])
        
return(
<div>

<h1>{props.greeting}</h1>
<ItemList products={products}/>
 <ul>
     { products.map(product => <li>{product.name}</li>) }
 </ul>
</div>

)}


export default ItemListContainer