import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {blogItemDetails} = props
  const {id, author, avatarUrl, imageUrl, title, topic} = blogItemDetails
  return (
    <Link to={`blogs/${id}`} className="blog-item-container">
      <div className="blog-item-img-container">
        <img className="blog-item-img" alt="blog-img" src={imageUrl} />
      </div>
      <div className="blog-text-container">
        <p className="topic"> {topic}</p>
        <h1 className="title">{title}</h1>
        <div className="author-container">
          <img className="avatar" src={avatarUrl} alt="avatar-img" />
          <p className="author">{author}</p>
        </div>
      </div>
    </Link>
  )
}

export default BlogItem
