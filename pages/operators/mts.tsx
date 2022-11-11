import PaymentTerminal from '../../components/PaymentTerminal'
import OperatorItemSmall from '../../components/OperatorItemSmall'
//import logoMts from '../../public/MTS.png';
import OperatorPageWraper from '../../components/styledComponents/OperatorPageWraper'

const MtsPage = () => {

    return <OperatorPageWraper >
        <OperatorItemSmall title="МТС" />
        <PaymentTerminal/>
    </OperatorPageWraper>
}

export default MtsPage