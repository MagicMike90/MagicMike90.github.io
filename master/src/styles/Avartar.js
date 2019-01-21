import Image from 'gatsby-image'
import styled from 'styled-components'

const AvartarImage = styled(Image)`
  margin-bottom: 0;
  min-width: 50px;
  border-radius: 100%;
`
const Avartar = styled.div`
  margin-bottom: 10px;
`
Avartar.Image = AvartarImage

export default Avartar
