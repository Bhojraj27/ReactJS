import './post.css'

export default function Post() {
  return (
    <div className="post">
      <img className='postImg' src="assets/img2.jpg" alt="" />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit amet</span>
        <hr/>
        <span className="postDate">1 hour ago</span>
        <p className='postDesc'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore
         et dolore magna aliqua. Ut enim ad 
         minim veniam, quis nostrud exercitation 
         ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>
  )
}
