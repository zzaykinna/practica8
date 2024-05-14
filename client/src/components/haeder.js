import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from './img/logo.png';
import corzina from './img/corzina.png';
import { useContext } from 'react';
import { Context } from "../index";
import Button from 'react-bootstrap/esm/Button';
import { observer } from 'mobx-react-lite'
import { useNavigate } from 'react-router-dom';
const BasicExample = observer(() => {
  const { user } = useContext(Context)
  const navigate = useNavigate()
  const logOut = () => {
    user.setUser({})
    user.setIsAuth(false)
  }
  const handleClickAdmin = () => navigate('/admin');
  const handleClickUser = () => navigate('/login');
  const handleClickBasket =() =>{
    if(user.id === 0 ||user.id){
      navigate("/");
    }else {
      navigate("/basket"+'/'+ user.id);
    }
  }
  return (
    <Navbar expand="lg" style={{ background: '#e6e6e6', borderBottom: 'solid 1px black' }}>
      <Container>
        <Navbar.Brand href="/"><img
          src={logo}
          height="30"
          width="180"
          className="d-inline-bloke aling-top"
          alt="Logo"
          style={{ marginRight: '33vw' }}
        />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto " >
            <Nav.Link href="/catalog" style={{ marginRight: '4vw' }}>КАТАЛОГ</Nav.Link>
            <Nav.Link href="/about" style={{ marginRight: '3.5vw' }}>О КОМПАНИИ</Nav.Link>
            {user.isAuth ?
              <Nav>
                <Button className='button' variant="outline-secondary" onClick={() => logOut()}>Выйти</Button>
                <Button className='button ms-2' variant="secondary" onClick={handleClickAdmin}>Админ панель</Button>
                <Navbar.Brand href="/basket"><img
                  src={corzina}
                  height="30"
                  width="28"
                  className="d-inline-bloke aling-top"
                  alt="Corzina"
                  onClick={handleClickBasket}
                  style={{ marginLeft: '2vw' }}
                />
                </Navbar.Brand>
              </Nav>
              :
              <Nav>
                <Button className='button' onClick={handleClickUser} variant="outline-secondary" >Авторизоваться</Button>
              </Nav>
            }

          </Nav>

        </Navbar.Collapse>

      </Container>


    </Navbar>


  );
})

export default BasicExample;