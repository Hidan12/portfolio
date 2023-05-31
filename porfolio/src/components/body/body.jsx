import './body.css'
import Tarjeta from "../../assets/tarjetas/tarjeta";
function Body() {
    let targ = {
      titulo: "Pet House",
      descripcion: "E-comerce realizado con: Node js, Mysql, Ejs, javaScript, css",
      link: "https://github.com/JuDroid/Grupo-7-PetHouse",
      gif: "PetHouse.gif"
    }
    return (
      <>
       <div className="body">
        <Tarjeta tarjetas={[targ]}/>
        <Tarjeta tarjetas={[targ]}/>
        <Tarjeta tarjetas={[targ]}/>
        <Tarjeta tarjetas={[targ]}/>
        <Tarjeta tarjetas={[targ]}/>
        <Tarjeta tarjetas={[targ]}/>
        <Tarjeta tarjetas={[targ]}/>        
        <h1>funciona</h1>

      </div> 
        
        
      </>
         
      
    );
  }
  
  export default Body;