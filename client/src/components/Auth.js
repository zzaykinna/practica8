import { Container, Card, Form, Button } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";
import { login, registration } from "../http/userAPI";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import React, { useContext, useState} from 'react';
import { useNavigate } from "react-router-dom";

const Auth = observer(() => {
   

    const { user } = useContext(Context)
    const location = useLocation()
    const navigate = useNavigate()
    const isLogin = location.pathname === '/login'
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const click = async () => {
        try {
            let data;
            if (isLogin) {
                data = await login(email, password);
            } else {
                data = await registration(email, password);
            }
            user.setUser(data.user)
            user.setIsAuth(true)
            navigate('/catalog')
        } catch (e) {
            alert(e.response.data.message)
        }

    }

    return (
        <center>
            <Container style={{ height: '20vw', marginTop: '9vw', marginBottom: '18vw'}}>
                <Card style={{ width: '50vw', backgroundColor:'#F6F6F6'}} className='p-5'>
                    <h2 className="m-auto">{isLogin ? "АВТОРИЗАЦИЯ" : "РЕГИСТРАЦИЯ"}</h2><br /><br />
                    <Form className="d-flex flex-column">
                        <Form.Control className='mt-2'  variant="dark"placeholder='Введите ваш e-mail...' onChange={e => setEmail(e.target.value)}/><br />
                        <Form.Control className='mt-2' type="password" placeholder='Введите ваш пароль...'   onChange={e => setPassword(e.target.value)}/> <br />
                        {isLogin ?
                            <div>
                                <div style={{ marginLeft: '20vw' }}>
                                    Нет аккаунта? <NavLink to='/registration' style={{ color: 'black' }}>Зарегистрироваться</NavLink>
                                </div><br /></div>
                            :
                            <div>
                                <div style={{ marginLeft: '20vw' }}>
                                    Есть аккаунт? <NavLink to='/login' style={{ color: 'black' }}>Войти</NavLink>
                                </div><br />
                            </div>
                        }
                        <Button
                                variant={"outline-secondary"}
                                onClick={click}
                            >
                                {isLogin ? 'Войти' : 'Регистрация'}
                            </Button><br />
                    </Form>
                </Card>
            </Container>
        </center>
    )
})

export default Auth;