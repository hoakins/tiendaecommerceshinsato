import CartWidget from '../../CartWidget/CartWidget'
import './NavBar.css' 

const NavBar = () => {
    const cart = '5'

    return(



<nav>
<img src={'./imagen/logo5.png'} className="App-logo1" alt="logo1" />
            <CartWidget name={cart}/>
        <button>Libros</button>
        <button>Electronica</button>
        <button>Vehiculos</button>
        <h1>Tienda Shinsato</h1>
        
        </nav>
    ) 

}




export default NavBar