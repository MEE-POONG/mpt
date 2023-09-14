import Link from "next/link";
import React from "react";
import { Card, Col, Nav, Row, Tab } from "react-bootstrap";
import { AiOutlineInstagram, AiFillFacebook } from "react-icons/ai";
import {
  FaFacebookF,
  FaInstagram,
  FaLine,
  FaTiktok,
  FaTwitter,
} from "react-icons/fa";
import { employee } from "@/data/about";

const ItemDetails: React.FC = () => {
  return (
    <div className="container">
      <div className="current-bid">
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={12}>
              <Nav variant="pills" className="">
                <Nav.Item bsPrefix="mini-heading">
                  <div className="title fw-normal">Employee ( Team MePrompt )</div>
                </Nav.Item>
                <Nav.Item bsPrefix="mini-heading">
                  <Nav.Link bsPrefix="select last fw-normal" eventKey="first">
                    Active
                  </Nav.Link>
                </Nav.Item>
                {/* <Nav.Item bsPrefix="mini-heading">
                                    <Nav.Link bsPrefix='select last' eventKey="second">Tab 2</Nav.Link>
                                </Nav.Item> */}
              </Nav>
            </Col>
            <Col sm={12}>
              <Tab.Content>
                <Tab.Pane eventKey="first" className="c-purple">
                  <div className="row">
                    {employee.map((emp) => (
                      <div key={emp?.id} className="col-lg-4 col-md-6">
                        <div className="item">
                          <div className="left-img">
                            {/* แสดงรูปภาพของพนักงาน */}
                            <img
                              src={emp?.picture}
                              alt={emp?.firstName?.EN}
                              style={{ width: "150px", height: 250, objectFit: "cover", }}
                            />
                          </div>
                          <div className="right-content">
                            {/* แสดงชื่อและนามสกุล */}
                            <h4>{emp?.firstName?.TH}</h4>
                            {/* แสดงชื่อเล่น */}
                            <a href="#">{emp?.nickName.TH}</a>
                            <div className="line-dec" />
                            {/* แสดงตำแหน่งงาน */}
                            <h6>
                              ตำแหน่ง: <em>{emp?.position.TH}</em>
                            </h6>
                            {/* แสดงหน้าที่ของพนักงาน */}
                            <h6>
                              หน้าที่: <em>{emp?.duty.TH}</em>
                            </h6>
                            {/* แสดงลิงค์โซเชียลมีเดีย */}
                            <span className="date">
                              <a href={emp?.facebook}>
                                <FaFacebookF size={30} />
                              </a>
                              <a href={emp?.instagram}>
                                <FaInstagram size={30} />
                              </a>
                              {/* แสดงลิงค์โซเชียลมีเดียอื่น ๆ ตามต้องการ */}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                    {employee.map((emp) => (
                      <div key={emp?.id} className="col-lg-4 col-md-6">
                        <Card className="item" style={{ borderRadius: "20px" }}>
                          <Row className="no-gutters">
                            <Col md="5" className="pe-0">
                              <Card.Img
                                className="w-100 rounded-0 object-fit-cover"
                                height={250}
                                src={emp?.picture}
                                alt={emp?.firstName?.EN}
                              />
                            </Col>
                            <Col md="7" className="ps-0">
                              <Card.Body>
                                <h5>{emp?.firstName?.TH}</h5>
                                {/* <h5 className="card-title">Card title</h5> */}
                                {/* <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
                                {/* <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p> */}
                              </Card.Body>
                            </Col>
                          </Row>
                          <Card.Footer>
                            <a href={emp?.facebook}>
                              <FaFacebookF size={30} />
                            </a>
                            <a href={emp?.instagram}>
                              <FaInstagram size={30} />
                            </a>
                          </Card.Footer>
                        </Card>
                      </div>
                    ))}
                  </div>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    </div >
  );
};

export default ItemDetails;
