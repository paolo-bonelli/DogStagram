// const Header = (props) => {
//   return (
//     <header>
//       <h1 className="header-title" >{props.title}</h1>
//     </header>
//   )
// }
import Inbox from './icons/inbox.svg';
import PropTypes from 'prop-types';
import ButtonImage from './ButtonImage';


const Header = ({title}) => {
  return (
    <header className="main-header">
      <h1 className="header-title"><a href="./">{title}</a></h1>
      <ButtonImage src={Inbox} alt="Guardados" cb={(event)=>{console.log("Saved items")}}/>
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
