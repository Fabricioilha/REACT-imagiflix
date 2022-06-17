import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";
import { getPopularity, TypePopularity } from "../../services/API";
import { useEffect, useState } from "react";
import Poster from "./Poster";

type Props = {
    kgen?:number
}

const Carousel = ({kgen}:Props) => {

    const [movies, setMovies] = useState<TypePopularity[]>([])

    const getMovies = async ()=>{
        const req = await getPopularity(kgen);
        req && setMovies(req);
    }

    useEffect(()=>{
        getMovies();
        // eslint-disable-next-line
    },[])

    enum Direction {
        left, right,
    }
    const SlickArrow = ({ direction, onClick }: { direction: Direction, onClick: any }) => {
        return (
            <button type="button"
                className={`absolute top-0 bottom-0  w-12 bg-black opacity-60 z-10 ${direction ? "left-0" : "right-0"}`}
                onClick={onClick}>
                <FontAwesomeIcon icon={direction ? faChevronLeft : faChevronRight} size="2x" />
            </button>
        )
    }
    const settings = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 10,
        arrows: true,
        rows:1,
        nextArrow: <SlickArrow direction={Direction.right} onClick={onclick} />,
        prevArrow: <SlickArrow direction={Direction.left} onClick={onclick} />
    }

    return (
            <Slider {...settings} className="relative py-5" >

                {movies?.shift() && movies?.map((movie,index)=>(
                    <Poster 
                        title={movie.title} 
                        score={movie.vote_average} 
                        poster_path={movie.poster_path}
                        id={movie.id}
                        adult={movie.adult}
                        backdrop_path={movie.backdrop_path}
                        genre_ids={movie.genre_ids}
                        overview={movie.overview}
                        video={movie.video}
                        key={index} />
                ))}

            </Slider>
    );
}
export default Carousel