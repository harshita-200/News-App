import React from 'react'
import {useState,useEffect} from 'react'
import RingLoader from "react-spinners/RingLoader";

const Spin = (props) => {
    const [loading,setLoading]=useState(false);

   useEffect(()=>{
       setLoading(true)
       setTimeout(()=>{
        setLoading(false)
       },)
       
    },[])
  return (
    <div>
    {
  loading?(
    <div className="load modal-dialog modal-dialog-centered">
      <RingLoader
      color={"blue"}
      loading={props.loading}
      size={100}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
    </div>
  
  )
  :(<></>)
  }
  </div>
  )
}

export default Spin