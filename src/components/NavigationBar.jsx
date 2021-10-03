import { Link } from 'react-router-dom'
import { FaPlusCircle, FaHome, FaSearch } from 'react-icons/fa'

function NavigationBar() {
  return (
    <nav>
      <ul>
        <Link to="/">
          <FaHome className="btn-icon" onClick={(event) => { console.log("Inicio") }} />
        </Link>
        <Link to="/add">
          <FaPlusCircle className="btn-icon" onClick={(event) => { console.log("Agregar") }} />
        </Link>
        <FaSearch className="btn-icon" onClick={(event) => { console.log("Explorar") }} />
      </ul>
    </nav>
  )
}

export default NavigationBar
