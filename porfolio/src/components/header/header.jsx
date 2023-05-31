import { useEffect, useState } from "react";
import NavBar from './navBar';
import './header.css'
import gif from '../../img/I_want_to_make_a_background_video_for_a_web_portfolio_where_a_transition_from_day_to_night_is_made.gif'
function Header() {
   
  const [isVisible, setIsVisible] = useState(false);  
  let tam = window.screen.height * 0.6
    
    

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    
    const targetPosition = tam; // Punto específico en el que quieres que aparezca el elemento
    if (scrollPosition > targetPosition) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  

  return (
    <>
      <NavBar clase={isVisible}/>
      <img className='imgFondo' src={gif} alt='imagen'/>     
      </>
  );
}
  
export default Header;