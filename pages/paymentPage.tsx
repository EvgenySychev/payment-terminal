import OperatorItem from '../components/OperatorItem'
import PhoneInput from 'react-phone-input-2'
import CurrencyInput from 'react-currency-input-field'
import 'react-phone-input-2/lib/style.css'

type PaymentPagePropsType = {
    key: number
    title: string
}

const PaymentPage = ({key, title}: PaymentPagePropsType) => {

    return <>
        <OperatorItem key={key} title={'title'}/>
        <div>
            <div>
                <PhoneInput
                    country={'ru'}
                    preferredCountries={['ru']}
                    inputProps={{}}
                />
            </div>
            <div>
                <CurrencyInput
                    placeholder="Введите сумму"
                    defaultValue={1000}
                    decimalsLimit={2}
                    prefix={'₽ '}
                />
            </div>
            <div>
                <button>Оплатить</button>
            </div>
        </div>
    </>
}

export default PaymentPage;