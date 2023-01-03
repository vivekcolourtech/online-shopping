import React from 'react';
import shoes from '../component/Photes/shoes.jpg';
import hairphone from '../component/Photes/hair phone.jpg';

function Home() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-5">
          <div className="list-group">
            <a href="#" className="list-group-item list-group-item-action active" aria-current="true">
              The current link item
            </a>
            <a href="#" className="list-group-item list-group-item-action">A second link item</a>
            <a href="#" className="list-group-item list-group-item-action">A third link item</a>
            <a href="#" className="list-group-item list-group-item-action">A fourth link item</a>
            <a className="list-group-item list-group-item-action disabled">A disabled link item</a>
          </div>
        </div>
        <div className="col-sm-7">
          <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
              <div className="card">
                <img src={shoes} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img src={hairphone} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                  This is a longer card with supporting text below as a natural lead-in to additional content.
                  This content is a little bit longer.</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img src={shoes} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.ead-in to additional content.</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img src={hairphone} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img src={shoes} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img src={shoes} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img src={hairphone} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img src={hairphone} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img src={shoes} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home