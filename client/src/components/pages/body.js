import React from 'react';
import { useState, useEffect } from 'react';
import foto from '../img/foto1.png';
import xyi from '../img/xyi.png';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import f1 from '../img/1.png';
import f2 from '../img/2.png';
import f3 from '../img/3.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Body() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    AOS.init();
  }, []);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);}
  return (
    <div>
      <div data-aos="fade-up" data-aos-delay="50" data-aos-duration="2000">
    <div className='presentation'></div>
    <div className='foto'><img src={foto} style={{width: '40vw', marginTop:'2vw', marginLeft:'50vw'}}/></div>
    <div className='minizagol'>Посадите сад вместе с нами <br></br> и почувствуйте радость от<br></br>  большого достижения</div>
    <Button href="/catalog" className='button1' size="lg"variant="secondary">к каталогу</Button> <br></br>
    <Button href="/about" className='button2' size="lg"variant="outline-secondary">о нас</Button> 
    </div>
    <div data-aos="fade-up" data-aos-delay="50" data-aos-duration="2000">
    <div><img src={xyi} style={{width: '80vw', marginLeft: '10vw', marginTop:'10vw'}} /></div></div>
    <div data-aos="fade-up" data-aos-delay="50" data-aos-duration="2000">
    <div style={{fontFamily:'Raleway', color:'#6E4A4A', fontSize:'2.5vw', marginTop:'7vw', textAlign:'center'}}>НАШИ РАБОТЫ</div>
    <div style={{marginTop:'2vw', marginBottom:'5vw'}}>
      <Carousel activeIndex={index} onSelect={handleSelect} variant='dark'>
      <Carousel.Item>
         <img src={f1}style={{width: '70vw', marginLeft: '15vw'}}/>
      </Carousel.Item>
      <Carousel.Item>
      <img src={f2} style={{width: '70vw', marginLeft: '15vw'}}/>
      </Carousel.Item>
      <Carousel.Item>
      <img src={f3} style={{width: '70vw', marginLeft: '15vw'}}/>
      </Carousel.Item>
    </Carousel>
    </div>
    </div>
    </div>
  )
}