import OperatorItem from '../components/OperatorItem'

type PaymentPagePropsType = {
    key:number
    title:string
}

const PaymentPage = ({ key,title }: PaymentPagePropsType) => {

    return <>
    <OperatorItem key={key} title={'title'}/>
        <div>
            <input type="text" name="" id=""/>
            <input type="text" name="" id=""/>
            <button>Оплатить</button>
        </div>
    </>
}

export default PaymentPage;