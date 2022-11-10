import styled from 'styled-components'

const StyledSpan = styled.span`
  height: 20px;
  color: darkslateblue;
  font-size: 15px;
`

const Span = (props:any) => {

    return <StyledSpan{...props}/>
}

export default Span;