import styled from 'styled-components'

const Sidebar = styled.div`
  height: 100%;
  width: 320px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #111;
  overflow-x: hidden;
  padding-top: 20px;

  @media screen and (max-height: 450px) {
    padding-top: 15px;
  }
`
const A = styled.a`
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;

  :hover {
    color: #f1f1f1;
  }

  @media screen and (max-height: 450px) {
    font-size: 18px;
  }
`
Sidebar.A = A

export default Sidebar
