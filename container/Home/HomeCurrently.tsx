import React from 'react';

const HomeCurrently: React.FC = () => {
  return (
    <div className="currently-market">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="section-heading">
              <div className="line-dec" />
              <h2>
                <em>Items</em> Currently In The Market.
              </h2>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="filters">
              <ul>
                <li data-filter="*" className="active">
                  All Items
                </li>
                <li data-filter=".msc">Music Art</li>
                <li data-filter=".dig">Digital Art</li>
                <li data-filter=".blc">Blockchain</li>
                <li data-filter=".vtr">Virtual</li>
              </ul>
            </div>
          </div>

          <div className=' col-lg-12'>
            <div className='row g-2'>
              <div className="col-lg-6">
              <div className="card mb-3 item" >
                <div className="row">
                  <div className="col-md-4 text-center ">
                    <img
                      src="/images/market-01.jpg"
                      alt=""
                      style={{ borderRadius: 20, minHeight: 195, minWidth: 195 }}
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body right-content">
                      <h4 className="card-title">Music Art Super Item</h4>
                      <span className="author">
                        <img
                          src="/images/author.jpg"
                          alt=""
                          style={{ maxWidth: 50, borderRadius: "50%" }}
                        />
                        <h6>
                          Liberty Artist
                          <br />
                          <a href="#">@libertyart</a>
                        </h6>
                      </span>
                      <div className="card-text line-dec">
                        <span className="bid">
                          Current Bid
                          <br />
                          <strong>2.03 ETH</strong>
                          <br />
                          <em>($8,240.50)</em>
                        </span>
                        <span className="ends">
                          Ends In
                          <br />
                          <strong>4D 08H 15M 42S</strong>
                          <br />
                          <em>(July 24th, 2022)</em>
                          <div className='text-button'>
                            <a href="details">View Item Details</a>
                          </div>
                        </span>

                      </div>

                    </div>

                  </div>
                </div>
              </div>
              </div>
              <div  className="col-lg-6">
              <div className="card mb-3 item" >
                <div className="row">
                  <div className="col-md-4 text-center ">
                    <img
                      src="/images/market-01.jpg"
                      alt=""
                      style={{ borderRadius: 20, minHeight: 185, minWidth: 185 }}
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body right-content">
                      <h4 className="card-title">Music Art Super Item</h4>
                      <span className="author">
                        <img
                          src="/images/author.jpg"
                          alt=""
                          style={{ maxWidth: 50, borderRadius: "50%" }}
                        />
                        <h6>
                          Liberty Artist
                          <br />
                          <a href="#">@libertyart</a>
                        </h6>
                      </span>
                      <div className="card-text line-dec">
                        <span className="bid">
                          Current Bid
                          <br />
                          <strong>2.03 ETH</strong>
                          <br />
                          <em>($8,240.50)</em>
                        </span>
                        <span className="ends">
                          Ends In
                          <br />
                          <strong>4D 08H 15M 42S</strong>
                          <br />
                          <em>(July 24th, 2022)</em>
                          <div className='text-button'>
                            <a href="details">View Item Details</a>
                          </div>
                        </span>

                      </div>

                    </div>

                  </div>
                </div>
              </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>


  );
}

export default HomeCurrently;
