import React from 'react';
import { Carousel } from 'react-bootstrap';
import { FaPencilRuler } from 'react-icons/fa';
import { GiShop } from 'react-icons/gi';


const TheHeadFirst: React.FC = () => {
    return (

        <div className="main-banner">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 align-self-center ">
                        <div className="header-text">
                            <h6>รับทำเว็บไซต์</h6>
                            <h2>ME PROMPT &amp; TECHNOLOGY&apos;</h2>
                            <p>รับทำเว็บไซต์และการตลาดออนไลน์ครบวงจร ไม่ว่าธุรกิจของคุณ จะมีขนาดเล็กหรือใหญ่ 
                                เราช่วยให้ธุรกิจของคุณเติบโตในโลกออนไลน์ ขยายขีดจำกัดการทำเว็บไซต์ พร้อมฟีเจอร์ธุรกิจออนไลน์ 
                                ยกระดับการทำเว็บไซต์ของคุณ ด้วยเครื่องมือออกแบบเว็บไซต์สุดล้ำ ตอบสนองทุกไอเดียธุรกิจของคุณ 
                                ระบบร้านค้าออนไลน์ที่ทันสมัย นำเสนอสินค้าน่าสนใจ และสะดวกในการซื้อขาย เพื่อเปิดโอกาสให้ธุรกิจคุณ</p>
                            <div className="buttons">
                                <div className="border-button">
                                    <a href="explore"><FaPencilRuler size={20}/>ออกแบบอย่างอิสระ</a>
                                </div>
                                <div className="main-button">
                                    <a href="https://youtube.com/templatemo" target="_blank"><GiShop size={20}/>ระบบร้านค้าเต็มรูปแบบ</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 offset-lg-1">
                        {/* <div className="owl-banner owl-carousel">
                            <div className="item">
                                <img src="/images/banner-01.png" alt="" />
                            </div>
                            <div className="item">
                                <img src="/images/banner-02.png" alt="" />
                            </div>
                        </div> */}
                        <Carousel indicators={false}>
                            <Carousel.Item>
                                {/* <div className="item"> */}
                                    <img src="/images/banner-01.png" className='p-3' alt="" />
                                {/* </div> */}
                                {/* <Carousel.Caption>
                                    <h3>Second slide label</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption> */}
                            </Carousel.Item>
                            <Carousel.Item>
                                {/* <div className="item"> */}
                                    <img src="/images/banner-02.png" className='p-3' alt="" />
                                {/* </div> */}
                                {/* <Carousel.Caption>
                                    <h3>Third slide label</h3>
                                    <p>
                                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                    </p>
                                </Carousel.Caption> */}
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TheHeadFirst;
