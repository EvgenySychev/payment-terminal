import styled from 'styled-components'

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 100%;
  min-width: 200px;
  padding-top: 20px;
  padding-bottom: 20px;
`

const Form = (props:any) => {

    return <StyledForm {...props}/>
}

export default Form;