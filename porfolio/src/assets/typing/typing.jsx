import "./typing.css"
function Typing({ texto }){
    let tamPalabra = texto.length;
    let style = {}
    if (window.screen.width <= 500) {
        style = {
           width: tamPalabra * 1.5 + "rem",
           fontSize: "3rem" 
        }     
    }else{
        style = {
            width: tamPalabra * 2 + "rem",
            fontSize: "4rem" 
         }
    }
    

    return(
        <article className="typing_content">
            <span className="typing_h2" style={style}>{texto}</span>
        </article>
    )

}

export default Typing