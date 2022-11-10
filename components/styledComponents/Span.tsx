import styled from 'styled-components'

const StyledSpan = styled.span`
  height: 20px;
`

const Span = (props:any) => {

    return <StyledSpan{...props}/>
}

export default Span;