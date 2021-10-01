// const Header = (props) => {
//   return (
//     <header>
//       <h1 className="header-title" >{props.title}</h1>
//     </header>
//   )
// }
import PropTypes from 'prop-types';
import { FaInbox } from 'react-icons/fa'


const Header = ({title}) => {
  return (
    <header className="main-header">
      <h1 className="header-title"><a href="./">{title}</a></h1>
      <FaInbox className="btn-icon" onClick={(event)=>{console.log("Saved items")}}/>
    </header>
  )
}

Header.defaultProps = {
  title: "DogStagram",
}

Header.propTypes = {
  title: PropTypes.string.isRequired
}

// CSS in JS
// const headingStyles = {
//   color: 'red',
//   backgroundColor: 'blue'
// }

export default Header
