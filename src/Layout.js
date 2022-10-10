import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div>   
    <nav class="navbar navbar-expand-lg navbar-light bg-dark">
  <div class="container-fluid">
    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#"></a>
        </li>    
    </ul>
      <form class="d-flex">
        
        <button class="btn btn-outline-success" type="submit"><Link to="/">Register</Link></button>
        <button class="btn btn-outline-success" type="submit"><Link to="/Login">Login</Link></button>
      </form>
    </div>
  </div>
</nav>   
      <Outlet />
    </div>
  )
};

export default Layout;








