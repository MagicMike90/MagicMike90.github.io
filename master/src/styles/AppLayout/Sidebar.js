import styled from 'styled-components'

const Sidebar = styled.div`
  // height: 100%;
  // width: 320px;
  // position: fixed;
  // background-color: white;
  // z-index: 1;
  // top: 0;
  // left: 0;

  // overflow-x: hidden;

  width: 320px;

  :after {
    content: '';
    flex: 1; /* thats where it takes room not use by the text */
    margin: -1em 0; /* grow them taller */
    border-right: solid 1px white;
  }

  @media (max-width: 700px) {
    width: 100%;
    height: auto;
    position: relative;
  }
`
const Inner = styled.div`
  padding: 2.5rem;
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
Sidebar.Inner = Inner
Sidebar.A = A

export default Sidebar
