import Link from 'next/link';
import React from 'react';
import { Col, Nav, Row, Tab } from 'react-bootstrap';
import { AiOutlineInstagram, AiFillFacebook } from 'react-icons/ai';
import { FaFacebookF, FaInstagram, FaLine, FaTiktok, FaTwitter } from 'react-icons/fa';

const Apprentice: React.FC = () => {
    return (
        <div className="container">
            <div className="current-bid">
                <Tab.Container id="left-tabs-example" defaultActiveKey="gen4">
                    <Row>
                        <Col sm={12}>
                            <Nav variant="pills" className="">
                                <Nav.Item bsPrefix="mini-heading">
                                    <div className="title">Apprentice Co-op</div>
                                </Nav.Item>
                                <Nav.Item bsPrefix="mini-heading">
                                    <Nav.Link bsPrefix='select' eventKey="gen1" >Gen 1</Nav.Link>
                                </Nav.Item>
                                <Nav.Item bsPrefix="mini-heading">
                                    <Nav.Link bsPrefix='select' eventKey="gen2" >Gen 2</Nav.Link>
                                </Nav.Item>
                                <Nav.Item bsPrefix="mini-heading">
                                    <Nav.Link bsPrefix='select' eventKey="gen3" >Gen 3</Nav.Link>
                                </Nav.Item>
                                <Nav.Item bsPrefix="mini-heading">
                                    <Nav.Link bsPrefix='select last' eventKey="gen4" >Gen 4</Nav.Link>
                                </Nav.Item>
                                {/* <Nav.Item bsPrefix="mini-heading">
                                    <Nav.Link bsPrefix='select last' eventKey="gen5" >Co-op 5</Nav.Link>
                                </Nav.Item> */}
                            </Nav>
                        </Col>
                        <Col sm={12}>
                            <Tab.Content>
                                <Tab.Pane eventKey="gen1" className='c-purple'>
                                    <Row>
                                        <div className="col-lg-4 col-md-6">
                                            <div className="item">
                                                <div className="left-img">
                                                    <img src="/images/meprompt/g102.jpg" alt=""
                                                        style={{ maxHeight: 250, objectFit: "cover" }} />
                                                </div>
                                                <div className="right-content">
                                                    <h4>วรพล เต็งอินทร์</h4>
                                                    <a href="#">พล</a>
                                                    <div className="line-dec" />
                                                    <h6>
                                                        ตำแหน่ง: <em>นักศึกษาฝึกงาน</em>
                                                    </h6>
                                                    <span className="date">
                                                        <a href="https://web.facebook.com/woraphon.tengin.1"><FaFacebookF size={30} /></a>
                                                        <a href="https://www.instagram.com/phon_xm/"><FaInstagram size={30} /></a>
                                                        <a href="https://www.instagram.com/phon_xm/"><FaLine size={30} /></a>
                                                        <a href="https://www.instagram.com/phon_xm/"><FaTiktok size={30} /></a>
                                                        <a href="https://www.instagram.com/phon_xm/"><FaTwitter size={30} /></a>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <div className="item">
                                                <div className="left-img">
                                                    <img src="/images/meprompt/g103.jpg" alt=""
                                                        style={{ maxHeight: 250, objectFit: "cover" }} />
                                                </div>
                                                <div className="right-content">
                                                    <h4> วีรยุทธ เวสโมราดี้</h4>
                                                    <a href="#">โซฮ์ร็อบ</a>
                                                    <div className="line-dec" />
                                                    <h6>
                                                        ตำแหน่ง: <em>นักศึกษาฝึกงาน</em>
                                                    </h6>
                                                    <span className="date">
                                                        <a href="https://web.facebook.com/weerayutves"><AiFillFacebook size={30} /></a>
                                                        <a href="https://www.instagram.com/sohrobevo/"><AiOutlineInstagram size={30} /></a>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <div className="item">
                                                <div className="left-img">
                                                    <img src="/images/meprompt/g104.jpg" alt=""
                                                        style={{ maxHeight: 250, objectFit: "cover" }} />
                                                </div>
                                                <div className="right-content">
                                                    <h4>สมนัสนนท์ อบมาพันธ์</h4>
                                                    <a href="#">ฟิว</a>
                                                    <div className="line-dec" />
                                                    <h6>
                                                        ตำแหน่ง: <em>นักศึกษาฝึกงาน</em>
                                                    </h6>
                                                    <span className="date">
                                                        <a href="https://web.facebook.com/profile.php?id=100013979175881"><AiFillFacebook size={30} /></a>
                                                        <a href="https://www.instagram.com/manatsanonobmapan/"><AiOutlineInstagram size={30} /></a>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <div className="item">
                                                <div className="left-img">
                                                    <img src="/images/meprompt/g105.jpg" alt=""
                                                        style={{ maxHeight: 250, objectFit: "cover" }} />
                                                </div>
                                                <div className="right-content">
                                                    <h4>สหภาพ นามกระบือ</h4>
                                                    <a href="#">อาร์ม</a>
                                                    <div className="line-dec" />
                                                    <h6>
                                                        ตำแหน่ง: <em>นักศึกษาฝึกงาน</em>
                                                    </h6>
                                                    <span className="date">
                                                        <a href="https://web.facebook.com/arm.sahapap"><AiFillFacebook size={30} /></a>
                                                        <a href="https://www.instagram.com/shp.a2004/?fbclid=IwAR1Se-USVVjd5jUGRAxQGTsi3IgBhIO8YxYPm4SgAUZB5eh21pDzcbbkPx8"><AiOutlineInstagram size={30} /></a>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <div className="item">
                                                <div className="left-img">
                                                    <img src="/images/meprompt/g101.jpg" alt=""
                                                        style={{ height: 250 }} />
                                                </div>
                                                <div className="right-content">
                                                    <h4>อลงกรณ์ ตรงกระโทก</h4>
                                                    <a href="#">โอม</a>
                                                    <div className="line-dec" />
                                                    <h6>
                                                        ตำแหน่ง: <em>นักศึกษาฝึกงาน</em>
                                                    </h6>
                                                    <span className="date">
                                                        <a href="https://web.facebook.com/profile.php?id=100068706235010"><AiFillFacebook size={30} /></a>
                                                        <a href="https://www.instagram.com/badghost_201/"><AiOutlineInstagram size={30} /></a>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="gen2" className='c-purple'>
                                    <div className="row">
                                        <div className="col-lg-4 col-md-6">
                                            <div className="item">
                                                <div className="left-img">
                                                    <img src="/images/meprompt/est.jpg" alt=""
                                                        style={{ maxHeight: 250, objectFit: "cover" }} />
                                                </div>
                                                <div className="right-content">
                                                    <h4 className='mb-2'>ณัฐวีษ์  ตันตระกูล</h4>
                                                    <h6>("เอส")</h6>
                                                    <h6>
                                                        ตำแหน่ง : <em>CEO & Founder</em>
                                                    </h6>
                                                    <div className="line-dec" />
                                                    <span className="date">
                                                        <a href="https://web.facebook.com/woraphon.tengin.1"><FaFacebookF size={20} /></a>
                                                        <a href="https://www.instagram.com/phon_xm/"><FaInstagram size={20} /></a>
                                                        <a href="https://www.instagram.com/phon_xm/"><FaLine size={20} /></a>
                                                        <a href="https://www.instagram.com/phon_xm/"><FaTiktok size={20} /></a>
                                                        <a href="https://www.instagram.com/phon_xm/"><FaTwitter size={20} /></a>
                                                    </span>
                                                    <div className="line-dec" />
                                                    <div className='text-end mt-auto'>
                                                        <Link href={"/about/id"}>{"ดูเพิ่มเนติม"}</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <div className="item">
                                                <div className="left-img">
                                                    <img src="/images/meprompt/chun.jpg" alt=""
                                                        style={{ maxHeight: 250, objectFit: "cover" }} />
                                                </div>
                                                <div className="right-content">
                                                    <h4>วรายุทธ เทกระโทก</h4>
                                                    <a href="#">@SomChun</a>
                                                    <div className="line-dec" />
                                                    <h6>
                                                        <em>C0-Founder</em>
                                                    </h6>
                                                    {/* <span className="date">24/07/2022, 22:00</span> */}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <div className="item">
                                                <div className="left-img">
                                                    <img src="/images/meprompt/ploi.jpg" alt=""
                                                        style={{ maxHeight: 250, objectFit: "cover" }} />
                                                </div>
                                                <div className="right-content">
                                                    <h4>Yasumin Simtama</h4>
                                                    <a href="#">@Yamin</a>
                                                    <div className="line-dec" />
                                                    <h6>
                                                        <em>Developer</em>
                                                    </h6>
                                                    {/* <span className="date">24/07/2022, 22:00</span> */}
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="gen3" className='c-purple'>
                                    <div className="row">
                                        <div className="col-lg-4 col-md-6">
                                            <div className="item">
                                                <div className="left-img">
                                                    <img src="/images/meprompt/est.jpg" alt=""
                                                        style={{ maxHeight: 250, objectFit: "cover" }} />
                                                </div>
                                                <div className="right-content">
                                                    <h4 className='mb-2'>ณัฐวีษ์  ตันตระกูล</h4>
                                                    <h6>("เอส")</h6>
                                                    <h6>
                                                        ตำแหน่ง : <em>CEO & Founder</em>
                                                    </h6>
                                                    <div className="line-dec" />
                                                    <span className="date">
                                                        <a href="https://web.facebook.com/woraphon.tengin.1"><FaFacebookF size={20} /></a>
                                                        <a href="https://www.instagram.com/phon_xm/"><FaInstagram size={20} /></a>
                                                        <a href="https://www.instagram.com/phon_xm/"><FaLine size={20} /></a>
                                                        <a href="https://www.instagram.com/phon_xm/"><FaTiktok size={20} /></a>
                                                        <a href="https://www.instagram.com/phon_xm/"><FaTwitter size={20} /></a>
                                                    </span>
                                                    <div className="line-dec" />
                                                    <div className='text-end mt-auto'>
                                                        <Link href={"/about/id"}>{"ดูเพิ่มเนติม"}</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <div className="item">
                                                <div className="left-img">
                                                    <img src="/images/meprompt/chun.jpg" alt=""
                                                        style={{ maxHeight: 250, objectFit: "cover" }} />
                                                </div>
                                                <div className="right-content">
                                                    <h4>วรายุทธ เทกระโทก</h4>
                                                    <a href="#">@SomChun</a>
                                                    <div className="line-dec" />
                                                    <h6>
                                                        <em>C0-Founder</em>
                                                    </h6>
                                                    {/* <span className="date">24/07/2022, 22:00</span> */}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <div className="item">
                                                <div className="left-img">
                                                    <img src="/images/meprompt/ploi.jpg" alt=""
                                                        style={{ maxHeight: 250, objectFit: "cover" }} />
                                                </div>
                                                <div className="right-content">
                                                    <h4>Yasumin Simtama</h4>
                                                    <a href="#">@Yamin</a>
                                                    <div className="line-dec" />
                                                    <h6>
                                                        <em>Developer</em>
                                                    </h6>
                                                    {/* <span className="date">24/07/2022, 22:00</span> */}
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="gen4" className='c-purple'>
                                    <div className="row">
                                        <div className="col-lg-4 col-md-6">
                                            <div className="item">
                                                <div className="left-img">
                                                    <img src="/images/meprompt/est.jpg" alt=""
                                                        style={{ maxHeight: 250, objectFit: "cover" }} />
                                                </div>
                                                <div className="right-content">
                                                    <h4 className='mb-2'>ณัฐวีษ์  ตันตระกูล</h4>
                                                    <h6>("เอส")</h6>
                                                    <h6>
                                                        ตำแหน่ง : <em>CEO & Founder</em>
                                                    </h6>
                                                    <div className="line-dec" />
                                                    <span className="date">
                                                        <a href="https://web.facebook.com/woraphon.tengin.1"><FaFacebookF size={20} /></a>
                                                        <a href="https://www.instagram.com/phon_xm/"><FaInstagram size={20} /></a>
                                                        <a href="https://www.instagram.com/phon_xm/"><FaLine size={20} /></a>
                                                        <a href="https://www.instagram.com/phon_xm/"><FaTiktok size={20} /></a>
                                                        <a href="https://www.instagram.com/phon_xm/"><FaTwitter size={20} /></a>
                                                    </span>
                                                    <div className="line-dec" />
                                                    <div className='text-end mt-auto'>
                                                        <Link href={"/about/id"}>{"ดูเพิ่มเนติม"}</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <div className="item">
                                                <div className="left-img">
                                                    <img src="/images/meprompt/chun.jpg" alt=""
                                                        style={{ maxHeight: 250, objectFit: "cover" }} />
                                                </div>
                                                <div className="right-content">
                                                    <h4>วรายุทธ เทกระโทก</h4>
                                                    <a href="#">@SomChun</a>
                                                    <div className="line-dec" />
                                                    <h6>
                                                        <em>C0-Founder</em>
                                                    </h6>
                                                    {/* <span className="date">24/07/2022, 22:00</span> */}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <div className="item">
                                                <div className="left-img">
                                                    <img src="/images/meprompt/ploi.jpg" alt=""
                                                        style={{ maxHeight: 250, objectFit: "cover" }} />
                                                </div>
                                                <div className="right-content">
                                                    <h4>Yasumin Simtama</h4>
                                                    <a href="#">@Yamin</a>
                                                    <div className="line-dec" />
                                                    <h6>
                                                        <em>Developer</em>
                                                    </h6>
                                                    {/* <span className="date">24/07/2022, 22:00</span> */}
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </div>
        </div>

    );
}

export default Apprentice;
