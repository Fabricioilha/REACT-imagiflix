import logo from "../../assets/images/imagiflix.png";
import foto_perfil from "../../assets/images/user.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react";

const Navbar = ()=> {
    // Controle de animacao da caixa de busca e menu do perfil
    const [margem, setRight] = useState(300);
    const [focused, setFocused] = useState(false);
    const [istoggle, setToggle] = useState(true);
    const toggle = ()=> istoggle? setToggle(false) : setToggle(true);
    ///////////////////////////////////////////////////////////

    return(
        <div className=" grid grid-cols-1 md:grid-cols-2 m-auto p-8 text-white absolute w-full top-0">

            {/* /////////// Lado esquerdo - Logo e menu //////////////////////////////////*/}
            <div className="flex items-center gap-12">
                <a href="/"><img src={logo} alt="logo imagiflix"/></a>
                <div>
                    <ul className="flex gap-7 list-none font-bold text-gray-300 ">
                        <li className="hover:text-white"><a href="/">Inicio</a></li>
                        <li className="hover:text-white"><a href="/">Filmes</a></li>
                        <li className="hover:text-white"><a href="/">Séries</a></li>
                    </ul>
                </div>
            </div>
            {/* //////////////////////////////////////////////////////////////////////// */}

            {/* ////////// Lado direito - Busca e Perfil ////////////////////////////////*/}
            <div className="flex justify-end items-center">
                <div className="flex gap-3">

                    <form 
                        action="#" method="post" 
                        onMouseEnter={()=> setRight(0)}
                        onFocus={()=> setFocused(true)}
                        onMouseLeave={()=> focused? setRight(0):setRight(300)}
                        onBlur={()=> {setRight(300); setFocused(false) }}
                        className="w-[300px] overflow-hidden grid grid-cols-2 rounded items-center relative"
                    >

                        <input type="text" placeholder="Titulos, gente e generos" 
                            className={
                                `p-1 outline-none border border-gray-600 text-white w-[300px] bg-black opacity-75 rounded
                                transition-all ease duration-300`}
                                style={{marginLeft:`${margem}px`}}
                                />

                        <button type="submit" className="h-[30px] w-[30px] absolute right-0" onClick={(e)=>{e.preventDefault(); focused? setFocused(true) : setFocused(false)}}>
                            <FontAwesomeIcon icon={faSearch}/>
                        </button>
                    </form>

                    <div className="flex items-center flex-col relative">

                    <div className="flex cursor-pointer" onClick={toggle}>
                        <img src={foto_perfil} alt="Foto do usuario" className="rounded" />
                        <button>
                            <FontAwesomeIcon icon={faCaretDown} className="ml-2"/>
                        </button>
                    </div>
                    
                    <button>
                        <ul className={`
                            absolute rounded text-right px-5
                            bg-black p-2 right-0 w-[150px] top-9 transition-transform 
                            duration-300 ease-in-out opacity-70
                            ${istoggle?"hidden" : ""}`}
                            onMouseLeave={()=> setToggle(true)}
                        >
                            <li><a href="/" className="hover:font-bold">Minha conta</a></li>
                            <li><a href="/" className="hover:font-bold"> Sair </a></li>
                        </ul>
                    </button>                            
                </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar