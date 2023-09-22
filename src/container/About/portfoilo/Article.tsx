import React from 'react';
import { LanguageContext } from '@/components/Language/LanguageContext';
import IDContext from '@/components/emp/idContext'
import { employee, resumeArticle, skillListID, skills } from '@/data/about';
import { useRouter } from 'next/router';
import { useState, useContext, useEffect } from 'react';
import HtmlContent from "@/components/HtmlContent";
import { Row } from 'react-bootstrap';
import Link from 'next/link';
type EmployeeType = typeof employee[0];
type ResumeArticleType = typeof resumeArticle[0];
type SkillsType = typeof resumeArticle[0];

const Article: React.FC = () => {
    const router = useRouter();
    const context = useContext(IDContext);
    const { currentLanguage } = useContext(LanguageContext);
    const [searchEmployee, setSearchEmployee] = useState<EmployeeType | null>(null);
    const [searchResumeArticle, setSearchResumeArticle] = useState<ResumeArticleType | null>(null);
    const [searchSkills, setSearchSkills] = useState<string[]>([]);

    useEffect(() => {
        if (!context?.storedID) {
            router.push('/about');
            return;
        }
        setSearchEmployee(employee.find(emp => emp.id === context?.storedID) || null);
        setSearchResumeArticle(resumeArticle.find(ra => ra.memberID === context?.storedID) || null);
        const filteredSkills = skills.filter(skill => skill.memberID === context?.storedID);
        const skillNames = filteredSkills.map(skill => {
            const skillDetail = skillListID.find(s => s.id === skill.skillListID);
            return skillDetail ? skillDetail.name.EN : ''; // or .name.TH for Thai names
        });
        setSearchSkills(skillNames);
    }, [context, router]);
    useEffect(() => {
        console.log("searchResumeArticle : ", context?.storedID, searchResumeArticle);
    }, [searchResumeArticle]);

    return (
        <section className="about section-padding" id="about">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-12">
                        <h3 className="mb-4">This is {currentLanguage === "TH" ? searchEmployee?.nickName?.TH : searchEmployee?.nickName?.EN} Resume</h3>
                        <div className='text-white' >
                            <HtmlContent content={currentLanguage === "TH" ? searchResumeArticle?.aboutUS?.TH : searchResumeArticle?.aboutUS?.EN} />
                        </div>
                        <h3 className="my-4">ทักษะต่างๆ</h3>
                        <div className='d-flex w-100 flex-wrap'>
                            <div className="b-white rounded max-width px-2 m-1">
                                กิจนแกรบ<span className='ms-1'>12</span>
                            </div>

                        </div>
                    </div>
                    <div className="col-lg-5 mx-auto col-md-6 col-12">
                        <img src={searchEmployee?.profile} className=" rounded-4 img-fluid" alt="Ben's Resume HTML Template" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Article;
