import styled from 'styled-components'

import Header from './Header'
import Text from './Text'
import Title from './Title'

const Card = styled.div`
  background-color: white;
  padding: 20px;
  margin: 20px 0;

  box-shadow: rgba(25, 17, 34, 0.05) 0px 3px 10px;
  background: rgb(255, 255, 255);
  border-radius: 4px;
  padding: 2.1rem 3.15rem;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s,
    padding 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;

  :hover {
    transform: translateY(-4px);
    box-shadow: rgba(25, 17, 34, 0.1) 0px 10px 42px;
  }
`

Card.Header = Header
Card.Text = Text
Card.Title = Title

export default Card
