import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Score from "./Score";

type Props = {
    title?:string,
    score?:number, 
    poster_path?:string,
    id?:number,
    adult?:boolean,
    backdrop_path?:string,
    genre_ids?:number[],
    overview?:string,
    video?:boolean
}


const Poster = (props:Props) =>{
    const showModal = ()=>{
        console.log(props.id);
    }
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
            "
            onClick={showModal}>
            
            <div className="
                hidden
                absolute 
                inset-0 
                bg-black 
                opacity-0 
                hover:opacity-90
                2xl:flex flex-col 
                justify-center 
                gap-4 bg-black 
                px-2 items-center
                box-border
                ">
                <FontAwesomeIcon icon={faPlayCircle} size="5x" />
                <p className="hidden 2xl:block">{props.title}</p>
                <Score score={props.score}/>
            </div>
            <div>
                <img src={`https://image.tmdb.org/t/p/original/${props.poster_path}`} className="rounded w-full h-full" alt="" />
            </div>
            
        </article>
    )
}
export default Poster