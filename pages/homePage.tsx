
import OperatorItem from '../components/OperatorItem'

type Operator = {
    id: number
    title:string
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
            {operatorsList.map(t => <OperatorItem key={t.id} title={t.title}/>)}
        </div>
    )
}

export default HomePage;