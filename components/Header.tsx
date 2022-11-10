import styled from 'styled-components'

const StyledHeader = styled.header`
  display: flex;
  width: 100%;
  height: 50px;
  color: darkslateblue;
  justify-content: center;
`

const Header = (props: any) => {

    return <StyledHeader {...props}>
        <span style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            fontSize: "16px"
        }}>
            Терминал оплаты сотовой связи
        </span>
    </StyledHeader>
}

export default Header;