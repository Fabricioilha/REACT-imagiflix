import { faPlay, faPlus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react"
import { getPopularity, TypePopularity } from "../../services/API"
import Score from "../utils/Score"


const Hero = ()=>{
    const [destac, setDesctac] = useState<TypePopularity>()
    const [num, setN] = useState(0)
    const timer = () => setN(num + 1);

    useEffect(
        () => {
            if (num < 20) {
                const id = setInterval(timer, 10000);
                console.log(num);
                getMovie()
                return () => clearInterval(id);
            }else{
                setN(0);
                getMovie()
            }
        },
        [num]
    );
    
    // useEffect(()=>{
        
    //     getMovie()
        
    // },[])
    
    const getMovie = async ()=>{
        const movies = await getPopularity();
        const movie = movies[num] 
        setDesctac(movie);
        
    }



    return(
        <div className="h-[90vh] w-full text-white ">
            <img src={`https://image.tmdb.org/t/p/original/${destac?.backdrop_path}`} alt="" className="h-full w-full object-cover object-top"/>
            <div className="h-[50%] bg-gradient-to-b from-transparent  to-black w-full  absolute bottom-0 "></div>
            <div className="absolute bottom-[10%] p-8 flex flex-col gap-5">
                <p className="text-3xl">Assita agora</p>
                <p className="text-5xl font-bold">{destac?.title}</p>
                    <span className="flex gap-5 items-center">Nota:<Score score={destac?.vote_average} /></span>
                <div className=" flex mt-5 text-lg">
                    <button className="mr-5 px-6 py-2 rounded bg-black opacity-60 hover:opacity-100">
                        <FontAwesomeIcon icon={faPlay} className="mr-2" />
                            Assistir
                    </button>
                    <button className="px-6 py-2 rounded bg-black opacity-60 hover:opacity-100">
                        <FontAwesomeIcon icon={faPlus} className="mr-2" />
                            Minha lista
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Hero