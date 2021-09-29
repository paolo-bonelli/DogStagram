import Home from './icons/home.svg';
import Add from './icons/add.svg';
import Loupe from './icons/loupe.svg'

function NavigationBar() {
  return (
    <nav>
      <ul>
        <li><button className="btn"><img src={Home} alt="Inicio" /></button></li>
        <li><button className="btn"><img src={Add} alt="Agregar" /></button></li>
        <li><button className="btn"><img src={Loupe} alt="Explorar" /></button></li>
      </ul>
    </nav>
  )
}

export default NavigationBar
