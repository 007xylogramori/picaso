import Searchbar from "./components/Searchbar.js";
import searchImages from "./api";
import Imagelist from "./components/Imagelist"
import { useState } from "react";
function App() {
  // images as state and props both
const [images, setImages]=useState([]) //here as state
  const handleClick= async (term)=>{
    const result= await searchImages(term);
    setImages(result)
  }
  return (
    <div>
  <Searchbar onSubmit={handleClick}/>
  {/* here as prop */}
  <Imagelist image={images}/> 
  </div>
  )
}

export default App;
