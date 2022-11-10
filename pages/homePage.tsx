import Link from 'next/link'
import {StaticImageData} from 'next/image'
import OperatorItem from '../components/OperatorItem'
import logoMts from '../public/MTS.png';
import logoBeeline from '../public/beeline.png';
import logoMegafon from '../public/megafon.png';
import Flex from '../components/Flex'
import style from '../styles/homePage.module.css'


type OperatorItemType = {
    id: number
    title: string
    path: string
    logo: StaticImageData
}

const operatorsList: Array<OperatorItemType> = [
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
            <h4 style={{textAlign: "center", height: "80px", fontSize: "30px"}}>Для оплаты
                выбирете оператора</h4>
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