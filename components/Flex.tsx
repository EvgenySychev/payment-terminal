import styled from 'styled-components'

const StyledFlex = styled.div `
display: flex;
  flex-direction:direction;
  justify-content: center;
`

const Flex = (props: any) => {
    return <StyledFlex{...props}/>
}

export default Flex

// flex-direction: ${props => props.direction || 'row'};
// align-items: ${props => props.aligt || 'stretch'};
// justify-content: ${props => props.justify || 'stretch'};