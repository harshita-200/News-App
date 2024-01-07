import React, { useEffect } from "react";
import { useState }  from "react";
/*import {setState} from "react";*/
import "./News.css";
import Spin from "./Spin";
const News = (props) => {
 /* state={
    loading:false;
  };*/
  const [loading,setLoading]=useState(false);
  const[totalResults,settotalResults]=useState();
  const [mynews, setMyNews] = useState([]);
  const [mypage, setMyPage] = useState(1);
  const fetchData = async () => {
    let response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=3cf6ffddc2f740578032e9891f0a7b32&page=${mypage}`
    );
    setLoading(true);
    let data = await response.json();
    settotalResults(data.totalResults);
    setMyNews(data.articles);
    setLoading(false);
    /*this.setState({loading:(false)});*/
  };

  useEffect(() => {
    fetchData();
  }, [props.category,props.country]);

   const handlePrev=async()=>{
    <Spin loading={loading} />
    setMyPage(mypage-1)
    let response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=3cf6ffddc2f740578032e9891f0a7b32&page=${mypage}`
    );
    setLoading(true);
    let data = await response.json();
    setMyNews(data.articles);
    setLoading(false);
   }
   const handleNext=async()=>{
    <Spin loading={loading} />
    setMyPage(mypage+1)
    let response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=3cf6ffddc2f740578032e9891f0a7b32&page=${mypage}`
    );
    setLoading(true);
    let data = await response.json();
    setMyNews(data.articles);
    setLoading(false);
   }
  return (
    <>
      <div class="container">
        {
         loading ?( <Spin loading={loading} /> ) :( <>
         <h1 className={`text-center fw-bolder text-${props.opp}`}>Top Headlines</h1>
        <div class="row">
          {mynews.map((ele) => {
            console.log(ele);
            return (
              <>
              
                <div class="col">
                  <div className="cardc">
                    <div class="card" style={{backgroundColor:props.mode==='light'? '#f8f9fa':"#343a40"}}>
                      <img
                        src={
                          
                          ele.urlToImage == null
                            ? "https://imgs.search.brave.com/RrPFCIM9BpMDmbZbyEHV96nzFv-0r64jTXutUwYHMYg/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAyLzQxLzQ1LzY4/LzM2MF9GXzI0MTQ1/Njg5OF9OYnZ5N3Vk/VXh1RENzOHdJbTNj/eGZLdUZiM0p3VnEx/aS5qcGc"
                            : ele.urlToImage
                            
                        }
                        class="card-img-top"
                        alt="..."
                      />
                      <div class="card-body" style={{color:props.mode==='light'?'blue':'white'}}>
                        <h5 class="card-title">{ele.author}</h5>
                        <p class="card-text">{ele.title}</p>
                        <a
                          href={ele.url}
                          target="_blank" rel="noreferrer"
                          class={`btn btn-primary btn-${props.mode}`} style={{backgroundColor:props.mode==='light'?'#ed1010c9':'black'}}
                        >
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
          <div className="container d-flex justify-content-between">
          <button disabled={mypage<=1} type="button" className={`btn btn-${props.mode}`} style={{backgroundColor:props.mode==='light'?'#ed1010c9':''}} onClick={handlePrev}>&larr; Previous</button>
          <button disabled={mypage+1>Math.ceil(totalResults/20)}type="button" className={`btn btn-${props.mode}`} style={{backgroundColor:props.mode==='light'?'#ed1010c9':''}} onClick={handleNext}>Next &rarr;</button>
          </div>
        </div>
        </>)}
      </div>
        
       
    </>
  );
};

export default News;