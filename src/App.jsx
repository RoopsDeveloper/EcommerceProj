import { BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./E-commerceProject/Components/Home"
import Cart from "./E-commerceProject/Components/Cart"
import Navbar from "./E-commerceProject/Components/Navbar"
import About from "./E-commerceProject/Components/About"
import Data from "./E-commerceProject/Data"
import { useState } from "react"
const App = () => {
  const[data,setData]=useState(Data)
  const[search,setSearch]=useState("")
  const[cart,setCart]=useState([])
  const[sortOrder,setSortOrder]=useState('asc');

  const handleSort=()=> {
    const newOrder=sortOrder === 'asc' ? 'desc' : 'asc';
    setSortOrder(newOrder);
    const sorted=[...data].sort((a,b)=>{
      return newOrder === 'asc' ? a.price - b.price : b.price - a.price;
    });
    setData(sorted);
  }

  function handleClick(item){
    setCart([...cart,item])
  }

  return (
    <div className="App">
      <BrowserRouter>
      <Navbar setSearch={setSearch} size={cart.length} data={data} setData={setData} handleSort={handleSort} />
      <Routes>
        <Route path='/' element={<Home search={search} handleClick={handleClick} data={data} />}/>
        <Route path='/cart' element={<Cart cart={cart} setCart={setCart}/>} />
        <Route path='/about/:aboutId' element={<About Data={Data} />}/>


      </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
