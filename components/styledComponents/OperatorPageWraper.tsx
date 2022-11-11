import styled from 'styled-components'

const StyledOperatorPageWraper = styled.div`
  height: 500px;
  width: 30%;
  min-width: 250px;
  border-badius: 10px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center
`

const OperatorPageWraper = ({title,onClick,...props}:any) => {

    return <StyledOperatorPageWraper {...props} />
}

export default OperatorPageWraper;