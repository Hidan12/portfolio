import Conten from "./conten"
function Tarjeta({ tarjetas }){
    return(
        <>
        {tarjetas.map( info => <Conten info={info}/> )}
        </>
    )
}
export default Tarjeta