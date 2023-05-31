import './body.css'
import Tarjeta from "../../assets/tarjetas/tarjeta";
function Body() {
    let targ = {
      titulo: "Pet House",
      descripcion: "E-comerce realizado con: Node js, Mysql, Ejs, javaScript, css",
      link: "https://github.com/JuDroid/Grupo-7-PetHouse",
      gif: "PetHouse.gif",
      colaboradores: [{nombre: "Amgela Ramirez", link: "https://github.com/angela1719"}, {nombre: "Mariana Montoya", link: "https://github.com/M21ariana"}]
    }
    return (
      <>
       <div className="body">
        <h2 style={{textAlign: 'center'}}>Proyectos</h2>
        <Tarjeta tarjetas={[targ]}/>
        <br />
        <br />
        <Tarjeta tarjetas={[targ]}/>
        <br />
        <br />
        <Tarjeta tarjetas={[targ]}/>
        <br />
        <br />
        <Tarjeta tarjetas={[targ]}/>
        <br />
        <br />
        <Tarjeta tarjetas={[targ]}/>
        <br />
        <br />
        <Tarjeta tarjetas={[targ]}/>
        <br />
        <br />
        <Tarjeta tarjetas={[targ]}/>
      </div> 
        
        
      </>
         
      
    );
  }
  
  export default Body;