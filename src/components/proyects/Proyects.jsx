import { useSelector } from "react-redux"
import { Title } from "../title/Title"
import { useRef, useState } from "react"
import "./proyects.css"
import { displayComponent } from "../../utils/displayComponent"




const CardProyect = ({info})=>{
    const { dark } = useSelector(store => store.reducerTheme)
    return(
        <div className={`w-full mt-4 p-4 grid grid-cols-1 md:grid-cols-2 items-center rounded-lg shadow-md mx-auto group ${dark ? 'bg-gray-800 text-white border border-gray-700' : 'bg-white text-black border border-gray-200'}`}>
            <div className="w-full flex flex-col items-center gap-y-4">
                <h3 className="font-semibold text-2xl">{info.title}</h3>
                <ul className="list-none p-0 ">
                    <li className="text-lg mb-2"><strong>Description: </strong>{info.description}</li>
                    <li className="text-lg mb-2 mt-3"><strong>Tecnology: </strong> {info.tecnology}</li>
                    <li className="text-lg mb-2"><strong>Repository: </strong> <a href={info.Repository} target="_blank">{info.title}</a></li>
                    {info.produccion ? <li className="text-lg mb-2"><strong>Page: </strong> <a href={info.produccion} target="_blank">{info.title}</a></li>:""}
                    {info.collaborators ? <li><strong>Collaborators: </strong>{info.collaborators.map((col, index)=> <a className="mx-2 hover:text-blue-600" target="_blank" key={index+col.name} href={col.link}>{col.name}</a>)}</li> :""}
                </ul>
            </div>
            <div className="w-full flex items-center justify-center">
                <div className="w-[70%] transform-custom group-hover:animate-center">
                    <video autoPlay loop muted playsInline>
                        <source src={`/proyects/${info.gif}.mp4`} />
                        <source src={`/proyects/${info.gif}.webm`} />
                    </video>
                </div>
            </div>
        </div>
    )
}


export const Proyects = ()=>{
    const [view, setViewProyect] = useState(false)
    const proyectRef = useRef(null)
    displayComponent(proyectRef, setViewProyect)
    let targ = [
        {
            title: "Valorant Character",
            description: "This project allows users to explore Valorant champions. Users can select up to 5 champions, which are saved in localStorage. Each champion is displayed in a card, and hovering over the card reveals a button. Clicking the button opens a modal with the champion’s description, photo, and skill images. Clicking on a skill shows more detailed information about it.",
            tecnology: "React, Redux, Tailwind, LocalStorage",
            gif: "ValorantCharacters",
            Repository: "https://github.com/Hidan12/valorantCharacters",
            produccion: "https://hidan12.github.io/valorantCharacters/"
        }
        ,{
            title: "Pet House",
            description: "E-comerce realizado con: Node js, Mysql, Ejs, javaScript, css",
            tecnology: "Node js, Mysql, Ejs, javaScript, css",
            Repository: "https://github.com/JuDroid/Grupo-7-PetHouse",
            gif: "PetHouse",
            collaborators: [{name: "Angela Ramirez", link: "https://www.linkedin.com/in/angela-ramirez-montoya/"}, {name: "Mariana Montoya", link: "https://www.linkedin.com/in/mariana-montoyag/"}]
      }]
      
    return(
        <div id="proyects" ref={proyectRef} className="w-full mt-8 mb-8 flex flex-col items-center">
            <Title text={"Proyects"} />
            <div className={`${view ? "animate-moveleft" : ""}`}>
                {targ.map((i, index) => <CardProyect key={index+i.title} info={i}/>)}
            </div>
        </div>
    )
}