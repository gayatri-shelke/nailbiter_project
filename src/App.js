
// import React from 'react'
// import { Route,Router,Link, Routes} from 'react-router-dom'
// import  './App.css'
// import AddUser from './component/AddUser'
// import Login1 from './component/Login1'


// function App() {
//   return (
   
//       // <AddUser/>
    

//       <Routes>
//       <Route exact path="/" element={<AddUser></AddUser>}></Route>
//       </Routes>

    
   
//   )
// }
// export default App
import './App.css'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Login from "./component/Login";
import AddUser from "./component/AddUser";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<AddUser/>} />
          <Route path="Login" element={<Login/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);