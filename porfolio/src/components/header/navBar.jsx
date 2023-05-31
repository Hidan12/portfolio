
import logo from "../../logo1.png"
import './nav-bar.css'
function  NavBar({ clase }) {
    return(
      
        <div className={`header ${clase && "mostrar"}`} >
          <picture className="logo">
              <img src={logo} alt="" />
          </picture>
          <ul>
            <li onClick={true}>Portfolio</li>
            <li onClick={true}>Servicios</li>
            <li onClick={true}>Contacto</li>
          </ul>
        </div>
      
                
          

    )
}
export default  NavBar