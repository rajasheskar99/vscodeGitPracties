import React from 'react'
import { BrowserRouter ,Link ,Route,Routes} from 'react-router-dom'
import Card from './Card'
import AddProducts from './AddProducts'
import Login from './Login'
 
 

function Navbar(props) {
  function PleaseLogout(){
    window.location.href='/login'
    console.log(window)
  }
  return (
    <BrowserRouter> 
    <div  >
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Shopper App</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">      
  
        {props.initial ? (<>
          <li className="nav-item">
          <Link className="nav-link active" to='/home'>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/add'>Add Products</Link>
        </li>
          <button className="btn btn-outline-light" onClick={PleaseLogout}>Logout</button>
        </>):<li className="nav-item"><Link className="nav-link" to='/login'>Login</Link></li>}
         
      </ul>
       
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

    </div>

    <Routes>
      <Route path='/home' element={<Card/>}> </Route>
          <Route path='/add' element={<AddProducts/>}></Route>
          <Route path='/login' element={<Login info={props.data}/>}></Route>
       
        </Routes>

    </BrowserRouter>
  )
}

export default Navbar