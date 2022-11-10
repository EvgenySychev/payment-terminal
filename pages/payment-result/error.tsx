import {useRouter} from "next/router";
import Button from '../../components/styledComponents/Button'
import Display from '../../components/styledComponents/Display'
import PaymentResultPage from '../../components/styledComponents/PaymentResultPage'

const PaymentError = () => {

    const router = useRouter()

    const onHomePageReturn = () => {
        router.push('/')
    }

    const onTerminalPageReturn = () => {
        router.back()
    }

    return <PaymentResultPage>
        <Display>
            <h2>
                Ой!..
            </h2>
            <p>
                оплата не удалась, попробуйте ещё раз
            </p>
        </Display>
        <div style={{display: "flex",
            flexDirection: "column"}}>
            <Button title="На главную" onClick={onHomePageReturn}/>
            <Button title="Попробовать ещё раз" onClick={onTerminalPageReturn}/>
        </div>
    </PaymentResultPage>
}

export default PaymentError;