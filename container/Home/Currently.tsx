import React, { useContext } from 'react';
import Link from 'next/link';
import { LanguageContext } from '@/components/Language/LanguageContext';
import { Col, Row } from 'react-bootstrap';

const Currently: React.FC = () => {
  const { currentLanguage } = useContext(LanguageContext);

  return (
    <div className="currently-market">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="section-heading">
              <div className="line-dec" />
              <h2>
                <em>News Update</em>
              </h2>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="filters">
              <ul>
                <li className="active">
                  <Link href="news" className='text-white'>
                    {currentLanguage === "TH" ? "ทั้งหมด" : "ALL"}
                  </Link>
                </li>
                <li data-filter=".msc">
                  <Link href="news" className='text-white'>
                    {currentLanguage === "TH" ? "ข่าว" : "News"}
                  </Link>
                </li>
                <li data-filter=".msc">
                  <Link href="news" className='text-white'>
                    {currentLanguage === "TH" ? "ประชาสัมพันธ์" : "ข่าว"}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="row grid">
              <div className="col-lg-6 currently-market-item all msc">
                <div className="item">
                  <Row>
                    <Col md="5" lg="4">
                      <div className="left-image">
                        <img
                          src="https://assets.beartai.com/uploads/2023/07/play-services.jpg"
                          alt=""
                          style={{ borderRadius: 20, objectFit: 'cover', width: '100%'                                                                                                                                                                                                                                                                                                                    }}
                        />
                      </div>
                    </Col>
                    <Col md="7" lg="8">
                      <div className="right-content">
                        <h4 className='truncate-2'>Android 14 จะแจ้งเตือนหากติดตั้ง/อัปเดตแอปนอก Play Store</h4>
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
                        <div className="line-dec" />
                        <span className="bid">
                          Source By
                          <br />
                          <strong>Beartai</strong>
                          <br />
                          {/* <em>($8,240.50)</em> */}
                        </span>
                        <span className="ends">
                          Date
                          <br />
                          <strong>July 24th, 2022</strong>
                          <br />
                          {/* <em>(July 24th, 2022)</em> */}
                        </span>
                        <div className="text-button">
                          <a href="https://www.beartai.com/news/1280769">View Details</a>
                        </div>
                      </div>
                    </Col>
                  </Row>

                </div>
              </div>
              <div className="col-lg-6 currently-market-item all dig">

                <div className="item">
                  <div className="left-image">
                    <img
                      src="https://assets.beartai.com/uploads/2023/07/Threads-1-2.jpg"
                      alt=""
                    />
                  </div>
                  <div className="right-content">
                    <h4 className='truncate-2'>Meta ยืนยันมีการบล็อก Threads จากผู้ใช้ในโซนยุโรปจริง แม้จะใช้ VPN ก็ไม่รอด</h4>
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
                    <div className="line-dec" />
                    <span className="bid">
                      Source By
                      <br />
                      <strong>Beartai</strong>
                      <br />
                      {/* <em>($7,200.50)</em> */}
                    </span>
                    <span className="ends">
                      Date
                      <br />
                      <strong>July 26th, 2022</strong>
                      <br />
                      {/* <em>(July 26th, 2022)</em> */}
                    </span>
                    <div className="text-button">
                      <a href="https://www.beartai.com/news/itnews/1280282">View Details</a>
                    </div>
                  </div>
                </div>


                <div className="item">
                  <div className="left-image">
                    <img
                      src="https://assets.beartai.com/uploads/2023/07/Threads-1-2.jpg"
                      height="310px"
                      width="185px"
                      alt=""
                      style={{ borderRadius: 20, minWidth: 195, objectFit: 'cover', width: '185px', height: "310px" }}
                    />
                  </div>
                  <div className="right-content">
                    <h4 className='truncate-2'>Meta ยืนยันมีการบล็อก Threads จากผู้ใช้ในโซนยุโรปจริง แม้จะใช้ VPN ก็ไม่รอด</h4>
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
                    <div className="line-dec" />
                    <span className="bid">
                      Source By
                      <br />
                      <strong>Beartai</strong>
                      <br />
                      {/* <em>($7,200.50)</em> */}
                    </span>
                    <span className="ends">
                      Date
                      <br />
                      <strong>July 26th, 2022</strong>
                      <br />
                      {/* <em>(July 26th, 2022)</em> */}
                    </span>
                    <div className="text-button">
                      <a href="https://www.beartai.com/news/itnews/1280282">View Details</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 currently-market-item all blc">
                <div className="item">
                  <div className="left-image">
                    <img
                      src="https://store-images.s-microsoft.com/image/apps.7974.9007199266244427.4d45042b-d7a5-4a83-be66-97779553b24d.215801a3-276c-4459-bfcb-047b6cd1bb5c"
                      height="310px"
                      width="185px"
                      alt=""
                      style={{ borderRadius: 20, minWidth: 195, objectFit: 'cover' }}
                    />
                  </div>
                  <div className="right-content">
                    <h4 className='truncate-2'>Elon Musk เผยกระแสเงินสดของ Twitter ยังคงติดลบเนื่องจากรายได้จากโฆษณาลดลง</h4>
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
                    <div className="line-dec" />
                    <span className="bid">
                      Source By
                      <br />
                      <strong>Beartai</strong>
                      <br />
                      {/* <em>($6,600.00)</em> */}
                    </span>
                    <span className="ends">
                      Date
                      <br />
                      <strong>July 28th, 2022</strong>
                      <br />
                      {/* <em>(July 28th, 2022)</em> */}
                    </span>
                    <div className="text-button">
                      <a href="https://www.beartai.com/news/itnews/1280067">View Details</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 currently-market-item all vtr">
                <div className="item">
                  <div className="left-image">
                    <img
                      src="https://static.vecteezy.com/system/resources/previews/021/059/827/original/chatgpt-logo-chat-gpt-icon-on-white-background-free-vector.jpg"
                      height="310px"
                      width="185px"
                      alt=""
                      style={{ borderRadius: 20, minWidth: 195, objectFit: 'cover', width: '185px', height: "310px" }}
                    />
                  </div>
                  <div className="right-content">
                    <h4 className='truncate-2'>ปัญหา ‘AI กินกันเอง’ ภัยใหม่ที่ลดความน่าเชื่อถือของ AI</h4>
                    <span className="author">
                      <img
                        src="/images/author.jpg"
                        alt=""
                        style={{ maxWidth: 50, borderRadius: "50%", objectFit: 'cover' }}
                      />
                      <h6>
                        Liberty Artist
                        <br />
                        <a href="#">@libertyart</a>
                      </h6>
                    </span>
                    <div className="line-dec" />
                    <span className="bid">
                      Source By
                      <br />
                      <strong>1234</strong>
                      <br />
                      {/* <em>($8,800.50)</em> */}
                    </span>
                    <span className="ends">
                      Date
                      <br />
                      <strong>July 14th, 2022</strong>
                      <br />
                      {/* <em>(July 14th, 2022)</em> */}
                    </span>
                    <div className="text-button">
                      <a href="https://www.beartai.com/news/itnews/1279937">View Item Details</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 currently-market-item all vrt dig">
                <div className="item">
                  <div className="left-image">
                    <img
                      src="https://help.apple.com/assets/640A52196275DE31D4371B5E/640A52226275DE31D4371B8B/th_TH/9487046c60dfa0ba3083d7f724cc1f78.png"
                      height="310px"
                      width="185px"
                      alt=""
                      style={{ borderRadius: 20, minWidth: 195, objectFit: 'cover', width: '185px', height: "310px" }}
                    />
                  </div>
                  <div className="right-content">
                    <h4 className='truncate-2'>ไทยโดนเมินไปอีกหนึ่งรอบ Apple เตรียมเปิดบริการ Apple Pay ในประเทศเวียดนาม</h4>
                    <span className="author">
                      <img
                        src="/images/author.jpg"
                        alt=""
                        style={{ maxWidth: 50, borderRadius: "50%" }}
                      />
                      <h6>
                        Liberty Artist
                        <br />
                        <a href="#">@libertyar  t</a>
                      </h6>
                    </span>
                    <div className="line-dec" />
                    <span className="bid">
                      Source By
                      <br />
                      <strong>Beartai</strong>
                      <br />
                      {/* <em>($8,400.50)</em> */}
                    </span>
                    <span className="ends">
                      Date
                      <br />
                      <strong>July 16th, 2022</strong>
                      <br />
                      {/* <em>(July 16th, 2022)</em> */}
                    </span>
                    <div className="text-button">
                      <a href="https://www.beartai.com/news/itnews/1279344">View Details</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 currently-market-item all msc blc">
                <div className="item">
                  <div className="left-image">
                    <img
                      src="https://helios-i.mashable.com/imagery/articles/03g4OszXkMYYDLHrpfTgd36/hero-image.fill.size_1248x702.v1689321426.jpg"
                      alt=""
                      style={{ borderRadius: 20, minWidth: 195, objectFit: 'cover', width: '185px', height: "310px" }}
                    />
                  </div>
                  <div className="right-content">
                    <h4 className='truncate-2'>หนึ่งในชุมชนที่ใหญ่ที่สุดบน Reddit โน้มน้าวให้ผู้ใช้ย้ายไป Discord และแพลตฟอร์มอื่น</h4>
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
                    <div className="line-dec" />
                    <span className="bid">
                      Source By
                      <br />
                      <strong>Beartai</strong>
                      <br />
                      {/* <em>($8,200.50)</em> */}
                    </span>
                    <span className="ends">
                      Date
                      <br />
                      <strong>July 18th, 2022</strong>
                      <br />
                      {/* <em>(July 18th, 2022)</em> */}
                    </span>
                    <div className="text-button">
                      <a href="https://www.beartai.com/news/itnews/1279172">View Details</a>
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

export default Currently;
