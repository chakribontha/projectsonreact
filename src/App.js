import './App.css';
import React,{useState} from "react";
import axios from "axios";
import Gallery from "./Gallery";
const apiKey = "636e1481b4f3c446d26b8eb6ebfe7127";
function App() {
    const [search,setSearch]=useState("")
    const [data,setData]=useState([]);
    const changehandler=e=>{
        setSearch(e.target.value)
    }
    const onSubmitHandler=e=>{
        e.preventDefault();
        axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${search}&per_page=24&format=json&nojsoncallback=1`).then(
            respone=>setData(respone.data.photos.photo)
        );
        console.log(search);
    }
  return (
    <div>
     <center>
         <h2>Gallery snapshots</h2>
       <form onSubmit={onSubmitHandler}>
         <input type="text" value={search} onChange={changehandler}/> <br /><br />
           <input type="submit" name="search"/>
       </form>
         <br /><br />
         {data.length>=1?<Gallery data={data}/>:<h4>No data loaded</h4>}
     </center>
    </div>
  );
}

export default App;
