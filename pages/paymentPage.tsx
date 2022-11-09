import OperatorItem from '../components/OperatorItem'
import { useFormik } from "formik";

type PaymentPagePropsType = {
    key: number
    title: string
}

type FormikErrorType = {
    phoneNumber?: string
    amountMoney?: string
}

const PaymentPage = ({key, title}: PaymentPagePropsType) => {

    const formik = useFormik({
        initialValues: {
            phoneNumber: '',
            amountMoney: '1000',
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.phoneNumber) {
                errors.phoneNumber = 'Обязательно';
            } else if (values.phoneNumber.length < 11) {
                errors.phoneNumber = 'Неверный формат номера';
            }

            if (!values.amountMoney) {
                errors.amountMoney = 'Обязательно';
            } else if (Number(values.amountMoney) < 1) {
                errors.amountMoney = 'Сумма может быть больше 0 ₽';
            } else if (Number(values.amountMoney) > 1000) {
                errors.amountMoney = 'Сумма не может быть больше 1000 ₽';
            }
            return errors;
        },
        onSubmit: values => {
            formik.resetForm()
            alert('оплачно')
        },
    })

    return <>
        <OperatorItem key={key} title={'title'}/>
        <div>
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <input
                        placeholder={'+7 (...) ... - .. - .. '}
                        {...formik.getFieldProps("phoneNumber")}
                    />
                </div>
                {formik.touched.phoneNumber && formik.errors.phoneNumber ?
                    <div style={{color: 'red'}}>{formik.errors.phoneNumber}</div> : null}
                <div>
                    <input
                        placeholder="Введите сумму"
                        {...formik.getFieldProps("amountMoney")}
                    />
                </div>
                {formik.touched.amountMoney && formik.errors.amountMoney ?
                    <div style={{color: 'red'}}>{formik.errors.amountMoney}</div> : null}
                <div>
                    <button>Оплатить</button>
                </div>
            </form>
        </div>
    </>
}

export default PaymentPage;