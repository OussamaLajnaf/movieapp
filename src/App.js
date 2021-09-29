import { useState } from 'react';
import './App.css';
import Add from './Componentes/Add';
import MovieList from './Componentes/MovieList';
import { moviesdata } from './data';
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom'
import NavBAr from './Componentes/NavBAr';
import Footer from './Componentes/Footer';
import Trailer from './Componentes/Trailer';

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
<Router>
<NavBAr text={text} rating={stars} handelchange={handelchange} handelrating={handelrating}/>
<Switch>
   <Route exact path="/" render={()=><MovieList movie={list.filter(el=>el.name.toLowerCase().includes(text.toLowerCase())&&(el.rating>=stars))}/>}/>
   <Route exact path="/love/:id" render={(props)=><Trailer {...props} list={list}/>}/>
   </Switch>
   <Add add={handelAdd}/>
   <Footer/>
   </Router>
   
    </div>
  );
}

export default App;