import './header.css'

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className='headerTitleSm'>
        React & Node
        </span>
        <span className='headerTitleLg'>
        Blog
        </span>
      </div>
      <img className='headerImg' src="assets/img3.jpg" alt="" />
    </div>
  )
}
