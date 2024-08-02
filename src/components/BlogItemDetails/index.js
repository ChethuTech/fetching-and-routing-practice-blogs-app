import {Component} from 'react'
import Loader from 'react-loader-spinner'
import './index.css'

class BlogItemDetails extends Component {
  state = {isLoading: true, blogDetails: []}

  componentDidMount() {
    this.getBlogDetails()
  }

  getBlogDetails = async () => {
    const {match} = this.props
    const blogId = match.params.id
    const response = await fetch(`https://apis.ccbp.in/blogs/${blogId}`)
    const data = await response.json()
    const updatedData = {
      id: data.id,
      title: data.title,
      topic: data.topic,
      author: data.author,
      avatarUrl: data.avatar_url,
      imageUrl: data.image_url,
      content: data.content,
    }
    this.setState({blogDetails: updatedData, isLoading: false})
  }

  render() {
    const {blogDetails, isLoading} = this.state
    const {id, title, topic, author, avatarUrl, content, imageUrl} = blogDetails

    return (
      <>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          <div className="blogDetails-container">
            <h1 className="title">{title}</h1>
            <div className="author-container">
              <img className="author-img" src={avatarUrl} alt="author-image" />
              <p className="author-name"> {author} </p>
            </div>
            <img className="content-img" src={imageUrl} alt={title} />
            <p className="content">{content}</p>
          </div>
        )}
      </>
    )
  }
}

export default BlogItemDetails
