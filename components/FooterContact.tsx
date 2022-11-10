import s from './FooterContacts.module.css'

export const FooterContacts = () => {

    return (
        <div style={{marginTop: "20px",fontSize: "13px", textAlign:"center"}}>
            Created by
            <b> Evgeny Sychev</b>
            <div className={s.socials}>
                <div>
                    <a href={'https://EvgenySychev.github.io/my-portfolio'} target="_blank">
                        <span>Portfolio</span>
                    </a>
                </div>
                <div>
                    <a href={'https://t.me/easychev'} target="_blank">
                        <span>Telegram</span>
                    </a>
                </div>
                <div>
                    <a href={'https://github.com/EvgenySychev/payment-terminal.git'} target="_blank">
                        <span>GitHub</span>
                    </a>
                </div>
            </div>

            
        </div>)
}