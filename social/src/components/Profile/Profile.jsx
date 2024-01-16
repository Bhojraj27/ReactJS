import './profile.css'
import Topbar from '../Topbar/Topbar';
import Sidebar from '../sidebar/Sidebar';
import Feed from '../Feed/Feed';
import Rightbar from '../rightbar/Rightbar';
export default function Profile() {
    return (
        <>
            <Topbar />
            <div className="homeContainer">
                <Sidebar />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img className='profileCoverImg' src="assets/post/3.jpeg" alt="" />
                            <img className='profileUserImg' src="assets/post/7.jpeg" alt="" />
                        </div>
                        <div className="profileInfo">
                            <h4 className='profileInfoName'>Safak kocaglu</h4>
                            <h4 className='profileInfoDesc'>Hello my friends</h4>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        <Feed />
                        <Rightbar profile/>
                    </div>

                </div>
            </div>
        </>
    )
}
