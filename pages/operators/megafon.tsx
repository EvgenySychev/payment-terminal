import PaymentTerminal from '../../components/PaymentTerminal'
import OperatorItemSmall from '../../components/OperatorItemSmall'
//import logoMegafon from '../../public/megafon.png';
import OperatorPageWraper from '../../components/styledComponents/OperatorPageWraper'

const MegafonPage = () => {

    return <OperatorPageWraper>
        <OperatorItemSmall title="Мегафон" />
        <PaymentTerminal/>
    </OperatorPageWraper>
}

export default MegafonPage