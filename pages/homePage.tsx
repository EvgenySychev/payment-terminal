import Link from 'next/link'
import OperatorItem from '../components/OperatorItem'

type Operator = {
    id: number
    title: string
}

const operatorsList: Array<Operator> = [
    {
        id: 1,
        title: 'МТС'
    },
    {
        id: 2,
        title: 'Билайн'
    },
    {
        id: 3,
        title: 'Мегафон'
    }
]

const HomePage = () => {

    return (
        <div>
            <h2>Выберете оператора</h2>
            {operatorsList.map(t => <Link href='/paymentPage'>
                <OperatorItem key={t.id} title={t.title}/>
            </Link>)}
        </div>
    )
}

export default HomePage;