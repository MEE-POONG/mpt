import { Collections } from '@/data/home';
import Link from 'next/link';
import React from 'react';
import { LanguageContext } from '@/components/Language/LanguageContext';
import IDContext from '@/components/emp/idContext'
import { employee } from '@/data/about';
import { useRouter } from 'next/router';
import { useState, useContext, useEffect } from 'react';
import { FaFacebookF, FaInstagram, FaLine, FaTiktok } from 'react-icons/fa';
type EmployeeType = typeof employee[0];

const MePortfoilo: React.FC = () => {
    const router = useRouter();
    const context = useContext(IDContext);
    const { currentLanguage } = useContext(LanguageContext);
    const [selectedEmployee, setSelectedEmployee] = useState<EmployeeType | null>(null);

    useEffect(() => {
        if (!context?.storedID) {
            router.push('/about');
            return;
        }
        setSelectedEmployee(employee.find(emp => emp.id === context?.storedID) || null);

    }, [context, router]);
    return (
        <section className="hero d-flex flex-column justify-content-center align-items-center" id="intro">
            <div className="container">
                <div className="row">
                    <div className="mx-auto col-lg-5 col-md-5 col-10">
                        <img src={selectedEmployee?.profile} className="img-fluid rounded-4" alt="Ben Resume HTML Template" />
                    </div>
                    <div className="d-flex justify-content-center align-items-center col-lg-7 col-md-7 col-12">
                        <div className="text-center">
                            <h1 className="hero-title b-purple rounded-5 px-3 py-2 my-2">
                                👋 {currentLanguage === "TH" ? selectedEmployee?.firstName?.TH : selectedEmployee?.firstName?.EN}
                            </h1>
                            <br />
                            <Link href="#" className="b-white rounded-5 px-3 m-auto d-flex max-width">
                                ✉️ {selectedEmployee?.email}
                            </Link>
                            <Link href="#" className="b-white rounded-5 px-3 m-auto my-2 d-flex max-width">
                                📱 {selectedEmployee?.tel}
                            </Link>
                            <br />
                            {selectedEmployee?.facebook && (
                                <Link href={selectedEmployee.facebook} target="_blank" className="b-white rounded p-2 m-2">
                                    <FaFacebookF size={20} />
                                </Link>
                            )}
                            {selectedEmployee?.instagram && (
                                <Link href={selectedEmployee.instagram} target="_blank" className="b-white rounded p-2 m-2">
                                    <FaInstagram size={20} />
                                </Link>
                            )}
                            {selectedEmployee?.line && (
                                <Link href={selectedEmployee.line} target="_blank" className="b-white rounded p-2 m-2">
                                    <FaLine size={20} />
                                </Link>
                            )}

                            {selectedEmployee?.tiktok && (
                                <Link href={selectedEmployee.tiktok} target="_blank" className="b-white rounded p-2 m-2">
                                    <FaTiktok size={20} />
                                </Link>
                            )}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default MePortfoilo;
