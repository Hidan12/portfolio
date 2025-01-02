import imgHeromp4 from "../../img/hero/hero.mp4"
import imgHerowebm from "../../img/hero/hero.webm"
export const Hero = ()=>{
    return(
        <div id="home" className="w-full h-[85vh] relative">
            <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                <source src={imgHeromp4}/>
                <source src={imgHerowebm}/>
            </video>
            <div className="absolute top-0 w-full h-full flex flex-col justify-center">
                <h1 className="text-white font-bold ms-[8vw] text-3xl">Crafting Innovative Web Solutions.</h1>
                <p className="text-white font-semibold ms-[8vw] text-2xl">Turning ideas into reality with clean, efficient code.</p>
            </div>
        </div>
    )
}