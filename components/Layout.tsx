import Header from './Header'
import Footer from './Footer'
import styled from 'styled-components'
//
// const AppWraper = styled.div`
//   background-color: aquamarine;
// `

const Layout = ({children, ...props}: any) => {

    return <div style={{
        backgroundColor: "aquamarine",
        height:"98vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center"
    }}>
        <Header/>
        {
            children
        }
        <Footer/>
    </div>


    // return <AppWraper>
    //     <Header/>
    //     {children}
    //     <Footer/>
    // </AppWraper>

}

export default Layout;