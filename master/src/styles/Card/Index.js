import styled from 'styled-components'

import Header from './Header'
import Text from './Text'
import Title from './Title'

const Card = styled.div`
  background-color: white;
  padding: 20px;
  margin-top: 20px;
`

Card.Header = Header
Card.Text = Text
Card.Title = Title

export default Card
