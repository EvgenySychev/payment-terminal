import Header from './Header'
import Footer from './Footer'
import styled from 'styled-components'

const AppWraper = styled.div`
  background-color: aquamarine;
  height: 98vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center
`

const Layout = ({children, ...props}: any) => {

    return <AppWraper>
        <Header/>
        {
            children
        }
        <Footer/>
    </AppWraper>
}

export default Layout;