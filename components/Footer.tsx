import style from './Footer.module.css'

const Footer = () => {
    return <div className={style.footer}>
        <div className={style.description}>
            Терминал предназначен для тетсирования функционала оплаты сотовой связи
        </div>
    </div>
}

export default Footer;