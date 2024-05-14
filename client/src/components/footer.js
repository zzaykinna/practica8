import React from 'react';
import logo from './img/logo2.png';
import vk from './img/vk.png';
import tg from './img/tg.png';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow
} from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter bgColor='#626262' className='text-center text-lg-left' style={{backgroundColor:"#626262"}}>
      <MDBContainer className='p-4'>
        <MDBRow>
          <MDBCol lg='6' md='12' className='mb-4 mb-md-0'>
          <li href="/catalog"><img
                            src={logo}
                            width="300vw"
                            className="d-inline-bloke aling-top"
                            alt="Logo"
                            href='/'
                        /></li>
            <h5 style={{color:'#F4F4F4', fontWeight:'200', marginTop:'1vw'}}>Мы в социальных сетях:</h5>
            <div ><a href='/catalog'><img
                            src={tg}
                            width="26"
                            alt="tg"
                            className='foto2'
                            href='/catalog'
                            marginRight='10vw'
                        /></a>
                        <img
                            src={vk}
                            width="30"
                            className='f'
                            alt="vk"
                           
                            href='/catalog'
                        />
                        </div>
          </MDBCol>

          <MDBCol lg='6' md='12' className='mb-4 mb-md-0'>
            <h5 style={{color:'#F4F4F4', fontWeight:'200', marginTop:'4vw'}}>Для связи:</h5>

            <a href='tel:+79209424242' style={{textDecoration:'none'}}><p style={{marginTop:'1vw'}}>Телефон: +7 (920) 942-42-42</p></a>
            <p>E-mail: plantaruss@email.ru</p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)', color:'#F4F4F4', fontWeight:'200'}}>
        <p>Поможем Вам создать уютный уголок для души</p>
      </div>
    </MDBFooter>
  );
}