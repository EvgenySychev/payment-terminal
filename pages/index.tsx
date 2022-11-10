import Head from 'next/head'
import HomePage from './homePage'

const Home = () => {

    return <>
        <Head>
            <title>Платежный терминал</title>
            <meta name="title" content="Платежный терминал"/>
        </Head>
        <HomePage/>
    </>
}

export default Home;