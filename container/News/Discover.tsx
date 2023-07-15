/* eslint-disable @next/next/no-img-element */
import React from 'react';

const NewsDiscover: React.FC = () => {
  return (
    <div className="discover-items">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="section-heading">
              <div className="line-dec" />
              <h2>
                Discover Some Of Our <em>Items</em>.
              </h2>
            </div>
          </div>
          <div className="col-lg-7">
            <form
              id="search-form"
              name="gs"
              method="submit"
              role="search"
              action="#"
            >
              <div className="row">
                <div className="col-lg-4">
                  <fieldset>
                    <input
                      type="text"
                      name="keyword"
                      className="searchText"
                      placeholder="Type Something..."
                      autoComplete="on"
                      required
                    />
                  </fieldset>
                </div>
                <div className="col-lg-3">
                  <fieldset>
                    <select
                      name="Category"
                      className="form-select"
                      aria-label="Default select example"
                      id="chooseCategory"
                    // onChange="this.form.click()"
                    >
                      <option >All Categories</option>
                      <option value="Music">
                        Music
                      </option>
                      <option value="Digital">Digital</option>
                      <option value="Blockchain">Blockchain</option>
                      <option value="Virtual">Virtual</option>
                    </select>
                  </fieldset>
                </div>
                <div className="col-lg-3">
                  <fieldset>
                    <select
                      name="Price"
                      className="form-select"
                      aria-label="Default select example"
                      id="chooseCategory"
                    >
                      <option >Available</option>
                      <option value="Ending-Soon">Ending Soon</option>
                      <option value="Coming-Soon">Coming Soon</option>
                      <option value="Closed">Closed</option>
                    </select>
                  </fieldset>
                </div>
                <div className="col-lg-2">
                  <fieldset>
                    <button className="main-button">Search</button>
                  </fieldset>
                </div>
              </div>
            </form>
          </div>
          <div className="col-lg-6">
            <div className="item">
              <div className="row">
                <div className="col-lg-12">
                  <span className="banner">ข่าวใหม่</span>
                </div>
                <div className="col-lg-12 col-sm-6">
                  <span className="author">
                    <img
                      src="/images/author.jpg"
                      alt=""
                      style={{ maxWidth: 50, maxHeight: 0, borderRadius: "50%" }}
                    />
                  </span>
                  <img
                    src="https://images.axios.com/kidB2KMguu9yWr0oDdoIfR2sxJg=/0x0:2160x1215/1920x1080/2023/07/13/1689255076236.png?w=1920"
                    alt=""
                    style={{ borderRadius: 20 }}
                  />
                  <h4>Mutant Ape Bored</h4>
                </div>
                {/* <div className="col-lg-6 col-sm-6">
                  <span className="author">
                    <img
                      src="/images/author.jpg"
                      alt=""
                      style={{ maxWidth: 50, maxHeight: 50, borderRadius: "50%" }}
                    />
                  </span>
                  <img
                    src="https://image.springnews.co.th/uploads/images/md/2023/07/K2YKeUzYHCtxeG8Wj3Fi.webp?x-image-process=style/lg"
                    alt=""
                    style={{ borderRadius: 20 }}
                  />
                  <h4>His Other Half</h4>
                </div> */}
                <div className="col-lg-12">
                  <div className="line-dec" />
                  <div className="row">
                    <div className="col-lg-3 col-sm-6">
                      <span>
                        Current Bid: <br /> <strong>8.16 ETH</strong>
                      </span>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                      <span>
                        Category: <br /> <strong>Digital Art</strong>
                      </span>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                      <span>
                        Collection:: <br /> <strong>2/2</strong>
                      </span>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                      <span>
                        Ends In: <br /> <strong>25th Nov</strong>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="main-button">
                    <a href="https://www.axios.com/2023/07/13/ap-openai-news-sharing-tech-deal" target='blank'>อ่านต่อ</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="item">
              <div className="row">
                <div className="col-lg-12">
                  <span className="author">
                    <img
                      src="/images/author.jpg"
                      alt=""
                      style={{ maxWidth: 50, maxHeight: 50, borderRadius: "50%" }}
                    />
                  </span>
                  <img
                    src="https://www.aljazeera.com/wp-content/uploads/2023/07/2023-07-04T143052Z_1216481558_RC2EW1AV5ET6_RTRMADP_3_META-THREADS-1688626945.jpg?resize=770%2C513&quality=80"
                    alt=""
                    style={{ borderRadius: 20 }}
                  />
                  <h4>Genesis Meta Boom</h4>
                </div>
                <div className="col-lg-12">
                  <div className="line-dec" />
                  <div className="row">
                    <div className="col-6">
                      <span>
                        Current Bid: <br /> <strong>5.15 ETH</strong>
                      </span>
                    </div>
                    <div className="col-6">
                      <span>
                        Ends In: <br /> <strong>26th Nov</strong>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="main-button">
                    <a href="https://www.aljazeera.com/news/2023/7/6/is-metas-new-threads-more-than-a-twitter-copycat" target='blank'>อ่านต่อ</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="item">
              <div className="row">
                <div className="col-lg-12">
                  <span className="author">
                    <img
                      src="/images/author.jpg"
                      alt=""
                      style={{ maxWidth: 50, maxHeight: 50, borderRadius: "50%" }}
                    />
                  </span>
                  <img
                    src="https://image.springnews.co.th/uploads/images/md/2023/07/K2YKeUzYHCtxeG8Wj3Fi.webp?x-image-process=style/lg"
                    alt=""
                    style={{ borderRadius: 20, maxHeight: 200 }}
                  />
                  <h4>Another Half Ape</h4>
                </div>
                <div className="col-lg-12">
                  <div className="line-dec" />
                  <div className="row">
                    <div className="col-6">
                      <span>
                        Current Bid: <br /> <strong>3.63 ETH</strong>
                      </span>
                    </div>
                    <div className="col-6">
                      <span>
                        Ends In: <br /> <strong>24th Nov</strong>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="main-button">
                    <a href="details.html">อ่านต่อ</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="item">
              <div className="row">
                <div className="col-lg-12">
                  <span className="author">
                    <img
                      src="/images/author.jpg"
                      alt=""
                      style={{ maxWidth: 50, maxHeight: 50, borderRadius: "50%" }}
                    />
                  </span>
                  <img
                    src="https://image.springnews.co.th/uploads/images/md/2023/02/afbQO5wCGbdRQwqxea2c.webp?x-image-process=style/lg"
                    alt=""
                    style={{ borderRadius: 20 }}
                  />
                  <h4>Pixel Sand Box</h4>
                </div>
                <div className="col-lg-12">
                  <div className="line-dec" />
                  <div className="row">
                    <div className="col-6">
                      <span>
                        Current Bid: <br /> <strong>4.68 ETH</strong>
                      </span>
                    </div>
                    <div className="col-6">
                      <span>
                        Ends In: <br /> <strong>28th Nov</strong>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="main-button">
                    <a href="https://www.springnews.co.th/digital-tech/metaverse/835289" target='blank'>อ่านต่อ</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="item">
              <div className="row">
                <div className="col-lg-12">
                  <span className="author">
                    <img
                      src="/images/author.jpg"
                      alt=""
                      style={{ maxWidth: 50, maxHeight: 50, borderRadius: "50%" }}
                    />
                  </span>
                  <img
                    src="https://image.springnews.co.th/uploads/images/md/2023/07/PJc1UcJhe0NnplQIJaWM.webp?x-image-process=style/lg"
                    alt=""
                    style={{ borderRadius: 20 }}
                  />
                  <h4>Another Half Ape</h4>
                </div>
                <div className="col-lg-12">
                  <div className="line-dec" />
                  <div className="row">
                    <div className="col-6">
                      <span>
                        Current Bid: <br /> <strong>2.03 ETH</strong>
                      </span>
                    </div>
                    <div className="col-6">
                      <span>
                        Ends In: <br /> <strong>25th Nov</strong>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="main-button">
                    <a href="https://www.springnews.co.th/digital-business/digital-marketing/840885" target='blank'>อ่านต่อ</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="item">
              <div className="row">
                <div className="col-lg-12">
                  <span className="author">
                    <img
                      src="/images/author.jpg"
                      alt=""
                      style={{ maxWidth: 50, maxHeight: 50, borderRadius: "50%" }}
                    />
                  </span>
                  <img
                    src="https://image.springnews.co.th/uploads/images/md/2023/07/i0VIYMSOg8Tmbm8ffppg.webp?x-image-process=style/lg"
                    alt=""
                    style={{ borderRadius: 20 }}
                  />
                  <h4>Invisible NFT Land</h4>
                </div>
                <div className="col-lg-12">
                  <div className="line-dec" />
                  <div className="row">
                    <div className="col-6">
                      <span>
                        Current Bid: <br /> <strong>2.03 ETH</strong>
                      </span>
                    </div>
                    <div className="col-6">
                      <span>
                        Ends In: <br /> <strong>25th Nov</strong>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="main-button">
                    <a href="https://www.springnews.co.th/digital-business/digital-marketing/840649" target='blank'>อ่านต่อ</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="item">
              <div className="row">
                <div className="col-lg-12">
                  <span className="author">
                    <img
                      src="/images/author.jpg"
                      alt=""
                      style={{ maxWidth: 50, maxHeight: 50, borderRadius: "50%" }}
                    />
                  </span>
                  <img
                    src="https://image.springnews.co.th/uploads/images/md/2023/07/UHJRLGpTlYIXM4EVxCbU.webp?x-image-process=style/lg"
                    alt=""
                    style={{ borderRadius: 20 }}
                  />
                  <h4>Another Half Ape</h4>
                </div>
                <div className="col-lg-12">
                  <div className="line-dec" />
                  <div className="row">
                    <div className="col-6">
                      <span>
                        Current Bid: <br /> <strong>2.64 ETH</strong>
                      </span>
                    </div>
                    <div className="col-6">
                      <span>
                        Ends In: <br /> <strong>25th Nov</strong>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="main-button">
                    <a href="https://www.springnews.co.th/digital-business/digital-marketing/840603" target='blank'>อ่านต่อ</a>
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

export default NewsDiscover;
