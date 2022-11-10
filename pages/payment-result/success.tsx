import {useRouter} from "next/router";
import Button from '../../components/styledComponents/Button'

const PaymentSuccsess = () => {

    const router = useRouter()

    const onHomePageReturn = () => {
        router.push('/')
    }

    return <div>
        Оплата успешно совершена
        <Button title="На главную" onClick={onHomePageReturn}/>
    </div>
}

export default PaymentSuccsess;