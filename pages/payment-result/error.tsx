import {useRouter} from "next/router";
import Button from '../../components/Button'

const PaymentError = () => {

    const router = useRouter()

    const onHomePageReturn = () => {
        router.push('/')
    }

    const onTerminalPageReturn = () => {
        router.back()
    }

    return <div style={{
        height: "400px",
        width: "50%",
        minWidth: "250px",
        borderRadius: "10px",
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    }}>
        <h2>
            Ой!..
        </h2>
        <p>
            оплата не удалась, попробуйте ещё раз
        </p>
        <div>
            <Button title="На главную" onClick={onHomePageReturn}/>
            <Button title="Попробовать ещё раз" onClick={onTerminalPageReturn}/>
        </div>
    </div>
}

export default PaymentError;