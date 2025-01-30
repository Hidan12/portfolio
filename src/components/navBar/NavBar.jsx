import { useDispatch, useSelector } from "react-redux"
import "./navBar.css"
import { setTheme } from "../../store/action/themeAction"
import { useEffect, useState } from "react"

const MenuBurguer = ({closedMenu, navScroll})=>{
    return(
        <div className="fixed top-0 left-0 flex flex-col w-[40vw] sm:w-[30vw] h-full bg-blue-800 animate-moveleft">
            <div className="w-full flex justify-end">
                <button onClick={()=>closedMenu()} className="font-bold text-2xl text-white">X</button>
            </div>
            <div className="w-full h-[60%] flex flex-col justify-around">
                <div className="flex justify-center items-center">
                    <button onClick={()=> {navScroll("home"), closedMenu()}} className="text-white">Home</button>
                </div>
                <div className="flex justify-center items-center">
                    <button onClick={()=>{navScroll("proyects"), closedMenu()}} className="text-white">Projects</button>
                </div>
                <div className="flex justify-center items-center">
                    <button onClick={()=>{navScroll("contact"), closedMenu()}}  className="text-white">Contact</button>
                </div>
                <div className="flex justify-center items-center">
                    <button onClick={()=>{navScroll("about"), closedMenu()}} className="text-white">About Me</button>
                </div>
            </div>
        </div>
    )
}

const SelectThema = ()=>{
    const {dark} = useSelector(state => state.reducerTheme)
    const dispatch = useDispatch()
    
    return(
        <button onClick={()=>dispatch(setTheme())} className="group flex items-center  justify-center w-10  md:w-[8vw] lg:w-[6vw] text-white rounded-md z-50">
            <div className="overflow-hidden w-[7vw] h-[7vw] sm:w-[5vw] sm:h-[5vw] md:w-[3vw] md:h-[3vw] lg:w-[3vw] lg:h-[3vw] rounded-full transition-transform duration-300 relative">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className={` p-2 bi bi-moon-stars-fill w-full h-full text-white bg-black absolute transition-transform duration-300 ${dark ? "translate-y-0" : "-translate-y-full"}`}
                    viewBox="0 0 16 16"
                >
                    <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278" />
                    <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.73 1.73 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.73 1.73 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.73 1.73 0 0 0 1.097-1.097zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z" />
                </svg>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className={`p-2 bi bi-sun-fill text-yellow-400 w-full h-full bg-white absolute transition-transform duration-300 ${dark ? "translate-y-full" : "translate-y-0"}`}
                    viewBox="0 0 16 16"
                >
                    <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708" />
                </svg>
            </div>
        </button>
    )
}

const NavBarMobile = ({navScroll})=>{
    const [openMenu, setOpenMenu] = useState(false)
    const menuState = ()=>{
        setOpenMenu(o => o = !o)
    }
    return(
        <header className="w-full h-[10vh] grid grid-cols-3 justify-items-center items-center bg-[#492153] sticky top-0 z-30">
            {openMenu ? <MenuBurguer closedMenu={menuState} navScroll={navScroll}/>:null}
            <div className="w-full">
                <button onClick={()=> menuState()} className="w-8 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                    </svg>
                </button>
            </div>
            <div className="flex items-center">
                <h2 className="font-bold text-white">Martin Vidan</h2>
            </div>
            <div className="w-full flex justify-end items-center">
                <SelectThema/>
            </div>
        </header>
    )
}

export const NavBar = ({navScroll})=>{
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

    if (windowSize.width < 762) {
        return(
            <NavBarMobile navScroll={navScroll}/>
        )
    }
    return(
        <header className="w-full h-[10vh] grid grid-cols-3 justify-items-center items-center bg-[#492153] sticky top-0 z-30">
            <div className="w-full">
                <h3 className="ms-3 font-semibold text-white">Martin Vidan</h3>
            </div>
            <div className="w-full flex justify-around">
                <button onClick={()=>navScroll("home")} className="text-white">Home</button>
                <button onClick={()=>navScroll("proyects")} className="text-white">Projects</button>
                <button onClick={()=>navScroll("contact")}  className="text-white">Contact</button>
                <button onClick={()=>navScroll("about")} className="text-white">About Me</button>
            </div>
            <div className="w-full flex justify-end">
                <SelectThema/>
            </div>
        </header>
    )
}