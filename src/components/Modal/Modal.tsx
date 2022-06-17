
import { faCircleXmark, faPlay, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { event, PropsMovies } from '../../components/Carousel/Poster';
import Score from '../utils/Score';

type ModalProps = {
    data?: PropsMovies,
    hidden?: boolean
}

const Modal = (props: ModalProps) => {
    const closeModal = () => {
        event.emit("closeModal")
    }
    return (
        <div className={`${props.hidden ? "hidden" : 0} flex justify-center  items-center fixed bg-black h-[100vh] w-[100vw] z-20 text-white overflow-hidden  `}>
            <img src={`https://image.tmdb.org/t/p/original/${props.data?.backdrop_path}`} className="absolute object-cover w-full" alt="" />
            <div className='flex gap-10 h-[70%] w-[80%] p-10 bg-gray-900 shadow-white rounded relative opacity-95'>
                <button onClick={closeModal} className="absolute right-5 top-5"><FontAwesomeIcon icon={faCircleXmark} size="2x" /></button>
                
                <img src={`https://image.tmdb.org/t/p/original/${props.data?.poster_path}`} className="rounded w-[40%] object-contain" alt="" />
                <div className='grid items-center'>
                    <h1 className='text-center text-4xl'>{props && props.data?.title}</h1>
                    <p className='text-2xl'>{props.data?.overview ? props.data.overview : "Não há descrição para este filme"}</p>
                    <div className='flex items-center gap-5'> Nota: <Score score={props.data?.score} /></div>
                
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
        </div>
    )
}

export default Modal