import PaymentTerminal from '../../components/PaymentTerminal'
import OperatorItemSmall from '../../components/OperatorItemSmall'
import logoMts from '../../public/MTS.ico';
import OperatorPageWraper from '../../components/styledComponents/OperatorPageWraper'

const MtsPage = () => {

    return <OperatorPageWraper >
        <OperatorItemSmall title="МТС" logo={logoMts}/>
        <PaymentTerminal/>
    </OperatorPageWraper>
}

export default MtsPage