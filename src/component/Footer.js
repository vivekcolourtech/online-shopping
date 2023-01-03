import React from 'react'

function Footer() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-info text-white">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand" href="#">All Departments</a>
          <div className="collapse navbar-collapse text-white" id="navbarTogglerDemo03">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-white">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Store Directory</a>
              </li>
              <li className="nav-item ">
                <a className="nav-link" href="#">Careers</a>
              </li>
              <li className="nav-item">
                <a className="nav-link ">Our Company</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Sell on Walmart.com</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">COVID-19 Vaccine Scheduler</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Product Recalls</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Accessibility</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Tax Exempt Program</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Get the Walmart App</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Request My Personal Information</a>
              </li>
            </ul>
            <p>
              © 2023 Walmart. All Rights Reserved.
            </p>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Footer




