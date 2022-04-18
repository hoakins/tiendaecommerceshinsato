import { useState, useEffect } from 'react'
import { getProductsById } from '../asyncmock'


const ItemDetail = () => {
    
    const [products, setProducts] = useState([])

   


return(
<div>

<h1>{props.greeting}</h1>
<ItemList products={products}/>
 <ul>
     { products.map(product => 
     <li>{product.name}, {product.price}</li>
     ) }
 </ul>
</div>

) }

export default ItemDetail