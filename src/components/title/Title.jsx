import { useEffect, useRef, useState } from "react"
import { useSelector } from "react-redux"
import { TypeAnimation } from "react-type-animation"

export const Title = ({text, color})=>{
    const { dark } = useSelector(store => store.reducerTheme)
    const titleRef = useRef(null)
    const [test, setTest] = useState(false)
    useEffect(() => {
        const observer = new IntersectionObserver(
          (entries) => {
            // Callback que se ejecuta cuando cambian las intersecciones
            const entry = entries[0];
            if (entry.isIntersecting) {
              setTest(true)
            }else{
              setTest(false)
            }
            
          },
          {
            root: null, // Observa el viewport del navegador
            rootMargin: '0px',
            threshold: 0.1 // Ejecuta el callback cuando al menos el 10% del elemento es visible
          }
        );
    
        const element = titleRef.current;
        if (element) {
          observer.observe(element);
        }
    
        // Limpia el observer cuando el componente se desmonta
        return () => {
          if (element) {
            observer.unobserve(element);
          }
        };
      }, []);
  
    return (
        <div ref={titleRef} className={`w-full mt-[11vh] p-6 flex justify-center ${dark ? "text-red-600": "text-black"}`}>
            {test ? <TypeAnimation sequence={[text]} speed={40} repeat={2} className={`font-bold text-3xl `} /> : ""}
        </div>
    )
}