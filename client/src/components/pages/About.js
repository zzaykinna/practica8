import fot from '../img/fot.png';
import fot2 from '../img/fot2.png';
import fot3 from '../img/карта.png';
const About = () => {
    return (
    <div>
        <div style={{fontFamily:'Playfair', color:'#3a3a3a', fontSize:'2.7vw', marginTop:'4vw', marginLeft:'8vw'}}>О КОМПАНИИ</div>
            <div>
                <div style={{fontFamily:'Raleway', color:'#3a3a3a', fontSize:'2.7vw', marginTop:'4vw', marginLeft:'63vw'}}>КАЧЕСТВО</div>
                <img src={fot} style={{width: '37vw', marginLeft: '5vw', marginTop:'-4vw'}}/>
                <div style={{fontFamily:'Raleway', color:'#3a3a3a', fontSize:'1.6vw', marginTop:'-18vw', marginLeft:'50vw'}}>
                    Только здоровое, правильно выращенное  для нашей<br></br> 
                    климатической зоны растение украсит сад.<br></br>
                    Поэтому, качественный посадочный материал – одно из наших<br></br> 
                    конкурентных преимуществ. Мы с самого первого года работы<br></br> 
                    очень внимательно относимся к тому, чтобы технология<br></br> 
                    выращивания растений не нарушалась как в нашем питомнике,<br></br>
                    так и у наших поставщиков в России и Европе.
                </div>
            </div>
            <div>
                <div style={{fontFamily:'Raleway', color:'#3a3a3a', fontSize:'2.7vw', marginTop:'10vw', marginLeft:'15vw'}}>СПЕЦИАЛИСТЫ</div>
                <img src={fot2} style={{width: '37vw', marginLeft: '57vw', marginTop:'-7vw'}}/>
                <div style={{fontFamily:'Raleway', color:'#3a3a3a', fontSize:'1.6vw', marginTop:'-15vw', marginLeft:'7vw'}}>
                Грамотные, опытные агрономы и садовники с большой<br></br>  
                ответственностью и любовью к растениям делают все,<br></br> 
                чтобы посадочный материал, как выращенный в наших<br></br> 
                полях, так и привезенный из лучших питомников Европы,<br></br> 
                отвечал самым высоким требованиям.
                </div>
            </div>
            <div>
                <img src={fot3} style={{width: '7vw', marginLeft: '20vw', marginTop:'10vw'}}/>
                <div style={{fontFamily:'Raleway', color:'#3a3a3a', fontSize:'1.6vw', marginTop:'-10vw', marginLeft:'50vw'}}>
                В настоящее время питомник декоративных растений<br></br>
                Владимирского садового центра расположен <br></br>
                в с. Суходол (2 км от Глобуса в сторону Суздаля). <br></br>
                Вместе с садовым центром общая площадь - 10 га. 
                </div>
            </div>
            <div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2220.070693592095!2d40.45059857684048!3d56.19045577324936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x414c7bbf44d85ac3%3A0x63f2f1f3b677935!2z0JLQu9Cw0LTQuNC80LjRgNGB0LrQuNC5INGB0LDQtNC-0LLRi9C5INGG0LXQvdGC0YAgUExBTlRBUlVTUw!5e0!3m2!1sru!2sru!4v1713965351362!5m2!1sru!2sru" style={{width:"98vw", marginTop:'5vw', height:'40vw'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
    </div>
    )
    }
export default About
    