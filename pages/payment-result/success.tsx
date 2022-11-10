import {useRouter} from "next/router";
import Button from '../../components/styledComponents/Button'
import Display from '../../components/styledComponents/Display'
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
        <Display>
        <h2>
            Оплата совершена успешно!
        </h2>
        <p>
            перехожу на главную страницу...
        </p>
        </Display>
    </PaymentResultPage>
}

export default PaymentSuccsess;