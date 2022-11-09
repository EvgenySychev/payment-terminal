import Image from 'next/image';

type OperatorItemPropsType = {
    title: string
    logo:string
}

const OperatorItem = ({title,logo}: OperatorItemPropsType) => {
    return <>
        <div>
            {title}
        </div>
        <Image alt="operator" src={logo}/>
    </>
}

export default OperatorItem;