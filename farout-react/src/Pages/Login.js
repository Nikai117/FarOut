import React from "react";


class Login extends React.Component{
    render(){
        return(
            <div className="d-flex justify-content-center p-5 vh-100 ">
                <form >
                    <div className="form-outline mb-4">
                        <input type="email" id="form2Example1" className="form-control" placeholder="Email"  />
                        <label className="form-label"   htmlFor="form2Example1"></label>
                    </div>
                    <div className="form-outline mb-4">
                        <input type="password" id="form2Example2" className="form-control"  placeholder="Password"  />
                        <label className="form-label" aria-label="Password" htmlFor="form2Example2"></label>
                    </div>
                    <div className="row mb-4">
                        <div className="col d-flex justify-content-center">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="form2Example31"  />
                            <label className="form-check-label " htmlFor="form2Example31" > Remember me </label>
                        </div>
                        </div>

                        <div className="col">
                        <a href="#!" className="">Forgot password?</a>
                        </div>
                    </div>
                    <button type="button" className="btn  btn-block mb-4">Sign in</button>
                   <div className="text-center ">
                        <p>Not a member? <a href="#!" className="">Register</a></p>
                    </div>
                    </form>
            </div>
        )
    }
}

export default Login;