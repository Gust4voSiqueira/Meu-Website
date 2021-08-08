import { Button } from '../../components/Button/Button'
import './contact.css'

import LinkedinIcon from '../../Assets/linkedin-icon.png'
import MailIcon from '../../Assets/gmail-icon.png'
import GithubIcon from '../../Assets/github-icon.png'
import InstagramIcon from '../../Assets/instagram-icon.png'
import WhatsappIcon from '../../Assets/whatsapp-icon.png'

export function Contact() {
    return (
        <div id="contact-container">
            <h1>Contato</h1>
            <span id='message-contact'>Se você deseja bater um papo comigo, não hesite em entrar em contato.</span>

            <span id='email'><img src={MailIcon} alt="" /> gustavosiqueira082@gmail.com</span>
            <div id='contact-cards'>
                <a href="https://www.linkedin.com/in/gustavo-siqueira00/"><Button image={LinkedinIcon} title='Linkedin' /></a>
                <a href="https://github.com/Gust4voSiqueira"><Button image={GithubIcon} title='Github' /></a>
                <a href="https://www.instagram.com/gustavo_siqueira3/"><Button image={InstagramIcon} title='Instagram' /></a>
                <a href="https://api.whatsapp.com/send?1=pt_BR&phone=+556182687061"><Button image={WhatsappIcon} title='Whatsapp' /></a>
            </div>
        </div>
    )
}