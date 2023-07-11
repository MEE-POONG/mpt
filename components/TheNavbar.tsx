import React from 'react';

const TheNavber: React.FC = () => {
  return (

    <>
      <header className="header-area header-sticky">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="main-nav">
                <a href="index.html" className="logo">
                  <img src="/images/logo.png" alt="" />
                </a>
                <ul className="nav">
                  <li><a href="index.html" className="active">Home</a></li>
                  <li><a href="explore.html">Explore</a></li>
                  <li><a href="details.html">Item Details</a></li>
                  <li><a href="author.html">Author</a></li>
                  <li><a href="create.html">Create Yours</a></li>
                </ul>
                <a className='menu-trigger'>
                  <span>Menu</span>
                </a>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default TheNavber;
