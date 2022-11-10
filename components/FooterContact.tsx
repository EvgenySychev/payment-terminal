import s from './FooterContacts.module.css'

export const FooterContacts = () => {

    return (
        <div style={{marginTop: "30px",fontSize: "13px", textAlign:"center"}}>
            Created by
            <b> Evgeny Sychev</b>
            <div className={s.socials}>
                <div>
                    <a href={'https://EvgenySychev.github.io/my-portfolio'}>
                        <span>Portfolio</span>
                    </a>
                </div>
                <div>
                    <a href={'https://t.me/easychev'}>
                        <span>Telegram</span>
                    </a>
                </div>
                <div>
                    <a href={'https://github.com/EvgenySychev/payment-terminal.git'}>
                        <span>GitHub</span>
                    </a>
                </div>
            </div>

            
        </div>)
}