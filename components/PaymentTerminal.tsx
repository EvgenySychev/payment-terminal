import Link from 'next/link'

import {useRouter} from "next/router";
import InputMask from 'react-input-mask';
import {useFormik} from "formik";
import {ChangeEvent} from "react";

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
            amountMoney: '',
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.phoneNumber) {
                errors.phoneNumber = 'Введите номер телефона';
            } else if (values.phoneNumber.length < 11) {
                errors.phoneNumber = 'Неверный формат номера';
            }

            if (!values.amountMoney) {
                errors.amountMoney = 'Введите номер сумму';
            } else if (Number(values.amountMoney) < 1) {
                errors.amountMoney = 'Сумма должна быть больше 0 ₽';
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
                <InputMask mask="+7(999)999-99-99" maskChar=" "
                           pattern={'^((8|\\+7)[\\- ]?)?\\(?([9]{1})\\(?([0-9]{2})\\)?[\\- ]?\\d{1}[\\- ]?\\d{1}[\\- ]?\\d{1}[\\- ]?\\d{1}[\\- ]?\\d{1}(([\\- ]?\\d{1})?[\\- ]?\\d{1})?$'}
                           placeholder="+7(900)123-45-67"
                           required
                           {...formik.getFieldProps("phoneNumber")}/>
            </div>
            {formik.touched.phoneNumber && formik.errors.phoneNumber ?
                <div style={{color: 'red'}}>{formik.errors.phoneNumber}</div> : null}
            <div>
                <input
                    placeholder={'от 1 до 1000 рублей'}
                    maxLength={4}
                    minLength={1}
                    required
                    {...formik.getFieldProps("amountMoney")}/>
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