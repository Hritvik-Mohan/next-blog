export default function Login () {
    return (
        <div className="form-container">
            <form className="login-form">
            <h2 className="">Login</h2>
                <div className="email">
                    <label>Email</label>
                    <input type="text" />
                </div>
                <div className="password">
                    <label>Password</label>
                    <input type="password" />
                </div>
                <div className="auth-submission">
                    <input type="submit" />
                </div>
            </form>
        </div>
    )
}