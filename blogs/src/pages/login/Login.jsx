import { Link } from 'react-router-dom'
import './login.css'

export default function Login() {
    return (
        <div className="login">
            <form action="" className="loginForm">
                <label>Email</label>
                <input className='loginInput' type="email" placeholder='Enter your email...' />
                <label>Password</label>
                <input className='loginInput' type="password" placeholder='Enter your password...' />
                <button type="submit" className="loginButton">Login</button>
            </form>
            <button type="submit" className="loginRegisterButton">
                <Link className='link' to="/register">Register</Link>
            </button>

        </div>
    )
}
