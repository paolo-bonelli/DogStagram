// const Header = (props) => {
//   return (
//     <header>
//       <h1 className="header-title" >{props.title}</h1>
//     </header>
//   )
// }

const Header = ({title}) => {
  return (
    <header>
      <h1 className="header-title">{title}</h1>
    </header>
  )
}

Header.defaultProps = {
  title: "DogStagram",
}

export default Header
