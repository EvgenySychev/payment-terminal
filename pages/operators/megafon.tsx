import PaymentTerminal from '../../components/PaymentTerminal'
import OperatorItem from '../../components/OperatorItem'
import logoMegafon from '../../public/megafon.png';

const MegafonPage = () => {
    return <>
        <OperatorItem title="" logo={logoMegafon}/>
        <PaymentTerminal/>
    </>
}

export default MegafonPage