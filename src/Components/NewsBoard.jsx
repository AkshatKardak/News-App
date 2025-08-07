import {useState , useEffect} from 'react';
import NewsItem from './NewsItem';

const NewsBoard = ({category}) => {

  const [articles,setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(()=> {
    setLoading(true);
    setError(null);
    let url =`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch news');
        }
        return response.json();
      })
      .then(data => {
        setArticles(data.articles);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  },[category])

  if (loading) {
    return <div className="loading">Loading latest news...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  return (
    <div className="news-board">
        <h2 className="text-center">Latest <span className="badge bg-danger">News</span></h2>
        <div className="news-grid">
          {articles.map((news,index) => {
            return <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url}/>
          })}
        </div>
    </div>
  )
}

export default NewsBoard
