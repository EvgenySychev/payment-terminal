import Link from 'next/link'
import {StaticImageData} from 'next/image'
import OperatorItem from '../components/OperatorItem'
import logoMts from '../public/MTS.png';
import logoBeeline from '../public/beeline.png';
import logoMegafon from '../public/megafon.png';
import style from '../styles/homePage.module.css';
import TextHeader from '../components/styledComponents/TextHeader'


type OperatorItemType = {
    id: number
    title: string
    path: string
    logo: StaticImageData
}

const operatorsList: OperatorItemType[] = [
    {
        id: 1,
        title: 'МТС',
        path: 'mts',
        logo: logoMts
    },
    {
        id: 2,
        title: 'Билайн',
        path: 'beeline',
        logo: logoBeeline
    },
    {
        id: 3,
        title: 'Мегафон',
        path: 'megafon',
        logo: logoMegafon
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
                            <OperatorItem title={t.title} logo={t.logo}/>
                        </Link>
                    </div>
                )}
            </div>
        </>
    )
}

export default HomePage;