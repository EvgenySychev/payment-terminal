import { response } from './data/response'
import type { NextApiRequest, NextApiResponse } from 'next'

export type Data = {
    result: string
}

const getRandomResponce = (response: Data[]) => {

    return response[Math.floor(Math.random() * response.length)]; // здесь получаем рандомные данные
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {

    if (req.method === 'GET') {
        res.status(200).json(getRandomResponce(response))
    }
}
