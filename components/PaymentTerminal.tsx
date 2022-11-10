import Link from 'next/link'

import {useRouter} from "next/router";
// @ts-ignore
import InputMask from 'react-input-mask';
import {useFormik} from "formik";
import {ChangeEvent} from "react";
import {Data} from '../pages/api/responce'
import {useEffect, useState} from "react";
import style from './PaymentTerminal.module.css'
import Button from './styledComponents/Button'
import Form from './styledComponents/Form'
import Input from './styledComponents/Input'
import Span from './styledComponents/Span'

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

    const divPaymentTerminalForm = {
        paddingTop: "10px",
        paddingBottom: "10px",
    }

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

    return <div style={{
        height: "300px",
        width: "100%",
        minWidth: "200px"
    }}>
        <Form onSubmit={formik.handleSubmit}>
            <Span>Введите номер телефона</Span>
            <div style={divPaymentTerminalForm}>
                <InputMask
                    style={{
                        width: "200px",
                        minWidth: "196px",
                        padding: "0",
                        margin: "0",
                        height: "40px",
                        fontSize: "20px",
                        textAlign: "center"
                    }}
                    mask="+7(999)999-99-99" maskChar=" "
                    pattern={'^((8|\\+7)[\\- ]?)?\\(?([9]{1})\\(?([0-9]{2})\\)?[\\- ]?\\d{1}[\\- ]?\\d{1}[\\- ]?\\d{1}[\\- ]?\\d{1}[\\- ]?\\d{1}(([\\- ]?\\d{1})?[\\- ]?\\d{1})?$'}
                    placeholder="+7(900)123-45-67"
                    required
                    {...formik.getFieldProps("phoneNumber")}/>
            </div>
            <Span>
                {formik.touched.phoneNumber && formik.errors.phoneNumber ?
                    <Span
                        style={{color: 'darkred'}}>{formik.errors.phoneNumber}</Span> : null}
            </Span>
            <Span>Введите сумму</Span>
            <div style={divPaymentTerminalForm}>
                <Input
                    placeholder={'от 1 до 1000 рублей'}
                    maxLength={4}
                    minLength={1}
                    required
                    {...formik.getFieldProps("amountMoney")}/>
            </div>
            <Span>
                {formik.touched.amountMoney && formik.errors.amountMoney ?
                    <Span
                        style={{color: 'darkred'}}>{formik.errors.amountMoney}</Span> : null}
            </Span>
            <div style={divPaymentTerminalForm}>
                <Button title="Оплатить"/>
            </div>
        </Form>
    </div>
}

export default PaymentTerminal;