//import styled from 'styled-components'

import style from './Header.module.css'

/*const StyledHeader = styled.header`
  width: 100%;
  height: 70px;
  background-color: darkkhaki;
  text-align: center;
`*/

const Header = (props: any) => {
    
    return <div className={style.header}>
        <div className={style.description}>
            Терминал оплаты сотовой связи
        </div>
    </div>

    // return <StyledHeader {...props}>
    //     <div>
    //         HEADER
    //     </div>
    // </StyledHeader>
}

export default Header;