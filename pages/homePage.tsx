import Link from 'next/link'
import OperatorItem from '../components/OperatorItem'

type Operator = {
    id: number
    title: string
    path: string
}

const operatorsList: Array<Operator> = [
    {
        id: 1,
        title: 'МТС',
        path: 'mts'
    },
    {
        id: 2,
        title: 'Билайн',
        path: 'beelain'
    },
    {
        id: 3,
        title: 'Мегафон',
        path: 'megafon'
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
                            <OperatorItem title={t.title}/>
                        </Link>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default HomePage;