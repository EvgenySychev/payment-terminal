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
    
  return <div>
      Ой!.. оплата не удалась, попробуйте ещё раз
      <Button title="На главную" onClick={onHomePageReturn}/>
      <Button title="Попробовать ещё раз" onClick={onTerminalPageReturn}/>
  </div>
}

export default PaymentError;