import {useRouter} from "next/router";

const HomePageReturnButton = () => {

    const router = useRouter()

    const onHomePageReturn = () => {
        router.push('/')
    }
    
    return <button onClick={onHomePageReturn}>На главную</button>
}

export default HomePageReturnButton;