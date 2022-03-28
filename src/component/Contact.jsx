import React from 'react'

function Contact() {
  return (
    <div className='container'>
      <div className="row">
          <h1 className='text-center my-4'>Contact</h1>
          <hr/>
        <div className="col-md-6">
          <img src='https://atlas-content-cdn.pixelsquid.com/stock-images/envelope-y1Mwv83-600.jpg' height="100%" width="100%"/>
        </div>
        <div className="col-md-6">
        <form>
        <div className="form-group my-4">
    <label htmlFor="exampleInputEmail1">Name</label>
    <input type="Name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your name"/>
    <small id="username" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group my-4">
    <label htmlFor="exampleInputPassword1">Massage</label>
    <textarea type="Massge" className="form-control" id="exampleInputMassage" placeholder="Massge"/>
  </div>
 
  <button type="submit" className="btn btn-outline-primary my-2 w-100">Submit</button>
</form>
        </div>
      </div>
    </div>
  )
}

export default Contact