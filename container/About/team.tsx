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
                            <Nav variant="pills" className="justify-content-center">
                                <Nav.Item bsPrefix="mini-heading">
                                    <div className="title">Employee</div>
                                </Nav.Item>
                                <Nav.Item bsPrefix="mini-heading">
                                    <Nav.Link bsPrefix='select last' eventKey="first" >( Team MePrompt )</Nav.Link>
                                </Nav.Item>
                                {/* <Nav.Item bsPrefix="mini-heading">
                                    <Nav.Link bsPrefix='select last' eventKey="second">Tab 2</Nav.Link>
                                </Nav.Item> */}
                            </Nav>
                        </Col>
                        <Col sm={12}>
                            <Tab.Content>
                                <Tab.Pane eventKey="first" className='c-purple'>
                                    <Row>
                                        <div className="col-xl-4 col-lg-6 col-md-6">
                                            <div className="item">
                                                <div className="left-img">
                                                    <img src="/images/meprompt/est.jpg" alt=""
                                                        style={{ maxHeight: 250, objectFit: "cover" }} />
                                                </div>
                                                <div className="right-content">
                                                    <h4 className='mb-3 text-center'>
                                                        ณัฐวีษ์  ตันตระกูล
                                                    </h4>
                                                    <h6>
                                                        ชื่อเล่น : <em>("เอส")</em>
                                                    </h6>
                                                    <h6>
                                                        ตำแหน่ง : <em>CEO & Founder</em>
                                                    </h6>
                                                    <div className="line-dec" />
                                                    <span className="date">
                                                        <a href="https://web.facebook.com/woraphon.tengin.1"><FaFacebookF size={25} /></a>
                                                        <a href="https://www.instagram.com/phon_xm/"><FaInstagram size={25} /></a>
                                                        <a href="https://www.instagram.com/phon_xm/"><FaLine size={25} /></a>
                                                        <a href="https://www.instagram.com/phon_xm/"><FaTiktok size={25} /></a>
                                                        <a href="https://www.instagram.com/phon_xm/"><FaTwitter size={25} /></a>
                                                    </span>
                                                    <div className="line-dec" />
                                                    {/* <div className='text-end mt-auto'>
                                                        <Link href={"/about/id"}>{"ดูเพิ่มเนติม"}</Link>
                                                    </div> */}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-lg-6 col-md-6">
                                            <div className="item">
                                                <div className="left-img">
                                                    <img src="/images/meprompt/chun.jpg" alt=""
                                                        style={{ maxHeight: 250, objectFit: "cover" }} />
                                                </div>
                                                <div className="right-content">
                                                    <h4 className='mb-3 text-center'>
                                                        วรายุทธ เทกระโทก
                                                    </h4>
                                                    <h6>
                                                        ชื่อเล่น : <em>(ส้มฉุน)</em>
                                                    </h6>
                                                    <h6>
                                                        ตำแหน่ง : <em>C0-Founder</em>
                                                    </h6>
                                                    <div className="line-dec" />
                                                    <span className="date">
                                                        <a href="https://web.facebook.com/woraphon.tengin.1"><FaFacebookF size={25} /></a>
                                                        <a href="https://www.instagram.com/phon_xm/"><FaInstagram size={25} /></a>
                                                        <a href="https://www.instagram.com/phon_xm/"><FaLine size={25} /></a>
                                                        <a href="https://www.instagram.com/phon_xm/"><FaTiktok size={25} /></a>
                                                        <a href="https://www.instagram.com/phon_xm/"><FaTwitter size={25} /></a>
                                                    </span>
                                                    <div className="line-dec" />
                                                    {/* <div className='text-end mt-auto'>
                                                        <Link href={"/about/id"}>{"ดูเพิ่มเนติม"}</Link>
                                                    </div> */}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-lg-6 col-md-6">
                                            <div className="item">
                                                <div className="left-img">
                                                    <img src="/images/meprompt/ploi.jpg" alt=""
                                                        style={{ maxHeight: 250, objectFit: "cover" }} />
                                                </div>
                                                <div className="right-content">
                                                    <h4 className='mb-3 text-center'>
                                                        Yasumin Simtama
                                                    </h4>
                                                    <h6>
                                                        ชื่อเล่น : <em>(@Yamin)</em>
                                                    </h6>
                                                    <h6>
                                                        ตำแหน่ง : <em>Developer</em>
                                                    </h6>
                                                    <div className="line-dec" />
                                                    <span className="date">
                                                        <a href="https://web.facebook.com/woraphon.tengin.1"><FaFacebookF size={25} /></a>
                                                        <a href="https://www.instagram.com/phon_xm/"><FaInstagram size={25} /></a>
                                                        <a href="https://www.instagram.com/phon_xm/"><FaLine size={25} /></a>
                                                        <a href="https://www.instagram.com/phon_xm/"><FaTiktok size={25} /></a>
                                                        <a href="https://www.instagram.com/phon_xm/"><FaTwitter size={25} /></a>
                                                    </span>
                                                    <div className="line-dec" />
                                                    {/* <div className='text-end mt-auto'>
                                                        <Link href={"/about/id"}>{"ดูเพิ่มเนติม"}</Link>
                                                    </div> */}
                                                </div>
                                            </div>
                                        </div>
                                    </Row>
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
