import React from 'react';

const TheNavber: React.FC = () => {
  return (

    <>
      <header className="header-area header-sticky">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="main-nav">
                <a href="index" className="logo">
                  <img src="/images/logo.png" alt="" />
                </a>
                <ul className="nav">
                  <li><a href="index" className="active">Home</a></li>
                  <li><a href="explore">Explore</a></li>
                  <li><a href="details">Item Details</a></li>
                  <li><a href="author">Author</a></li>
                  <li><a href="create">Create Yours</a></li>
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
