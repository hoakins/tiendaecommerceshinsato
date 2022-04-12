import { useState, useEffect } from 'react'

const Counter = ({initial, stock, onAdd}) => {
 

    const [count, setCount] = useState(0)

    const decrement = () => {
        if(count > 0) { setCount(count - 1)
    }}




const increment = () => {
    if(count < 8) {
    setCount(count + 1)
}
}

return(
    <div>
        <p> Camisas </p>
         <button onClick={decrement}>-</button>
         <p>{count}</p>
         <button onClick={increment}>+</button>
         <button onClick={() => onAdd(count)}>Agregar al carrito</button>
    </div>
)
}

export default Counter