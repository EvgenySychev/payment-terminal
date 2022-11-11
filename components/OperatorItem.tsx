import Image from 'next/image';

import { StaticImageData } from 'next/image'

import style from './OperatorItem.module.css'

type OperatorItemPropsType = {
    title: string
    logo: StaticImageData
}

const OperatorItem = ({title, logo}: OperatorItemPropsType) => {
    return <div className={style.OperatorItem}>
        <Image alt="operator" src={logo} width={150} height={150}/>
        <p>
            {title}
        </p>
    </div>
}

export default OperatorItem;