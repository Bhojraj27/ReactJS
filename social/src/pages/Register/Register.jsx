import './register.css'

export default function Register() {
    return (
        <div className="register">
            <div className="registerWrapper">
                <div className="registerLeft">
                    <h3 className="registerlogo">Social</h3>
                    <span className="registerdesc">
                        Connect eith friends and the worlf around you on social.
                    </span>
                </div>
                <div className="registerRight">
                    <div className="registerBox">
                        <input placeholder="Username" className="registerInput" />
                        <input placeholder="Email" className="registerInput" />
                        <input placeholder="Password" className="registerInput" />
                        <input placeholder="Confirm Password" className="registerInput" />
                        <button className="registerButton">Sign Up</button>
                        <button className="RegisterButton">
                            Login into Account
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
