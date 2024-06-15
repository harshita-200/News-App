import React, { useEffect, useState } from "react";
import "./News.css";
import Spin from "./Spin";

const News = (props) => {
  const [loading, setLoading] = useState(false);
  const [totalResults, setTotalResults] = useState(0);
  const [mynews, setMyNews] = useState([]);
  const [mypage, setMyPage] = useState(1);

  const fetchData = async (page = mypage) => {
    setLoading(true);
    try {
      let response = await fetch(
        `https://newsapi.org/v2/everything?q=tesla&from=2024-05-15&sortBy=publishedAt&apiKey=3cf6ffddc2f740578032e9891f0a7b32`
      );
      let data = await response.json();
      setTotalResults(data.totalResults);
      setMyNews(data.articles);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [props.category, props.country]);

  const handlePrev = async () => {
    if (mypage > 1) {
      const newPage = mypage - 1;
      setMyPage(newPage);
      await fetchData(newPage);
    }
  };

  const handleNext = async () => {
    const newPage = mypage + 1;
    setMyPage(newPage);
    await fetchData(newPage);
  };

  return (
    <div className="container">
      {loading ? (
        <Spin loading={loading} />
      ) : (
        <>
          <h1 className={`text-center fw-bolder text-${props.opp}`}>Top Headlines</h1>
          <div className="row">
            {mynews.map((ele, index) => (
              <div className="col" key={index}>
                <div className="cardc">
                  <div className="card" style={{ backgroundColor: props.mode === 'light' ? '#f8f9fa' : "#343a40" }}>
                    <img
                      src={ele.urlToImage ?? "https://imgs.search.brave.com/RrPFCIM9BpMDmbZbyEHV96nzFv-0r64jTXutUwYHMYg/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAyLzQxLzQ1LzY4/LzM2MF9GXzI0MTQ1/Njg5OF9OYnZ5N3Vk/VXh1RENzOHdJbTNj/eGZLdUZiM0p3VnEx/aS5qcGc"}
                      className="card-img-top"
                      alt="news"
                    />
                    <div className="card-body" style={{ color: props.mode === 'light' ? 'blue' : 'white' }}>
                      <h5 className="card-title">{ele.author}</h5>
                      <p className="card-text">{ele.title}</p>
                      <a
                        href={ele.url}
                        target="_blank" rel="noreferrer"
                        className={`btn btn-primary btn-${props.mode}`}
                        style={{ backgroundColor: props.mode === 'light' ? '#ed1010c9' : 'black' }}
                      >
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div className="container d-flex justify-content-between">
              <button
                disabled={mypage <= 1}
                type="button"
                className={`btn btn-${props.mode}`}
                style={{ backgroundColor: props.mode === 'light' ? '#ed1010c9' : '' }}
                onClick={handlePrev}
              >
                &larr; Previous
              </button>
              <button
                disabled={mypage + 1 > Math.ceil(totalResults / 20)}
                type="button"
                className={`btn btn-${props.mode}`}
                style={{ backgroundColor: props.mode === 'light' ? '#ed1010c9' : '' }}
                onClick={handleNext}
              >
                Next &rarr;
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default News;
