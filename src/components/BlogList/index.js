import BlogItem from '../BlogItem'
import './index.css'

const BlogList = props => {
  const {listOfBlogs} = props
  console.log(listOfBlogs)
  return listOfBlogs.map(eachItem => (
    <BlogItem key={eachItem.id} blogItemDetails={eachItem} />
  ))
}

export default BlogList
