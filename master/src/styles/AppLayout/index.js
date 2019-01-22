import styled from 'styled-components'

import Container from './Container'
import Siderbar from './Sidebar'
import Footer from './Footer'

const AppLayout = styled.div`
  background-color: #f0f2f5;
  display: flex;
  min-height: 100vh;
  flex-direction: row;
  margin: 0;

  @media (max-width: 700px) {
    flex-direction: column;
  }
`
AppLayout.Container = Container
AppLayout.Siderbar = Siderbar
AppLayout.Footer = Footer

export default AppLayout
