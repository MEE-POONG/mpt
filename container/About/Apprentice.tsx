import Link from 'next/link';
import React from 'react';
import { Col, Nav, Row, Tab } from 'react-bootstrap';
import { AiOutlineInstagram, AiFillFacebook } from 'react-icons/ai';
import { FaFacebookF, FaInstagram, FaLine, FaTiktok, FaTwitter } from 'react-icons/fa';
import { employee } from '@/data/about';
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


                                {/* GEN4 */}
                                <Tab.Pane eventKey="gen4" className='c-purple'>
                                    <div className="row">
                                        <div className="col-lg-4 col-md-6">
                                            <div className="item">
                                                <div className="left-img">
                                                    <img src="/images/meprompt/pond.jpg" alt=""
                                                        style={{ maxHeight: 250, objectFit: "cover" }} />
                                                </div>
                                                <div className="right-content">
                                                    <h4 className='mb-2'>ชลชาติ อินทรสูตร</h4>
                                                    <a href="#">@PangPond</a>
                                                    <h6>
                                                        ตำแหน่ง : <em>นักศึกษาฝึกงาน</em>
                                                    </h6>
                                                    <div className="line-dec" />
                                                    <span className="date">
                                                        <a href="https://www.facebook.com/profile.php?id=100011457973926&mibextid=LQQJ4d"><FaFacebookF size={20} /></a>
                                                        <a href="https://instagram.com/pond_22.op?igshid=OGQ5ZDc2ODk2ZA=="><FaInstagram size={20} /></a>
                                                        <a href="https://line.me/ti/p/rP80-qCwb8"><FaLine size={20} /></a>
                                                        <a href="https://www.tiktok.com/@brandworkaddmin?_t=8eH4iL6NCmm&_r=1"><FaTiktok size={20} /></a>
                                                    </span>
                                               
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <div className="item">
                                                <div className="left-img">
                                                    <img src="/images/meprompt/ken.jpg" alt=""
                                                        style={{ maxHeight: 250, objectFit: "cover" }} />
                                                </div>
                                                <div className="right-content">
                                                    <h4 className='mb-2'>ภูมินันท์ อนันตึก</h4>
                                                    <a href="#">@Ken</a>
                                                    <h6>
                                                        ตำแหน่ง : <em>นักศึกษาฝึกงาน</em>
                                                    </h6>
                                                    <div className="line-dec" />
                                                    <span className="date">
                                                        <a href="https://www.facebook.com/PhuminanAnanthuk/"><FaFacebookF size={20} /></a>
                                                        <a href="https://www.facebook.com/PhuminanAnanthuk/"><FaInstagram size={20} /></a>
                                                        <a href="https://line.me/ti/p/tpWKJB7AIC"><FaLine size={20} /></a>
                                                    </span>
                                               
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <div className="item">
                                                <div className="left-img">
                                                    <img src="/images/meprompt/tiw.jpg" alt=""
                                                        style={{ maxHeight: 250, objectFit: "cover" }} />
                                                </div>
                                                <div className="right-content">
                                                    <h4 className='mb-2'>เวชานนท์ บูรณะ</h4>
                                                    <a href="#">@Tiw</a>
                                                    <h6>
                                                        ตำแหน่ง : <em>นักศึกษาฝึกงาน</em>
                                                    </h6>
                                                    <div className="line-dec" />
                                                    <span className="date">
                                                        <a href="https://www.facebook.com/tiw5678?mibextid=LQQJ4d"><FaFacebookF size={20} /></a>
                                                        <a href="https://line.me/ti/p/RmvRtpOim4"><FaLine size={20} /></a>
                                                    </span>
                                               
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <div className="item">
                                                <div className="left-img">
                                                    <img src="/images/meprompt/tiw.jpg" alt=""
                                                        style={{ maxHeight: 250, objectFit: "cover" }} />
                                                </div>
                                                <div className="right-content">
                                                    <h4 className='mb-2'>อภิสิทธิ์ ศิริอมรวิวัฒน์</h4>
                                                    <a href="#">@Kan</a>
                                                    <h6>
                                                        ตำแหน่ง : <em>นักศึกษาฝึกงาน</em>
                                                    </h6>
                                                    <div className="line-dec" />
                                                    <span className="date">
                                                        <a href="https://www.facebook.com/tiw5678?mibextid=LQQJ4d"><FaFacebookF size={20} /></a>
                                                        <a href="https://line.me/ti/p/RmvRtpOim4"><FaLine size={20} /></a>
                                                    </span>
                                               
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
