import React from 'react'

const NavBar = () => {
  return (
    <>
       <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="/"><b>My News App</b></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <div className="nav-link">General</div>
        </li>
        <li className="nav-item">
          <div className="nav-link">Entertainment</div>
        </li>
        <li className="nav-item">
          <div className="nav-link">Health</div>
        </li>
        <li className="nav-item">
          <div className="nav-link">Sports</div>
        </li>
        <li className="nav-item">
          <div className="nav-link">Business</div>
        </li>
        <li className="nav-item">
          <div className="nav-link">Science</div>
        </li>
        <li className="nav-item">
          <div className="nav-link">Technology</div>
        </li>
      </ul>
      <button type="button" class="btn btn-dark">Dark</button>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </>
  )
}

export default NavBar
