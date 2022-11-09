import Link from 'next/link'

import {useRouter} from "next/router";

import {useFormik} from "formik";

type FormikErrorType = {
    phoneNumber?: string
    amountMoney?: string
}

const PaymentTerminal = () => {

    const router = useRouter()

    const openResultPage = () => {
        // router.push('/payment-result/success')
        router.push('/payment-result/error')
    }

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
            openResultPage()
        }
    })

    return <>
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
                <button type="submit">Оплатить</button>
            </div>
        </form>
    </>
}

export default PaymentTerminal;