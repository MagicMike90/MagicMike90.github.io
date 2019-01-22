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

  background: #d7e8d4;
  width: 320px;

  :after {
    top: 20px;
    right: 0;
    width: 1px;
    bottom: 20px;
    content: '';
    position: absolute;
    border-right: 1px solid #dedede;
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
