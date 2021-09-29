// const Header = (props) => {
//   return (
//     <header>
//       <h1 className="header-title" >{props.title}</h1>
//     </header>
//   )
// }
import Inbox from './icons/inbox.svg'
import PropTypes from 'prop-types'


const Header = ({title}) => {
  return (
    <header className="main-header">
      <h1 className="header-title">{title}</h1>
      <button className="btn"><img src={Inbox} alt="Guardados" /></button>
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
