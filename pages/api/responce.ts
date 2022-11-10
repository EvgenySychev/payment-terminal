import {responce} from './data/responce'
import type {NextApiRequest, NextApiResponse} from 'next'

export type Data = typeof getRandomResponce

const getRandomResponce = (responce: any) => {

    return responce[Math.floor(Math.random() * responce.length)];
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {

    if (req.method === 'GET') {
        res.status(200).json(getRandomResponce(responce))
    }
}
