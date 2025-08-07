import imagePlaceholder from '../assets/News.png'; 

const NewsItem = ({title,description,src,url}) => {
  return (
    <div className="news-card card">
    <img src={src ? src : imagePlaceholder} className="card-img-top" alt={title} />
    <div className="card-body">
    <h5 className="card-title">{title ? title.slice(0,50) + "..." : "No title available"}</h5>
    <p className="card-text">{description ? description.slice(0,90) + "..." : "It is information about something that has just happened."}</p>
    <a href={url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Read More</a>
    </div> </div>
)
}

export default NewsItem;
