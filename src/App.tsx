
import { useEffect, useState } from 'react';
import Carousel from './components/Carousel/Carousel';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import { TypeGeneros, getGeneros } from './services/API';
import Modal from './components/Modal/Modal';
import { event } from './components/Carousel/Poster';
import './App.css';


const App = () => {  
  const [Gens, setGen] = useState<TypeGeneros[]>([]);
  const [modalData, setModalData] = useState();
  const [modalHidden, setModalHidden] = useState(true);
  
  event.addListener("PosterClicked", (props:any)=>{
    setModalData(props);
    setModalHidden(false);
    event.removeAllListeners()
  } )

  event.addListener("closeModal", ()=> {
    setModalHidden(true);
    event.removeAllListeners();
  })

  modalHidden? document.documentElement.style.overflow = "auto" : document.documentElement.style.overflow = "hidden";

  const getGen = async ()=>{
    const req = await getGeneros();
    setGen(req);
  }
  
  useEffect(()=>{ 
    getGen() 
  },[])
  
  return (
    <div className='relative'>
        <Modal hidden={modalHidden} data={modalData}/>
      <header className='relative'>
        <Navbar />
        <Hero />
      </header>
      
      <section className='text-white'> 
        <div className="overflow-hidden">
          <p className='text-xl ml-10'>Populares na ImagineFlix</p>
          <Carousel/>
        </div>
      
        {Gens?.slice(5,9).map((item, index)=>(
          <div key={index} className="overflow-hidden">
            <p className='text-xl ml-10'>{item.name}</p>
            <Carousel kgen={item.id} />
          </div>
        ))}
        
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default App;
