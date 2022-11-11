import { useEffect } from "react";
import { useRouter } from "next/router";

const Error = () => {
    const router = useRouter()

    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 3000)
    }, [router])

    return <>
        <h1>404</h1>
        <h3>Кажется у нас ещё нет такой страницы...</h3>
    </>
}

export default Error;