import styled from 'styled-components'
import { rhythm } from '../../utils/typography'

import Header from './Header'
import Text from './Text'
import Title from './Title'

const Card = styled.div`
  background-color: white;
  padding: ${rhythm(2)};
  margin: 20px 0;

  box-shadow: rgba(25, 17, 34, 0.05) 0px 3px 10px;
  background: rgb(255, 255, 255);
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;

  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s,
    padding 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;

  :hover {
    transform: translateY(-4px);
    box-shadow: rgba(25, 17, 34, 0.1) 0px 10px 42px;
  }

  @media (max-width: 700px) {
    width: 100%;
  }
  @media (min-width: 700px) {
    max-width: 320px;
    margin-right: 20px;
    margin-bottom: 20px;

    :nth-child(even) {
      margin-right: 0;
    }
  }
  @media (min-width: 980px) {
    :nth-child(even) {
      margin-right: 20px;
    }
    :nth-child(3n) {
      margin-right: 0;
    }
  }
`

Card.Header = Header
Card.Text = Text
Card.Title = Title

export default Card
