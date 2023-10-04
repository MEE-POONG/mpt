import React, { useEffect, useState } from 'react';
import { LanguageContext } from '@/components/Language/LanguageContext';
import IDContext from '@/components/emp/idContext'
import { useContext } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Collections, PerformanceData } from '@/data/home';

const Project: React.FC = () => {
    const idContext = useContext(IDContext);
    const { currentLanguage } = useContext(LanguageContext);
    const [filteredPerformance, setFilteredPerformance] = useState<typeof PerformanceData>([]);

    useEffect(() => {
        if (idContext?.storedID !== "") {
            const filtered = PerformanceData.filter(performance =>
                performance.memberID === idContext?.storedID
            );
            setFilteredPerformance(filtered);
        }
    }, [idContext]);
    useEffect(() => {
        console.log("filteredPerformance : ", filteredPerformance);

    }, [filteredPerformance]);


    return (
        <section className="project section-padding" id="about">
            <div className="container">
                <div className='collections'>

                    <h3>
                        {currentLanguage === "TH" ? "ผู้นำโปรเจค" : "Project leader"}
                    </h3>
                    <Row>
                        {filteredPerformance?.filter(data => data.creator === true)?.map((data, index) => {
                            const workWeb = Collections.find(collection => collection.id === data.Collections);
                            return workWeb ? (
                                <Col lg="4" key={index}>
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
                            ) : null;
                        })}
                    </Row>
                </div>
            </div>
            <div className="container">
                <div className='collections'>
                    <h3>
                        {currentLanguage === "TH" ? "ผลงาน" : "Performance"}
                    </h3>
                    <Row>
                    {filteredPerformance?.filter(data => data.creator === false)?.map((data, index) => {
                            const workWeb = Collections.find(collection => collection.id === data.Collections);
                            return workWeb ? (
                                <Col lg="4" key={index}>
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
                            ) : null;
                        })}
                    </Row>
                </div>
            </div>
        </section>
    );
}

export default Project;
