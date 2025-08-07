import React, {useState} from 'react'
import Navbar from './Components/Navbar';
import NewsBoard from './Components/NewsBoard';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const App = () => {
  const [category,setCategory] = useState("general");

  return (
   <div className="app-container">
    <Navbar setCategory = {setCategory}/>
    <NewsBoard category = {category}/>
   </div>
  )
}

export default App

