import {NavBar} from './styles'
const Nav = (props) => {
  return(
      <NavBar>
        {props.children}
      </NavBar>
  )
}

export default Nav