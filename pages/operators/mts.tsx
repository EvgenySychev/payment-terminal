import PaymentTerminal from '../../components/PaymentTerminal'
import OperatorItemSmall from '../../components/OperatorItemSmall'
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

const MtsPage = ({responceApi}: any) => {
    return <div style={{
        height: "500px",
        width: "30%",
        minWidth: "250px",
        borderRadius: "10px",
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    }}>
        <OperatorItemSmall title="МТС" logo={logoMts}/>
        <PaymentTerminal responceApi={responceApi}/>
    </div>
}

export default MtsPage