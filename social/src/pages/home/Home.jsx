import  './home.css'
import Topbar from '../../components/Topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Feed from '../../components/Feed/Feed';
import Rightbar from '../../components/rightbar/Rightbar';

export default function home() {
  return (
    <>
      <Topbar />
      <div className="homeContainer">
      <Sidebar />
      <Feed />
      <Rightbar />
      </div>
    </>
  )
}
