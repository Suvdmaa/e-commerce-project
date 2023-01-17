import { Link } from "react-router-dom"



export default function SignIn() {

    return (
        <div>
            <div className="sign-container col mx-auto my-5">
                <div className="container">
                    <h1 className="text-start">Sign Up</h1>
                    <form>
                        <div className="my-3">
                            <label htmlFor="name" className="my-2">Name*</label>
                            <br />
                            <input type="name" name="name" placeholder="Enter your name"></input>
                            <br />
                        </div>

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

                            <p className="my-2">Must be at least 8 characters.</p>
                        </div>
                        <br />
                        <button>Create account</button>
                        <br />
                        <p className="text-center my-4">Already have an account ? <Link to={"/login"} className="link-color">Log in</Link></p>
                    </form>
                </div>
            </div>
        </div>
    )
}