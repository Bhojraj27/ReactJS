import './sidebar.css'

export default function sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img src="assets/img4.jpg" alt="" className='sidebarImg' />
        <p >
          Lorem ipsum dolor sit amet,
          consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className='sidebarList'>
          <li className='sidebarListItem'>Life</li>
          <li className='sidebarListItem'>Music</li>
          <li className='sidebarListItem'>Style</li>
          <li className='sidebarListItem'>Sport</li>
          <li className='sidebarListItem'>Tech</li>
          <li className='sidebarListItem'>Cinema</li>
        </ul>
      </div>
    <div className="sidebarItem">
      <span className="sidebarTitle">FOLLOW US</span>
      <div className="sidebarSocial">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
      </div>
    </div>
    </div>
  )

}