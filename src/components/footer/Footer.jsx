import { useEffect, useState } from "react";


const FormContact = ()=>{
    return(
        <form action="" className="flex flex-col gap-3 w-[75%]">
            <input className="rounded-md w-full" type="email" placeholder="Mail" id=""  required/>
            <input className="rounded-md w-full" type="text" placeholder="subject (Optional)" name="" id="" />
            <textarea className="rounded-md w-full" name="" placeholder="message (Optional)" id="">

            </textarea>
            <button className="text-white p-3 rounded-md bg-blue-600 hover:bg-blue-900">
                Send
            </button>
        </form>
    )
}

const MobileFooter = ()=>{
    return(
        <footer className="flex flex-col justify-center w-full bg-black bg-gradient-to-r from-[#434343] to-black">
            <div id="contact" className="flex justify-center items-center pt-4">
                <FormContact/>
            </div>
            <div>
                <div className="footer-bottom text-center py-5 text-[#ccc]">
                    2024 Designed by <a href="https://github.com/Hidan12" target="_blank" className="hover:text-blue-600">Martin Vidan</a>
                </div>
            </div>

        </footer>
    )
}

const Footer = () => {
    const [windowSize, setWindowSize] = useState({width: window.innerWidth})
        useEffect(() => {
            const handleResize = () => {
              setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
              });
            };
            window.addEventListener('resize', handleResize);
            handleResize();
        }, [])

        if (windowSize.width < 600) {
            return(
                <MobileFooter/>
            )
        }
    return (
      <footer className="flex flex-col bg-black bg-gradient-to-r from-[#434343] to-black">
        <div className="w-full grid grid-cols-3 pt-4">
            <div className="w-full flex flex-col  items-center">
            <h4 className="font-bold text-white p-4">Site Map</h4>
                <ul className="flex flex-col w-[50%]">
                    <li><button className="text-white">Home</button></li>
                    <li><button className="text-white">Proyects</button></li>
                    <li><button className="text-white">About Me</button></li>
                </ul>
            </div>
            <div id="contact" className="w-full flex flex-col items-center">
            <h4 className="font-bold text-white p-4">Contact</h4>
                <FormContact/>
            </div>
            <div className="w-full flex flex-col  items-center">
                <h4 className="font-bold text-white p-4">About Us</h4>
                <p className="text-white">
                    Martin Vidan is a Full Stack Developer from Córdoba, Argentina, now in Medellín. Passionate about creating innovative web solutions with a focus on both front-end and back-end development.
                </p>
            </div>
        </div>
        <div className="footer-bottom text-center py-5 text-[#ccc]">
        2024 Designed by <a href="https://github.com/Hidan12" target="_blank" className="hover:text-blue-600">Martin Vidan</a>
      </div>
      </footer>
    );
  };
  export { Footer };