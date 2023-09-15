import Link from "next/link";
import React from "react";
import { Button, ButtonGroup, Card, Col, Nav, Row, Tab } from "react-bootstrap";
import { AiOutlineInstagram, AiFillFacebook } from "react-icons/ai";
import {
  FaEye,
  FaFacebookF,
  FaInstagram,
  FaLine,
  FaStar,
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
              </Nav>
            </Col>
            <Col sm={12}>
              <Tab.Content>
                <Tab.Pane eventKey="first" className="c-purple">
                  <Row className="justify-content-md-center">
                    {employee.map((emp,index) => (
                      <Col xxl="4" xl="4" lg="6" md="6" key={index}>
                        <Card className="item" style={{ borderRadius: "20px" }}>
                          <Row className="no-gutters">
                            <Col md="5" lg="5" className="pe-0 position-relative">
                              <Card.Img
                                className="w-100 rounded-0 object-fit-cover"
                                src={emp?.picture}
                                alt={emp?.firstName?.EN}
                              />
                            </Col>
                            <Col md="7" lg="7" className="ps-0">
                              <Card.Body>
                                <div className="text-center c-purple">
                                  <span className="h6 c-purple">
                                    {emp?.firstName?.TH}
                                  </span>
                                  {` ${emp?.nickName.TH}`}
                                </div>
                                <hr />
                                <h6 className="mb-2 c-purple">
                                  ตำแหน่ง: <span>{emp?.position.TH}</span>
                                </h6>
                                <h6 className="mb-2 c-purple">
                                  หน้าที่: <span>{emp?.duty.TH}</span>
                                </h6>
                                <hr />
                                <div className="d-flex justify-content-around social">
                                  <Link href={emp?.facebook} className="facebook">
                                    <FaFacebookF size={30} />
                                  </Link>
                                  <Link href={emp?.instagram} className="instagram">
                                    <FaInstagram size={30} />
                                  </Link>
                                  <Link href={emp?.line} className="line">
                                    <FaLine size={30} />
                                  </Link>
                                  <Link href={emp?.tiktok} className="tiktok">
                                    <FaTiktok size={30} />
                                  </Link>
                                </div>
                                <hr />
                                <div className="d-flex justify-content-around align-items-center star">
                                  <FaStar />
                                  <FaStar />
                                  <FaStar />
                                  <FaStar />
                                  <FaStar />
                                </div>
                              </Card.Body>
                            </Col>
                          </Row>
                          <Card.Footer className="p-0">
                            <Link href="" className="view fs-6 fw-normal">
                              สร้างโปรเจค
                            </Link>
                            <Link href="" className="view fs-6 fw-normal">
                              ผลงาน
                            </Link>
                            <Link href="" className="view fs-6 fw-normal">
                              ความสามารถ
                            </Link>
                          </Card.Footer>
                        </Card>
                      </Col>
                    ))}
                  </Row>
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
