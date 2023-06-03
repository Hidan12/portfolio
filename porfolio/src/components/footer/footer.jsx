import "./footer.css"
import Typing from "../../assets/typing/typing"
import { useEffect, useState, useCallback } from "react"
import twiter from "../../img/social/icons8-twitter.svg"
import linkedin from "../../img/social/icons8-linkedin-250.svg"
import git from "../../img/social/icons8-github-256.svg"
import whatsapp from "../../img/social/icons8-whatsapp.svg"
import email from "../../img/social/2165061.png"
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
                
                <a href="https://twitter.com/hida1221"><img src={twiter} alt="twiter" style={{width:"38%", color:"black"}}/></a>
                <br/>
                <a href="https://www.linkedin.com/in/martin-vidan/"><img src={linkedin} alt="linkedin" style={{width:"38%"}}/></a>
                <br/>
                <a href="https://github.com/Hidan12"><img src={git} alt="git" style={{width:"40%"}}/></a>
                <a href="https://wa.me/3164317236" target="blank"><img src={whatsapp} alt="git" style={{width:"38%"}}/></a>
                <a href="mailto:marcarfe12@gmail.com"><img src={email} alt="git"/></a>
            </article>
        </section>
    )
}
export default Footer