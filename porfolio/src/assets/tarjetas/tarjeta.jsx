import Conten from "./conten"
function Tarjeta({ tarjetas }){
    return(
        <>
        {tarjetas.map( (info, index) => <Conten info={info} key={index}/> )}
        </>
    )
}
export default Tarjeta