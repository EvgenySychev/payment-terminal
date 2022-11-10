import styled from 'styled-components'

const StyledPaymentResultPage = styled.div`
  height: 400px;
  width: 50%;
  min-width: 250px;
  border-radius: 10px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const PaymentResultPage = (props:any) => {

    return <StyledPaymentResultPage{...props}/>
}

export default PaymentResultPage;