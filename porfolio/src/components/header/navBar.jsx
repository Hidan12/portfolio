import './nav-bar.css'

function  NavBar({ clase }) {
  function smoothScroll(event) {
    event.preventDefault();
  
    const targetId = event.currentTarget.getAttribute('href');
    const targetElement = document.querySelector(targetId);
  
    if (targetElement) {
      const topOffset = (targetElement.getBoundingClientRect().top - 160) + window.pageYOffset;
  
      window.scrollTo({
        top: topOffset,
        behavior: 'smooth',
      });
    }
  }
    return(
      
        <div className={`header ${clase && "mostrar"}`} >
          <ul>
            <li><a href="#acercaDeMi" onClick={smoothScroll}>Acerca de mi</a></li>
            <li><a href="#proyecto" onClick={smoothScroll}>Proyectos</a></li>
            <li><a href="#Contacto" onClick={smoothScroll}>Contacto</a></li>
          </ul>
        </div>
      
                
          

    )
}
export default  NavBar