import logoReact from "../../img/icon_tec/react.svg"
import logoSequalize from "../../img/icon_tec/sequelize-svgrepo-com.svg"
import logoMySQL from "../../img/icon_tec/mysql.svg"
import logoCSS from "../../img/icon_tec/css.svg"
import logoJS from "../../img/icon_tec/javascript.svg"
import logoNode from "../../img/icon_tec/nodejs.svg"
import logoHTML from "../../img/icon_tec/html.svg"
import logoBoostrap from "../../img/icon_tec/bootstrap.svg"
import "./logo.css"
function Iconos(){
    return (
        <section className="Iconos">
            <img src={logoReact} alt="logoReact" />
            <img src={logoSequalize} alt="logoSequalize" />
            <img src={logoMySQL} alt="logoMYSQL" />
            <img src={logoCSS} alt="logoCSS" />
            <img src={logoJS} alt="logoJS" />
            <img src={logoNode} alt="logoNode" />
            <img src={logoHTML} alt="logoHTML" />
            <img src={logoBoostrap} alt="logoBoostrap" />
        </section>
    )
}
export default Iconos;