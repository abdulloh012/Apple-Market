import React from 'react'

function Signup() {
  return (
    <>
    {/* <!-- Button trigger modal --> */}
    <button
      type="button"
      className="btn btn-outline-dark mx-1"
      data-bs-toggle="modal"
      data-bs-target="#signupModal">
       <span className="fa fa-user-plus  "></span>Register
    </button>

    {/* <!-- Modal --> */}
    <div
      className="modal fade"
      id="signupModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="signupModal">
             Register
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <button className="btn btn-info w-100 mb-4">
              <span className="fa fa-google me-2"></span>
              Sign up with Google
            </button>
            <button className="btn btn-info w-100 mb-2 mb-4">
              <span className="fa fa-facebook me-2"></span>
              Sign up with Facebook
            </button>
            <form>
              <div className="mb-3">
                <label htmlFor="exampleInput" 
                  className="form-label"> User Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInput"/>
                <div/>
                <div className="mb-3">
                  <label htmlFor="inputPassword5" className="form-label">Email adres</label>
                  <input type="email" id="inputEmail" className="form-control" />
                </div>
                </div>
               <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" htmlFor="exampleCheck1">
                 Remember me
                </label>
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default Signup