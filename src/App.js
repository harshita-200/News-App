import "./App.css"
import React,{useState,useEffect} from 'react'
import News from './components/News'
import RingLoader from "react-spinners/RingLoader";
const App = () => {
  const[country,setCountry]=useState("in");
  const[category,setCategory]=useState("general");
  const handleUpCLick=() =>{
    setCategory('sports')
    setCountry("us")
  }
  const[btn,setbtn]=useState('Dark')
  const [loading,setLoading]=useState(false);
  const [mode,setMode]=useState('light');
  const [opp,setOpp]=useState('dark');
 // const toggleStyle= ()=>{
  //  if(mode ==='white'){
   //   setMode('dark');
   // }
   // else
   // {
  //    setMode('light');
  //  }
//  }
  useEffect(()=>{
     setLoading(true)
     setTimeout(()=>{
      setLoading(false)
     },2000)
     
  },[])
  if(mode==='light')
  document.body.style.backgroundColor='#f2c8d0';
  return (
    <div>
      {
    loading?(
      <div className="load modal-dialog modal-dialog-centered">
        <RingLoader
        color={"blue"}
        loading={loading}
        size={100}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      </div>
    
    )
    :( 
      <>
      
      <div className="contain" style={{backgroundColor:'#f2c8d0'}}>
      <nav  className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
  <div className="container-fluid" >
    <a className="navbar-brand" href="/"><b>My News App</b></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Country</a>
      <ul class="dropdown-menu">
        <li><div onClick={()=>setCountry("in")} class="dropdown-item" >India</div></li>
        <li><div onClick={()=>setCountry("us")} class="dropdown-item" >USA</div></li>
      </ul>
    </li>
        <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Categories</a>
      <ul class="dropdown-menu">
        <li><div onClick={()=>setCategory("entertainment")} class="dropdown-item" >Entertainment</div></li>
        <li><div onClick={()=>setCategory("health")} class="dropdown-item" >Health</div></li>
        <li><div onClick={()=>setCategory("science")} class="dropdown-item" >Science</div></li>
        <li><div onClick={()=>setCategory("sports")} class="dropdown-item" >Sports</div></li>
        <li><div onClick={()=>setCategory("technology")} class="dropdown-item" >Technology</div></li>
        <li><div onClick={()=>setCategory("business")} class="dropdown-item" >Business</div></li>
      </ul>
    </li>
      </ul>
      <div className="form-check form-switch">
  <input onClick={()=>{
    if(mode =='light'){
      setMode('dark');
      setOpp('light');
      document.body.style.backgroundColor='black';
    }
    else
    {
      setOpp('dark');
      setMode('light');
      document.body.style.backgroundColor='#f2c8d0';
    }
  }} className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
  <label className={`form-check-label text-${opp}`} htmlFor="flexSwitchCheckDefault">Enable {mode} mode</label>
</div>
     
    </div>
  </div>
</nav>
      </div>
     
<News country={country} category={category} mode={mode} opp={opp}/>
    
    </>
    ) 
    }
   
</div>
  )}
export default App
  

