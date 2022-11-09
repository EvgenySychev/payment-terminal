import {useRouter} from "next/router";
import HomePageReturnButton from '../../components/HomePageReturnButton'

const PaymentError = () => {

    const router = useRouter()
    console.log(router)

    const onHomePageReturn = () => {
        router.push('/')
    }

    const onPageTerminalReturn = () => {
        router.back()
    }
    
  return <div>
      Ой!.. оплата не удалась, попробуйте ещё раз
      <HomePageReturnButton/>
      <button onClick={onPageTerminalReturn}>Попробовать ещё раз</button>
  </div>
}

export default PaymentError;