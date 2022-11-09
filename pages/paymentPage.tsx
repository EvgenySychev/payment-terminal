import OperatorItem from '../components/OperatorItem'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

type PaymentPagePropsType = {
    key:number
    title:string
}

const PaymentPage = ({ key,title }: PaymentPagePropsType) => {

    return <>
    <OperatorItem key={key} title={'title'}/>
        <div>
            <PhoneInput
                country={'ru'}
                preferredCountries={['ru']}
                inputProps={{}}
            />
            <input type="text" name="" id=""/>
            <button>Оплатить</button>
        </div>
    </>
}

export default PaymentPage;