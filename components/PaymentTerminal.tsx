import Link from 'next/link'

import {useRouter} from "next/router";
// @ts-ignore
import InputMask from 'react-input-mask';
import {useFormik} from "formik";
import {ChangeEvent} from "react";
import {Data} from '../pages/api/responce'
import {useEffect, useState} from "react";
import style from './PaymentTerminal.module.css'

type FormikErrorType = {
    phoneNumber?: string
    amountMoney?: string
}

type PaymentTerminalPropsType = {
    responceApi: { result: string }
}

const PaymentTerminal = ({responceApi}: PaymentTerminalPropsType) => {

    const router = useRouter()

    console.log(responceApi.result)

    const openResultPage = () => {
        router.push(`/payment-result/${responceApi.result}`)
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

    return <div className={style.PaymentTerminal}>
        <form onSubmit={formik.handleSubmit} className={style.PaymentTerminalForm}>
            <span>Введите номер телефона</span>
            <div>
                <InputMask mask="+7(999)999-99-99" maskChar=" "
                           pattern={'^((8|\\+7)[\\- ]?)?\\(?([9]{1})\\(?([0-9]{2})\\)?[\\- ]?\\d{1}[\\- ]?\\d{1}[\\- ]?\\d{1}[\\- ]?\\d{1}[\\- ]?\\d{1}(([\\- ]?\\d{1})?[\\- ]?\\d{1})?$'}
                           placeholder="+7(900)123-45-67"
                           required
                           {...formik.getFieldProps("phoneNumber")}/>
            </div>
            <span>
                {formik.touched.phoneNumber && formik.errors.phoneNumber ?
                    <span
                        style={{color: 'red'}}>{formik.errors.phoneNumber}</span> : null}
            </span>
            <span>Введите сумму</span>
            <div>
                <input
                    placeholder={'от 1 до 1000 рублей'}
                    maxLength={4}
                    minLength={1}
                    required
                    {...formik.getFieldProps("amountMoney")}/>
            </div>
            <span>
                {formik.touched.amountMoney && formik.errors.amountMoney ?
                    <span
                        style={{color: 'red'}}>{formik.errors.amountMoney}</span> : null}
            </span>
            <div>
                <button type="submit">Оплатить</button>
            </div>
        </form>
    </div>
}

export default PaymentTerminal;