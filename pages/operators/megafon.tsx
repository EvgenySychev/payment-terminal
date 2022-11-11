import PaymentTerminal from '../../components/PaymentTerminal'
import OperatorItemSmall from '../../components/OperatorItemSmall'
import logoMegafon from '../../public/megafon.ico';
import OperatorPageWraper from '../../components/styledComponents/OperatorPageWraper'

const MegafonPage = () => {

    return <OperatorPageWraper>
        <OperatorItemSmall title="Мегафон" logo={logoMegafon}/>
        <PaymentTerminal/>
    </OperatorPageWraper>
}

export default MegafonPage