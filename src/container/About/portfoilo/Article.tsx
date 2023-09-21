import React from 'react';
import { LanguageContext } from '@/components/Language/LanguageContext';
import IDContext from '@/components/emp/idContext'
import { employee, resumeArticle } from '@/data/about';
import { useRouter } from 'next/router';
import { useState, useContext, useEffect } from 'react';
import HtmlContent from "@/components/HtmlContent";
import { Row } from 'react-bootstrap';
type EmployeeType = typeof employee[0];
type ResumeArticleType = typeof resumeArticle[0];

const Article: React.FC = () => {
    const router = useRouter();
    const context = useContext(IDContext);
    const { currentLanguage } = useContext(LanguageContext);
    const [selectedEmployee, setSelectedEmployee] = useState<EmployeeType | null>(null);
    const [selectedResumeArticle, setSelectedResumeArticle] = useState<ResumeArticleType | null>(null);

    useEffect(() => {
        if (!context?.storedID) {
            router.push('/about');
            return;
        }
        setSelectedEmployee(employee.find(emp => emp.id === context?.storedID) || null);
        setSelectedResumeArticle(resumeArticle.find(ra => ra.memberID === context?.storedID) || null);

    }, [context, router]);
    useEffect(() => {
        console.log("selectedResumeArticle : ", context?.storedID, selectedResumeArticle);
    }, [selectedResumeArticle]);

    return (
        <section className="about section-padding" id="about">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-12">
                        <h3 className="mb-4">This is {currentLanguage === "TH" ? selectedEmployee?.nickName?.TH : selectedEmployee?.nickName?.EN} Resume</h3>
                        <p className='text-white' >
                            <HtmlContent content={currentLanguage === "TH" ? selectedResumeArticle?.aboutUS?.TH : selectedResumeArticle?.aboutUS?.EN} />
                        </p>
                        <h3 className="my-4">ทักษะต่างๆ</h3>
                        <a>aa</a>
                    </div>
                    <div className="col-lg-5 mx-auto col-md-6 col-12">
                        <img src={selectedEmployee?.profile} className=" rounded-4 img-fluid" alt="Ben's Resume HTML Template" />
                    </div>
                </div>
                <div className="row about-third">
                    <div className="col-lg-4 col-md-4 col-12">
                        <h3>Integer volutpat</h3>
                        <p className='text-white'>Sed eu risus tincidunt, finibus dolor non, gravida ex. Donec lacinia mi nec erat tempus, vel consectetur ante scelerisque. Ut blandit, risus in venenatis ultricies, lacus tellus fermentum.</p>
                    </div>
                    <div className="col-lg-4 col-md-4 col-12">
                        <h3>Mauris semper</h3>
                        <p className='text-white'>Cras et nisl vestibulum, accumsan elit sed, pretium enim. Vestibulum in condimentum magna. Maecenas quam magna, iaculis eu turpis et, commodo pulvinar leo.</p>
                    </div>
                    <div className="col-lg-4 col-md-4 col-12">
                        <h3>Integer id neque</h3>
                        <p className='text-white'>Duis at mollis leo, venenatis congue ex. Cras urna dui, gravida euismod lectus et, cursus tempor nulla. Praesent at turpis quis ex tristique gravida quis eget eros.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Article;
