import Image from 'next/image';

type OperatorItemPropsType = {
    title: string
    logo:string
}

const OperatorItem = ({title,logo}: OperatorItemPropsType) => {
    return <>
        <Image alt="operator" src={logo}/>
        <p>
            {title}
        </p>
    </>
}

export default OperatorItem;