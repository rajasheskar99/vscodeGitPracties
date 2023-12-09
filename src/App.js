import Navbar from './Components/Navbar';
import './App.css';
import React from 'react';
 

function App() {
  const[isLogin,setLogin]=React.useState(false)
  console.log(isLogin)
  return (
     <div>
      <Navbar data={setLogin} initial={isLogin}/>
     </div>
  );
}

export default App;
