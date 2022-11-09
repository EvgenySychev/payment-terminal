import Link from 'next/link'
import OperatorItem from '../components/OperatorItem'

import logoMts from '../public/MTS.jpg';
import logoBeeline from '../public/beeline.jpg';
import logoMegafon from '../public/megafon.jpg';

type Operator = {
    id: number
    title: string
    path: string
    logo:string
}

const operatorsList: Array<Operator> = [
    {
        id: 1,
        title: 'МТС',
        path: 'mts',
        logo:logoMts
    },
    {
        id: 2,
        title: 'Билайн',
        path: 'beeline',
        logo:logoBeeline
    },
    {
        id: 3,
        title: 'Мегафон',
        path: 'megafon',
        logo:logoMegafon
    }
]

const HomePage = () => {

    return (
        <div>
            <h2>Выберете оператора</h2>
            <ul>
                {operatorsList.map(t =>
                    <li key={t.id}>
                        <Link href={`operators/${t.path}`}>
                            <OperatorItem title={t.title} logo={t.logo}/>
                        </Link>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default HomePage;