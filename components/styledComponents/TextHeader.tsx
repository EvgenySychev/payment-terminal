import styled from 'styled-components'

const StyledHeader = styled.h4`
  text-align: center;
  height: 40px; 
  font-size: 30px;
  margin-block-start: 0;
  margin-block-end: 0;
  color: darkslateblue;
`

const TextHeader = (props:any) => {

    return <StyledHeader{...props}/>
}

export default TextHeader;