import PaymentTerminal from '../../components/PaymentTerminal'
import OperatorItemSmall from '../../components/OperatorItemSmall'
//import logoBeeline from '../../public/beeline.png';
import OperatorPageWraper from '../../components/styledComponents/OperatorPageWraper'

const BeelainPage = () => {

    return <OperatorPageWraper>
        <OperatorItemSmall title="Билайн" />
        <PaymentTerminal/>
    </OperatorPageWraper>
}

export default BeelainPage