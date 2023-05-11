import './App.css';
import Cards from './components/Cards/Cards';
import Nav from './components/Nav/Nav';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Form from './components/Forms/Forms';
import Favorites from './components/Favorites/Favorites';

const EMAIL = "isaac@gmail.com"
const PASSWORD = "abc123"


function App() {
   const[characters, setCharacters] = useState([])
   const [access, setAccess] = useState(false)
   const  navigate = useNavigate();
   const {pathname} = useLocation()
   

   const onSearch = (id) =>{
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
      if (data.name) {
         setCharacters((oldChars) => [...oldChars, data]);
      } else {
         window.alert('¡No hay personajes con este ID!');
      }
   });
   }

   const onClose = (id)=>{
      setCharacters(
         characters.filter((char)=>{
            return char.id !== Number(id)
         })
      )
   }

   const login = (userData)=>{
      if(userData.email === EMAIL && userData.password === PASSWORD){
         setAccess(true)
         navigate('/home')
      }
   }

   useEffect(() => {
      // eslint-disable-next-line
      !access && navigate('/');
      // eslint-disable-next-line
   }, [access]);



   return (
      <div className='App'>

         {pathname !== '/' && <Nav onSearch = {onSearch}/>}
         
         
         <Routes>
            <Route path="/favorites" element={<Favorites/>}/>
            <Route path="/" element={<Form login = {login}/>}/>
            <Route path="/home" element={<Cards characters={characters} onClose={onClose}/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/detail/:id" element={<Detail/>}/>
         </Routes>

      </div>
   );
}

export default App;
