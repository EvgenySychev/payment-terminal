import {useRouter} from "next/router";
import Button from '../../components/styledComponents/Button'
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
    </PaymentResultPage>
}

export default PaymentError;