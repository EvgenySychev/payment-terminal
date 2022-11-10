import {useRouter} from "next/router";
import Button from '../../components/styledComponents/Button'
import {useEffect} from "react";
import PaymentResultPage from '../../components/styledComponents/PaymentResultPage'


const PaymentSuccsess = () => {

    const router = useRouter()

    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 3000)
    }, [router])

    return <PaymentResultPage>
        <h2>
            Оплата совершена успешно!
        </h2>
        <p>
            перехожу на главную страницу...
        </p>
    </PaymentResultPage>
}

export default PaymentSuccsess;