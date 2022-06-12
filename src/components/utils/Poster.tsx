import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Score from "./Score";

type Props = {
    title?:string,
    score?:number,
    poster_path?:string
}

const Poster = ({title="Titulo do Filme",score=10,poster_path}:Props) =>{
    return(
        <article className="
            relative 
            hover:z-20 
            hover:scale-125 
            transition-all 
            ease-linear 
            transition-duration-200
            mx-2 cursor-pointer
            shadow-2xl rounded
            ">
            
            <div className="
                absolute 
                inset-0 
                bg-black 
                opacity-0 
                hover:opacity-90
                hidden
                2xl:flex flex-col 
                justify-center 
                gap-4 bg-black 
                px-2 items-center
                " >
                <FontAwesomeIcon icon={faPlayCircle} size="5x" />
                <p className="hidden 2xl:block">{title}</p>
                <Score score={score}/>
            </div>
            <div>
                <img src={`https://image.tmdb.org/t/p/original/${poster_path}`} className="rounded w-full h-full" alt="" />
            </div>
            
        </article>
    )
}
export default Poster