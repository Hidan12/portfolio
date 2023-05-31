import "./contents.css"

function Conten({ info }){
    return(
        <>
            <div className="tarjeta">
                <div className="informacion">
                    <h3>{info.titulo}</h3>
                    <p>{info.descripcion}</p>
                    <a href={info.link}>{info.titulo}</a>
                </div>
                <picture className="gif">
                    <img src={require(`../../img/GIF/${info.gif}`)} alt={info.titulo}/>
                </picture>
                
            </div>
            
        </>
    )
}
export default Conten