import './body.css'
import Tarjeta from "../../assets/tarjetas/tarjeta";
import Typing from '../../assets/typing/typing';
import Iconos from '../logos/logo';
import { useCallback, useEffect, useState } from 'react';




function Body() {
  //datos a renderizar
  let targ = {
    titulo: "Pet House",
    descripcion: "E-comerce realizado con: Node js, Mysql, Ejs, javaScript, css",
    link: "https://github.com/JuDroid/Grupo-7-PetHouse",
    gif: "PetHouse.gif",
    colaboradores: [{nombre: "Angela Ramirez", link: "https://www.linkedin.com/in/angela-ramirez-montoya/"}, {nombre: "Mariana Montoya", link: "https://www.linkedin.com/in/mariana-montoyag/"}]
  };
  
  const [aboutVisible, setAboutVisible] = useState(false)
  const [tarjVisible, setTarjVisible] = useState(false);
  const [proyectoVisible, setProyectoVisible] = useState(false);

  const [navBarActivar, setnavBarActivar] = useState(0);
  const [aboutActivar, setAboutActivar] = useState(0)
  const [proyectoActivar, setproyectoActivar] = useState(0);  
  const [tarjActivar, setTarjActivar] = useState(0);
    
  const navBarScroll = useCallback( () => {
    const scrollPosition = window.scrollY;

    const targetPosition = navBarActivar; // Punto específico en el que quieres que aparezca el elemento  
    
    if (scrollPosition > targetPosition) {
      setnavBarActivar(true);

    } else {
      setnavBarActivar(false);
    }
  }, [navBarActivar]);


  const aboutScroll = useCallback(() => {
    const scrollPosition = window.scrollY;

    const targetPosition = aboutActivar; // Punto específico en el que quieres que aparezca el elemento  
    
    if (scrollPosition > targetPosition) {
      setAboutVisible(true);

    } else {
      setAboutVisible(false);
    }
  }, [aboutActivar]);

  const proyectoScroll = useCallback(() => {
    const scrollPosition = window.scrollY;

    const targetPosition = proyectoActivar; // Punto específico en el que quieres que aparezca el elemento  
    
    if (scrollPosition > targetPosition) {
      setProyectoVisible(true);

    } else {
      setProyectoVisible(false);
    }
  }, [proyectoActivar]);


  const tarjScroll = useCallback(() => {
    const scrollPosition = window.scrollY;

    const targetPosition = tarjActivar; // Punto específico en el que quieres que aparezca el elemento  
    
    if (scrollPosition > targetPosition) {
      setTarjVisible(true);

    } else {
      setTarjVisible(false);
    }
  }, [tarjActivar]);


  
  useEffect(() => {
    
    setnavBarActivar(document.getElementById("header").getBoundingClientRect().bottom)
    setAboutActivar(document.getElementById("header").getBoundingClientRect().bottom / 2.8)
    setproyectoActivar(document.getElementById("acercaDeMi").getBoundingClientRect().bottom / 1) 
    setTarjActivar(document.getElementById("acercaDeMi").getBoundingClientRect().bottom + 150)
    
    window.addEventListener('scroll', navBarScroll);
    window.addEventListener("scroll", aboutScroll)
    window.addEventListener('scroll', proyectoScroll);
    window.addEventListener("scroll", tarjScroll)
    
    
  },[navBarScroll, proyectoScroll, aboutScroll, tarjScroll]);

    
    
    
    return (
      <>
       <div className="body" id='body'>
            <section id='acercaDeMi'>
              <article className='titulo'>
                {aboutVisible && <Typing texto={"acerca de mi"}/>}
              </article>
              <article className={`acercaDeMiconten ${aboutVisible && "mover"}`}>
                <article className='acercaDeMiNombre'>
                  <h3>Hola soy Martin Vidan</h3>
                  <div>
                    <Iconos />
                  </div>
                </article>
                <p className='acercaDeMiTexto'>Soy un desarrollador Full Stack apasionado por la creación de soluciones web. Con experiencia en React, JavaScript, HTML, CSS y Sequelize, busco constantemente aprender nuevas tecnologías. Además, tengo conocimientos básicos en C y Python. Fuera del desarrollo web, soy un entusiasta del anime y los videojuegos. Estoy disponible para oportunidades emocionantes y proyectos desafiantes.</p>
              </article>
            </section>
        <section id='proyecto'>
          <article className='titulo'>
            {proyectoVisible && <Typing texto={"Proyectos"}/>}  
          </article>        

          <div className={`tarj ${tarjVisible && "mover"}`}>
            <Tarjeta tarjetas={[targ]}/>
            <br />
            <br />
          </div>
        </section>
        
      </div> 
        
        
      </>
         
      
    );
  }
  
  export default Body;