import Image from 'next/image';

import { StaticImageData } from 'next/image'

import style from './OperatorItemSmall.module.css'

type OperatorItemPropsType = {
    title: string
    logo?: StaticImageData
}

const OperatorItemSmall = ({title, logo}: OperatorItemPropsType) => {
    return <div className={style.OperatorItem}>
        <p>
            {title}
        </p>
    </div>
}

export default OperatorItemSmall;