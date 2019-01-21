import styled from 'styled-components'
import { rhythm } from '../../utils/typography'

import Container from './Container'
import Siderbar from './Sidebar'
import Footer from './Footer'

const StyledApp = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding: ${rhythm(1.5)} ${rhythm(3 / 4)};
`

StyledApp.Container = Container
StyledApp.Siderbar = Siderbar
StyledApp.Footer = Footer

export default StyledApp
