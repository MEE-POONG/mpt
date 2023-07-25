import Link from 'next/link';
import React from 'react';
import { Col, Nav, Row, Tab } from 'react-bootstrap';
import { AiOutlineInstagram, AiFillFacebook } from 'react-icons/ai';
import { FaFacebookF, FaInstagram, FaLine, FaTiktok, FaTwitter } from 'react-icons/fa';

const ItemDetails: React.FC = () => {
    return (
        <div className="container">
            <div className="current-bid">
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col sm={12}>
                            <Nav variant="pills" className="">
                                <Nav.Item bsPrefix="mini-heading">
                                    <div className="title">Employee ( Team MePrompt )</div>
                                </Nav.Item>
                                <Nav.Item bsPrefix="mini-heading">
                                    <Nav.Link bsPrefix='select last' eventKey="first" >Active</Nav.Link>
                                </Nav.Item>
                                {/* <Nav.Item bsPrefix="mini-heading">
                                    <Nav.Link bsPrefix='select last' eventKey="second">Tab 2</Nav.Link>
                                </Nav.Item> */}
                            </Nav>
                        </Col>
                        <Col sm={12}>
                            <Tab.Content>
                                <Tab.Pane eventKey="first" className='c-purple'>
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

export default ItemDetails;
