import PaymentTerminal from '../../components/PaymentTerminal'
import OperatorItem from '../../components/OperatorItem'
import logoBeeline from '../../public/beeline.png';

export const getServerSideProps = async () => {
    const responce = await fetch('http://localhost:3000/api/responce/')
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

const BeelainPage = ({responceApi}:any) => {

    console.log(responceApi)

    return <>
        <OperatorItem title="" logo={logoBeeline}/>
        <PaymentTerminal responceApi={responceApi}/>
    </>
}

export default BeelainPage