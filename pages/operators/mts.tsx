import PaymentTerminal from '../../components/PaymentTerminal'
import OperatorItem from '../../components/OperatorItem'
import logoMts from '../../public/MTS.png';

const MtsPage = () => {
    return <>
        <OperatorItem title="" logo={logoMts}/>
        <PaymentTerminal/>
    </>
}

export default MtsPage