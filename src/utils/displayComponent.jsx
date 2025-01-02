import { useEffect } from "react";

export const displayComponent = (ref, func) => {
     useEffect(() => {
            const observer = new IntersectionObserver(
              (entries) => {
                // Callback que se ejecuta cuando cambian las intersecciones
                const entry = entries[0];
                if (entry.isIntersecting) {
                  func(true)
                }else{
                  func(false)
                }
                
              },
              {
                root: null, // Observa el viewport del navegador
                rootMargin: '0px',
                threshold: 0.1 // Ejecuta el callback cuando al menos el 10% del elemento es visible
              }
            );
        
            const element = ref.current;
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
}