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
type skillsType = typeof skills[0];

const Article: React.FC = () => {
    const router = useRouter();
    const context = useContext(IDContext);
    const { currentLanguage } = useContext(LanguageContext);
    const [searchEmployee, setSearchEmployee] = useState<EmployeeType | null>(null);
    const [searchResumeArticle, setSearchResumeArticle] = useState<ResumeArticleType | null>(null);
    const [searchSkills, setSearchSkills] = useState<skillsType[] | null>(null);

    useEffect(() => {
        if (!context?.storedID) {
            router.push('/about');
            return;
        }
        setSearchEmployee(employee.find(emp => emp.id === context?.storedID) || null);
        setSearchResumeArticle(resumeArticle.find(ra => ra.memberID === context?.storedID) || null);
        setSearchSkills(skills.filter(sks => sks.memberID === context?.storedID) || null);

    }, [context, router]);


    return (
        <section className="article section-padding" id="about">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-12">
                        <h3 className="mb-4">This is {currentLanguage === "TH" ? searchEmployee?.nickName?.TH : searchEmployee?.nickName?.EN} Resume</h3>
                        <div className='text-white' >
                            <HtmlContent content={currentLanguage === "TH" ? searchResumeArticle?.aboutUS?.TH : searchResumeArticle?.aboutUS?.EN} />
                        </div>
                        <h3 className="my-4">ทักษะต่างๆ</h3>
                        <div className='d-flex w-100 flex-wrap'>
                            {searchSkills && searchSkills.map((list, index) => {
                                const skillDetail = skillListID.find(s => s.id === list.skillListID);
                                const skillName = skillDetail ? (currentLanguage === "TH" ? skillDetail.name.TH : skillDetail.name.EN) : '';
                                const maxLevel = skillDetail ? skillDetail.maxLevel : '';

                                return (
                                    <div key={index} className="b-white rounded max-width px-2 m-1">
                                        {skillName} {list?.level}/{maxLevel}
                                    </div>
                                );
                            })}
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
