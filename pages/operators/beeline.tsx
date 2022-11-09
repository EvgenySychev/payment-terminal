import PaymentTerminal from '../../components/PaymentTerminal'
import OperatorItem from '../../components/OperatorItem'
import logoBeeline from '../../public/beeline.png';

const BeelainPage = () => {
    return <>
        <OperatorItem title="" logo={logoBeeline}/>
        <PaymentTerminal/>
    </>
}

export default BeelainPage