import {useRouter} from "next/router";
import styled from 'styled-components'

type ButtonType = {
    title:string
    onClick: ()=> void
}

const StyledButton = styled.button`
color: darkblue;
`

const Button = ({title,onClick,...props}:any) => {

    return <StyledButton {...props} onClick={onClick}>{title}</StyledButton>
}

export default Button;