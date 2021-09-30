import Home from './icons/home.svg';
import Add from './icons/add.svg';
import Loupe from './icons/loupe.svg';
import ButtonImage from './ButtonImage';

function NavigationBar() {
  const buttons = [
    {
      id: 'home',
      src: Home,
      text: 'Inicio',
      cb: (event) => { console.log("Home") }
    },
    {
      id: 'add',
      src: Add,
      text: 'Agregar',
      cb: (event) => { console.log("Agregar") }
    },
    {
      id: 'explore',
      src: Loupe,
      text: 'Explorar',
      cb: (event) => { console.log("Explorar") }
    }
  ];

  const buttonsList = buttons.map((button) => {
    return (
      <ButtonImage key={button.id} src={button.src} text={button.text} cb={button.cb} />
    )
  });

  return (
    <nav>
      <ul>
        {buttonsList}
        {/* <li><button className="btn"><img src={Home} alt="Inicio" /></button></li>
        <li><button className="btn"><img src={Add} alt="Agregar" /></button></li>
        <li><button className="btn"><img src={Loupe} alt="Explorar" /></button></li> */}
      </ul>
    </nav>
  )
}

export default NavigationBar
