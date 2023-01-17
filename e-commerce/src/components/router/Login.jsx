export default function LogIn() {

    return (
        <div>
            <div className="sign-container col mx-auto my-5">
                <div className="container">
                    <h1 className="text-start">Log in</h1>
                    <form>
                        <div className="my-3">
                            <label htmlFor="email" className="my-2">Email*</label>
                            <br />
                            <input type="email" name="email" placeholder="Enter your email"></input>
                            <br />
                        </div>

                        <div className="my-3">
                            <label htmlFor="password" className="my-2">Password*</label>
                            <br />
                            <input type="password" name="password" placeholder="Create a password"></input>

                        </div>
                        <br />
                        <button>Log In</button>
                    </form>
                </div>
            </div>
        </div>
    )
}