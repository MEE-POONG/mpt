import React from 'react';
import { LanguageContext } from '@/components/Language/LanguageContext';
import IDContext from '@/components/emp/idContext'
import { employee, resumeArticle, skillListID, skills } from '@/data/about';
import { useRouter } from 'next/router';
import { useState, useContext, useEffect } from 'react';
import HtmlContent from "@/components/HtmlContent";
import { Col, Row } from 'react-bootstrap';
import Link from 'next/link';
import { Collections } from '@/data/home';
type EmployeeType = typeof employee[0];
type ResumeArticleType = typeof resumeArticle[0];
type skillsType = typeof skills[0];

const Project: React.FC = () => {
    const router = useRouter();
    const context = useContext(IDContext);
    const { currentLanguage } = useContext(LanguageContext);
    const [searchEmployee, setSearchEmployee] = useState<EmployeeType | null>(null);



    return (
        <section className="project section-padding" id="about">
            <div className="container">
                <div className='collections'>

                    <h3>
                        {currentLanguage === "TH" ? "ผู้นำโปรเจค" : "Project leader"}
                    </h3>
                    <Row>
                        {Collections.map((workWeb, index) => (
                            <Col lg="4" key={index} >
                                <div className="item px-2">
                                    <div className='card'>
                                        <img src={workWeb.img} alt="" />
                                        <div className="down-content">
                                            <h4 className='truncate-1'>{workWeb?.name}</h4>
                                            <div className='d-flex justify-content-between'>
                                                <span className="collection">Viewer :<br /><strong>{workWeb?.viewer}</strong></span>
                                                <span className="category">Category:<br /><strong>{workWeb?.category}</strong></span>
                                            </div>
                                            <div className="main-button">
                                                <a href={workWeb.web} target='_blank'>Explore</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </div>
            </div>
            <div className="container">
                <div className='collections'>
                    <h3>
                        {currentLanguage === "TH" ? "ผลงาน" : "Performance"}
                    </h3>
                    <Row>
                        {Collections.map((workWeb, index) => (
                            <Col lg="4" key={index} >
                                <div className="item px-2">
                                    <div className='card'>
                                        <img src={workWeb.img} alt="" />
                                        <div className="down-content">
                                            <h4 className='truncate-1'>{workWeb?.name}</h4>
                                            <div className='d-flex justify-content-between'>
                                                <span className="collection">Viewer :<br /><strong>{workWeb?.viewer}</strong></span>
                                                <span className="category">Category:<br /><strong>{workWeb?.category}</strong></span>
                                            </div>
                                            <div className="main-button">
                                                <a href={workWeb.web} target='_blank'>Explore</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </div>
            </div>
        </section>
    );
}

export default Project;
