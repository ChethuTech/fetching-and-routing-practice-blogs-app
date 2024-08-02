import {Component} from 'react'
import Loader from 'react-loader-spinner'
import BlogList from '../BlogList'
import UserInfo from '../UserInfo'
import './index.css'

class Home extends Component {
  state = {isloading: true, listOfBlogs: []}

  componentDidMount() {
    this.fetchDataAndDisplay()
  }

  fetchDataAndDisplay = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()
    const updatedData = data.map(eachItem => ({
      author: eachItem.author,
      id: eachItem.id,
      title: eachItem.title,
      topic: eachItem.topic,
      avatarUrl: eachItem.avatar_url,
      imageUrl: eachItem.image_url,
    }))
    this.setState({isloading: false, listOfBlogs: updatedData})
  }

  render() {
    const {isloading, listOfBlogs} = this.state
    return (
      <div className="home-container">
        <UserInfo />
        {isloading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          <BlogList listOfBlogs={listOfBlogs} />
        )}
      </div>
    )
  }
}

export default Home
