import PaymentTerminal from '../../components/PaymentTerminal'
import OperatorItem from '../../components/OperatorItem'
import logoMegafon from '../../public/megafon.png';

export const getServerSideProps = async () => {
    const responce = await fetch(`${process.env.API_HOST}/responce`)
    const data = await responce.json()

    if (!data) {
        return {
            notFound: true
        }
    }

    return {
        props: {responceApi: data},
    }
}

const MegafonPage = ({responceApi}:any) => {
    return <>
        <OperatorItem title="" logo={logoMegafon}/>
        <PaymentTerminal responceApi={responceApi}/>
    </>
}

export default MegafonPage