import Link from 'next/link'

import { StaticImageData } from 'next/image'

import { useRouter } from "next/router";
import { useState } from "react";

import OperatorItem from '../components/OperatorItem'
// import logoMts from '../public/MTS.png';
// import logoBeeline from '../public/beeline.png';
// import logoMegafon from '../public/megafon.png';
import TextHeader from '../components/styledComponents/TextHeader'

import style from '../styles/homePage.module.css';


type OperatorItemType = {
    id: number
    title: string
    path: string
    logo?: StaticImageData
}

const operatorsList: OperatorItemType[] = [
    {
        id: 1,
        title: 'МТС',
        path: 'mts',

    },
    {
        id: 2,
        title: 'Билайн',
        path: 'beeline',

    },
    {
        id: 3,
        title: 'Мегафон',
        path: 'megafon',

    }
]
//
// const router = useRouter()
// const [data, setData] = useState(null);
//
// const fetchData = async () => {
//     try {
//         const req = await fetch(`${process.env.API_HOST}/response`);
//         const newData = await req.json();
//         console.log(newData.result) //оставил, чтобы можно было посмотреть какой ответ пришел с сервера
//
//         if (newData) {
//             setData(newData.results)
//             router.push(`/payment-result/${newData.result}`)
//             console.log(newData.result)
//         }
//     }
//     catch {
//         console.log('some error')
//     }
// };

const HomePage = () => {

    return (
        <>
            <TextHeader>Для оплаты выбирете оператора</TextHeader>
            <div className={style.body}>
                {operatorsList.map(t =>
                    <div key={t.id}>
                        <Link href={`operators/${t.path}`}>
                            <OperatorItem title={t.title} />
                        </Link>
                    </div>
                )}
            </div>
        </>
    )
}

export default HomePage;