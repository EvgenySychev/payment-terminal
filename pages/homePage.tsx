import Link from 'next/link'

import { StaticImageData } from 'next/image'

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