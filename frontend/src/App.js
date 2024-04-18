import './App.css';
import Navbar from '../src/components/Navbar/Navbar';
import {
  BrowserRouter,
  Routes,
  Route,
 
}  from "react-router-dom";
import Home from '../src/pages/Home';
import AddBlog from '../src/pages/Addblog';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Navbar /> 
     <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/add_blog' element={<AddBlog/>}/>


     </Routes>
     
     
     
     </BrowserRouter>
    </div>
  );
}

export default App;
