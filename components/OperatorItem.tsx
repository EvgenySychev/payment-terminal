import Image from 'next/image';
import { StaticImageData } from 'next/image'

type OperatorItemPropsType = {
    title: string
    logo: StaticImageData
}

const OperatorItem = ({title,logo}: OperatorItemPropsType) => {
    return <>
        <Image alt="operator" src={logo} width={150} height={150}/>
        <p>
            {title}
        </p>
    </>
}

export default OperatorItem;