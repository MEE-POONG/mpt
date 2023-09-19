import Link from "next/link";
import React, { useContext } from "react";
import { Button, Card, Col, Nav, Row, Tab } from "react-bootstrap";
import { AiOutlineInstagram, AiFillFacebook } from "react-icons/ai";
import {
  FaFacebookF,
  FaInstagram,
  FaLine,
  FaStar,
  FaTiktok,
  FaTwitter,
} from "react-icons/fa";
import {
  apperntice,
  generations,
} from "@/data/about";
import IDContext from "@/components/emp/idContext";
import { useRouter } from "next/router";

const Apprentice: React.FC = () => {
  const context = useContext(IDContext);
  if (!context) {
    throw new Error("ItemDetails must be used within an IDProvider");
  }
  const { setStoredID } = context;
  const router = useRouter();

  const handleButtonClick = (id: string, route: string) => {
    setStoredID(id);
    router.push(route);
  };

  return (
    <div className="container">
      <div className="current-bid">
        <Tab.Container id="left-tabs-example" defaultActiveKey="gen4">
          <Row>
            <Col sm={12}>
              <Nav variant="pills" className="tab-gen">
                <Nav.Item bsPrefix="mini-heading">
                  <div className="title fw-normal">Apprentice Co-op Gen</div>
                </Nav.Item>
                {generations.map((gen, index) => (
                  <Nav.Item key={index} bsPrefix={`mini-heading${gen.online ? "" : " d-none"}`}>
                    <Nav.Link bsPrefix={`select${index === generations.length - 1 ? " last" : ""}`} eventKey={`gen${gen?.id}`}>
                      {gen?.id}
                    </Nav.Link>
                  </Nav.Item>
                ))}
              </Nav>
            </Col>
            <Col sm={12}>
              <Tab.Content>
                {generations.map((gen, index) => (
                  <Tab.Pane key={index} eventKey={`gen${gen?.id}`} className="c-purple">
                    <Row className="justify-content-md-center">
                      {apperntice.filter((emp) => emp.generation === gen?.id).map((emp) => (
                        <Col xxl="4" xl="4" lg="6" md="6" key={emp?.id}>
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
                              <Button className="view rounded-0" onClick={() => handleButtonClick(emp?.id || '', `/about/project`)}>
                                สร้างโปรเจค
                              </Button>
                              <Button  className="view rounded-0" onClick={() => handleButtonClick(emp?.id || '', `/about/performance`)}>
                                ผลงาน
                              </Button>
                              <Button  className="view rounded-0" onClick={() => handleButtonClick(emp?.id || '', `/about/profile`)}>
                                โปรไฟล์
                              </Button>
                            </Card.Footer>
                          </Card>
                        </Col>
                      ))
                      }
                    </Row>
                  </Tab.Pane>
                ))}
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    </div>
  );
};

export default Apprentice;
