
import React, { useContext, useEffect, useState } from 'react';
import { LanguageContext } from '@/components/Language/LanguageContext';

import { priceHead, priceData } from '@/data/home';
import Slider from 'react-slick';
import { FaAngleLeft, FaAngleRight, FaCheck } from 'react-icons/fa';
import { Button, Form, Modal } from 'react-bootstrap';
interface ArrowProps {
    className?: string;
    style?: React.CSSProperties;
    onClick?: () => void;
}
const NextArrow: React.FC<ArrowProps> = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={`price-next-arrow ${className}`}
            onClick={onClick}
        >
            <FaAngleRight />
        </div>
    );
}

const PrevArrow: React.FC<ArrowProps> = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={`price-prev-arrow ${className}`}
            onClick={onClick}
        >
            <FaAngleLeft />
        </div>
    );
}

const Price: React.FC = () => {
    const { currentLanguage } = useContext(LanguageContext);
    const [selectPackage, setSelectPackage] = useState("");

    const handleClose = () => setSelectPackage("");
    const handleShow = () => setSelectPackage("basic");
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 676,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    };

    return (
        <div className="price">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="section-heading">
                            <div className="line-dec"></div>
                            <h2>
                                {currentLanguage === "TH" ? priceHead[0].title?.TH : priceHead[0].title?.EN}
                            </h2>
                            <h4>
                                {currentLanguage === "TH" ? priceHead[0].detail?.TH : priceHead[0].detail?.EN}
                            </h4>
                        </div>
                    </div>
                </div>
                <div className='package bg-image-unset'>
                    <Slider {...settings}>
                        {priceData.map((item, index) => (
                            <div className="item" key={index}>
                                <div className='card'>
                                    <img src={`/images/icon-0${index + 2}.png`} alt="" className='mx-auto' height={50} />
                                    <h4 className='text-center mt-0'>
                                        {item?.title}
                                        <br />
                                        {currentLanguage === "TH" ? " ราคา " : " price "}<span className='c-purple ms-2'>{item?.price?.price}</span>
                                    </h4>
                                    <div className='promotion'>
                                        แพ็คเกจ <span className='c-purple'>2</span> ปี ลด <span className='c-purple'>10%</span> ราคา <span className='c-purple'>{(item?.price?.price * 2) - ((item?.price?.price * 2) * 0.1)}</span>
                                        <br />
                                        แพ็คเกจ <span className='c-purple'>3</span> ปี ลด <span className='c-purple'>15%</span> ราคา <span className='c-purple'> {(item?.price.price * 3) - ((item?.price.price * 3) * 0.1)}</span>
                                        <br />
                                    </div>
                                    <div className="line-dec" />
                                    <div className="bid">
                                        <em>
                                            <span className='c-purple me-2'>
                                                <FaCheck />
                                            </span>
                                            {currentLanguage === "TH" ? item?.serve?.editDesign?.TH : item?.serve?.editDesign?.EN} ราคา <span className='c-purple fw-normal'>{" " + item?.price?.price}</span>
                                        </em>
                                        <br />
                                        <em>
                                            <span className='c-purple me-2'>
                                                <FaCheck />
                                            </span>
                                            {item?.serve?.siteArea}{currentLanguage === "TH" ? " ราคา" : " price"}<span className='c-purple fw-normal'>{" " + item?.price?.price}</span>
                                        </em>
                                        <br />
                                        <em>
                                            <span className='c-purple me-2'>
                                                <FaCheck />
                                            </span>
                                            {currentLanguage === "TH" ? "รูป " : "image "}{item?.serve?.imageStorage} ไฟล์
                                        </em>
                                        <br />
                                        <em>
                                            <span className='c-purple me-2'>
                                                <FaCheck />
                                            </span>
                                            {currentLanguage === "TH" ? " สำรองข้อมูล" : " Data backup"}
                                        </em>
                                        <br />
                                        <em>
                                            <span className='c-purple me-2'>
                                                <FaCheck />
                                            </span>
                                            {item?.serve?.Domain}</em>
                                        <br />
                                        <em>
                                            <span className='c-purple me-2'>
                                                <FaCheck />
                                            </span>
                                            {currentLanguage === "TH" ? " ทีมงานให้คำปรึกษา" : " Consultation by our team"}
                                        </em>
                                        <br />
                                        {item?.serve?.logo ?
                                            <>
                                                <em>
                                                    <span className='c-purple me-2'>
                                                        <FaCheck />
                                                    </span>
                                                    {currentLanguage === "TH" ? "ออกแบบ Logo ใหม่" : "New logo design"}
                                                </em>
                                                <br />
                                            </>
                                            : ""}
                                        <em>
                                            <span className='c-purple me-2'>
                                                <FaCheck />
                                            </span>
                                            {currentLanguage === "TH" ? "รองรับทุกขนาดหน้าจอ" : "Supports all screen sizes"}
                                        </em>
                                        <br />
                                        <em>
                                            <span className='c-purple me-2'>
                                                <FaCheck />
                                            </span>
                                            {currentLanguage === "TH" ? item?.article?.language?.TH : item?.article?.language?.EN}
                                        </em>
                                        <br />
                                        <em>
                                            <span className='me-2'>
                                                <FaCheck />
                                            </span>
                                            {currentLanguage === "TH" ? item?.article?.blog?.TH : item?.article?.blog?.EN}
                                        </em>

                                    </div>
                                    <div className="line-dec" />
                                    <button onClick={() => setSelectPackage(item?.title)}>
                                        {currentLanguage === "TH" ? "ซื้อแพ็คเกจ" : "Buy Package"}
                                    </button>

                                </div>
                            </div>
                        ))}
                    </Slider>
                    <Modal show={selectPackage !== ""} onHide={handleClose} centered>
                        <Modal.Header closeButton >
                            <Modal.Title className='c-purple'>ซื้อแพ็คเกจ {selectPackage} </Modal.Title>
                        </Modal.Header>
                        <Modal.Body className='c-purple'>
                            <Form>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="name@example.com" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>ระบุรายละเอียด</Form.Label>
                                    <Form.Control as="textarea" rows={3} />
                                </Form.Group>
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <button onClick={handleClose}>
                                Close
                            </button>
                            <button onClick={handleClose}>
                                send
                            </button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </div >
        </div >
    );
}

export default Price;
