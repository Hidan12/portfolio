import "./contents.css"

function Conten({ info }){
    return(
        <>
            <div className="tarjeta" >
                <div className="informacion">
                    <h3>{info.titulo}</h3>
                    <h4>Tecnologias usadas</h4>
                    <p>{info.descripcion}</p>
                    <h4>Link del proyecto</h4>
                    <a href={info.link}>{info.titulo}</a>
                    <h4>colaboradores:</h4>
                    <section className="colaboradores">
                        {info.colaboradores.map((colaborador, index )=> {
                            return(
                                <a href={colaborador.link} key={index}>{colaborador.nombre}</a>
                            )
                        })}
                    </section>
                    
                </div>
                <picture className="gif">
                    <img src={require(`../../img/GIF/${info.gif}`)} alt={info.titulo}/>
                </picture>
                
            </div>
            
        </>
    )
}
export default Conten