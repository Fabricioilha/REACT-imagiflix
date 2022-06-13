
import { useEffect, useState } from 'react';
import './App.css';
import Carousel from './components/Carousel/Carousel';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import { TypeGeneros, getGeneros } from './services/API';

const App = () => {
  const [Gens, setGen] = useState<TypeGeneros[]>([])
  
  const getGen = async ()=>{
    const req = await getGeneros();
    setGen(req);
  }

  useEffect(()=>{ getGen() },[])

  return (
    <>
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
    </>
  )
}

export default App;
