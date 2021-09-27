import { useState } from 'react';
import './App.css';
import Add from './Componentes/Add';
import MovieList from './Componentes/MovieList';
import { moviesdata } from './data';

import NavBAr from './Componentes/NavBAr';
import Footer from './Componentes/Footer';

function App() {
  const [list, setList] = useState(moviesdata)
  const [text, setText] = useState("")
  const [stars, setStars] = useState(1)

  //handelAdd
  let handelAdd=(newmovies)=>{
setList([...list,newmovies])
  }
  //handel change navbar
  let handelchange=(e)=>{
    setText(e.target.value)
  }
  //handel stars
  let handelrating=(x)=>{setStars(x)

  }
  return (
    <div className="App">
<NavBAr text={text} rating={stars} handelchange={handelchange} handelrating={handelrating}/>
   <MovieList movie={list.filter(el=>el.name.toLowerCase().includes(text.toLowerCase())&&(el.rating>=stars))}/>
   <Add add={handelAdd}/>
   <Footer/>
   
    </div>
  );
}

export default App;