import style from './Footer.module.css'
import styled from 'styled-components'
import { FooterContacts } from './FooterContact'

const StyledFoter = styled.footer`
  display: flex;
  width: 100%;
  height: 120px;
  background-color: gray;
  justify-content: space-around;
  color: darkslateblue;
`

const Footer = (props: any) => {

    return <StyledFoter {...props}>
        <FooterContacts/>
        <span style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            fontSize: "16px"
        }}>
            Приложение предназначено для тетсирования функционала оплаты сотовой связи
        </span>
    </StyledFoter>
}

export default Footer;