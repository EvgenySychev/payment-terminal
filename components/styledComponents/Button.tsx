import styled from 'styled-components'

type ButtonType = {
    title:string
    onClick?: ()=> void
}

const StyledButton = styled.button`
  color: darkslateblue;
  margin: 10px;
  height: 40px;
  font-size: 16px;
  font-weight: 600;
  width: 200px;
`

const Button = ({title,onClick,...props}:any) => {

    return <StyledButton {...props} onClick={onClick}>{title}</StyledButton>
}

export default Button;