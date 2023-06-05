import "./footer.css"
import Typing from "../../assets/typing/typing"
import { useEffect, useState, useCallback } from "react"
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';
function Footer (){
    const [contactoVisible, setContactoVisible] = useState(false);
    const [contactoActivar, setContactoActivar] = useState(0);

    
    const contactoScroll = useCallback( () => {
        const scrollPosition = window.scrollY;
    
        const targetPosition = contactoActivar; // Punto específico en el que quieres que aparezca el elemento  
        
        if (scrollPosition > targetPosition) {
          setContactoVisible(true);
    
        } else {
          setContactoVisible(false);
        }
      }, [contactoActivar]);
    
    useEffect(()=>{
        setContactoActivar(document.getElementById("proyecto").getBoundingClientRect().bottom -150);
        window.addEventListener("scroll", contactoScroll)

    },[contactoScroll])
    return(
        <section id="Contacto" className={`Contacto ${contactoActivar && "animar"}`}>
            
            <article className="titulo">
                {contactoVisible && <Typing texto={"Contacto"}/>}
            </article>
            <h3 className="red">Redes sociales</h3>
            <article className={`contactoConten ${contactoActivar && "contactoMostrar"}`}>
                
                <a href="https://twitter.com/hida1221"><TwitterIcon sx={{ fontSize: 70, color: "black" }}/></a>
                <br/>
                <a href="https://www.linkedin.com/in/martin-vidan/"><LinkedInIcon sx={{ fontSize: 70, color: "black" }}/></a>
                <br/>
                <a href="https://github.com/Hidan12"><GitHubIcon sx={{ fontSize: 70, color: "black" }}/></a>
                <a href="https://wa.me/3164317236" target="blank"><WhatsAppIcon sx={{ fontSize: 70, color: "black" }}/></a>
                <a href="mailto:marcarfe12@gmail.com"><ForwardToInboxIcon sx={{ fontSize: 70, color: "black" }} /></a>
            </article>
        </section>
    )
}
export default Footer