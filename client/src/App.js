import './App.css';
import { useContext, useEffect, useState } from 'react';
import BasicExample from './components/haeder'; // Исправлено на 'header'
import AppRouter from './components/AppRouter';
import Footer from './components/footer';
import { Context } from "./index";
import { check } from "./http/userAPI";
import { observer } from "mobx-react-lite";
import Cat from "./components/img/29.gif";
import { Image } from 'react-bootstrap';

const App = observer(() => {
  const { user } = useContext(Context);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      check().then(data => {
        user.setUser(data);
        user.setIsAuth(true);
      }).finally(() => setLoading(false));
    }, 1500);
  }, []);

  if (loading) {
    return (
      <div className="loading-screen">
        <Image src={Cat} className='enot-centered' />
      </div>
    );
  }

  return (
    <>
      <BasicExample />
      <AppRouter />
      <Footer />
    </>
  );
});

export default App;