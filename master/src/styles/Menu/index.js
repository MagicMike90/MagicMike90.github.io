import styled from 'styled-components'

const ListItem = styled.li`
  padding: 0;
  margin: 0.625rem 0;
  text-transform: capitalize;
`
const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`
const Menu = styled.nav`
  margin-bottom: 1.625rem;
`

Menu.List = List
Menu.ListItem = ListItem

export default Menu
