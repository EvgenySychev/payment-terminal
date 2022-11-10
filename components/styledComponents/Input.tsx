import styled from 'styled-components'

const StyledInput = styled.input`
  width: 200px;
  min-width: 196px;
  padding: 0;
  margin: 0;
  height: 40px;
  font-size: 20px;
  text-align: center;
`

const Input = (props:any) => {

    return <StyledInput {...props} />
}

export default Input;