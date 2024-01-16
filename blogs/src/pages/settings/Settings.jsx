import './settings.css';
import SideBar from '../../components/sidebar/Sidebar';
export default function Settings() {
    return (
        <div className='settings'>
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update Your Account</span>
                    <span className="settingsDeleteTitle">Delete Account</span>
                </div>
                <form className='settingsForm'>
                    <label>Profile Picture</label>
                    <div className="settingsPP">
                        <img src="assets/img5.jpg" alt="" className="settingsImg" />
                        <label>
                            <i className='settingsPPIcon far fa-user-circle'></i>
                        </label>
                        <input type="file" id='finleInput' style={{ display: "none" }} />
                    </div>
                    <label>UserName</label>
                    <input type="text" placeholder='Safak' />
                    <label>Email</label>
                    <input type="email" placeholder='safak@gmail.com' />
                    <label>Password</label>
                    <input type="password" placeholder='' />
                    <button className="settingsSubmit">Submit</button>
                </form>
            </div>
            <SideBar />
        </div>
    )
}
