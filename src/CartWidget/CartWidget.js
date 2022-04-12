import './CartWidget.css'

const CartWidget = (cart) => {
 console.log(cart)
      
    return(

<div className="CartWidget">
<img src={'./imagen/logodeCarrito.png'} className="App-logo2" alt="logo2" />
  <h2>{cart.name}</h2>
   
</div>

) 

}




export default CartWidget