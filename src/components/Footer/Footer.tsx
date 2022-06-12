import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'

const Footer = ()=>{
    return(
        <>
            <div className="container text-gray-500 flex flex-col gap-10 pb-5 px-4">
                <div className="flex gap-12 mt-12">
                    <a href="/"><FontAwesomeIcon icon={faFacebook}  size="2x"  /></a>
                    <a href="/"><FontAwesomeIcon icon={faInstagram}  size="2x"  /></a>
                    <a href="/"><FontAwesomeIcon icon={faTwitter}  size="2x"  /></a>
                    <a href="/"><FontAwesomeIcon icon={faYoutube}  size="2x"  /></a>
                </div>
                <div className="grid grid-cols-4 leading-8">
                    <div>
                        <div><a href="/">Idiomas e legendas</a></div>
                        <div><a href="/">impresa</a></div>
                        <div><a href="/">Privacidade</a></div>
                        <div><a href="/">Entre em contato</a></div>
                    </div>
                    <div>
                        <div><a href="/">Audiodescrição</a></div>
                        <div><a href="/">Relação com investidores</a></div>
                        <div><a href="/">Avisos legais</a></div>
                    </div>
                    <div>
                        <div><a href="/">Centro de ajuda</a></div>
                        <div><a href="/">Carreiras</a></div>
                        <div><a href="/">Preferencias de cookies</a></div>
                    </div>
                    <div>
                        <div><a href="/">Cartão pré-pago</a></div>
                        <div><a href="/">Termos de uso</a></div>
                        <div><a href="/">Informações corporativas</a></div>
                    </div>
                </div>
                &copy;1997-2018 imagiflix, inc
            </div>
        </>
    )
}

export default Footer