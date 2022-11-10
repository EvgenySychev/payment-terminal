import PaymentTerminal from '../../components/PaymentTerminal'
import OperatorItem from '../../components/OperatorItem'
import logoMts from '../../public/MTS.png';

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

const MtsPage = ({responceApi}:any) => {
    return <>
        <OperatorItem title="" logo={logoMts}/>
        <PaymentTerminal responceApi={responceApi}/>
    </>
}

export default MtsPage