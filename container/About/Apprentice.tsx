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
                            <Nav variant="pills" className="justify-content-center">
                                <Nav.Item bsPrefix="mini-heading">
                                    <div className="title">Apprentice Co-op</div>
                                </Nav.Item>
                                <Nav.Item bsPrefix="mini-heading">
                                    <Nav.Link bsPrefix='select' eventKey="gen1" >1</Nav.Link>
                                </Nav.Item>
                                <Nav.Item bsPrefix="mini-heading">
                                    <Nav.Link bsPrefix='select' eventKey="gen2" >2</Nav.Link>
                                </Nav.Item>
                                <Nav.Item bsPrefix="mini-heading">
                                    <Nav.Link bsPrefix='select' eventKey="gen3" >3</Nav.Link>
                                </Nav.Item>
                                <Nav.Item bsPrefix="mini-heading">
                                    <Nav.Link bsPrefix='select last' eventKey="gen4" >4</Nav.Link>
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

export default Apprentice;
