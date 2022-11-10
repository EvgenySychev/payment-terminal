import styled from 'styled-components'

const StyledDisplay = styled.div`
  background-color: bisque;
  margin: 10px;
  border-radius: 10px;
  min-height: 150px;
  h2 {
    padding-left: 10px;
    padding-right: 10px;
    text-align: center;
    padding-top: 10px
  }
  p {
    padding-left: 10px;
    padding-right: 10px;
    text-align: center;
    padding-top: 10px
  }
`

const Display = (props:any) => {

    return <StyledDisplay{...props}/>
}

export default Display;