import { LanguageContext } from '@/components/Language/LanguageContext';
import TheLayout from '@/components/TheLayout'
import IDContext from '@/components/emp/idContext'
import { employee } from '@/data/about';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useContext, useEffect } from 'react';
import { FaFacebookF, FaInstagram, FaLine, FaTiktok } from 'react-icons/fa';
type EmployeeType = typeof employee[0];

const ProfilePage: React.FC = () => {
    const router = useRouter();
    const context = useContext(IDContext);
    const { currentLanguage } = useContext(LanguageContext);
    const [selectedEmployee, setSelectedEmployee] = useState<EmployeeType | null>(null);
    if (!context) {
        throw new Error("TargetPage must be used within an IDProvider");
    }
    const { storedID } = context;
    useEffect(() => {
        if (!storedID) {
            router.push('/about');
            return;
        }
        setSelectedEmployee(employee.find(emp => emp.id === storedID) || null);

    }, [storedID, router]);
    useEffect(() => {
        console.log(selectedEmployee);
    }, [selectedEmployee]);

    return (
        <TheLayout>
            <div className='profile-page page-default-bg'>
                <section className="hero d-flex flex-column justify-content-center align-items-center" id="intro">
                    <div className="container">
                        <div className="row">
                            <div className="mx-auto col-lg-5 col-md-5 col-10">
                                <img src={selectedEmployee?.profile} className="img-fluid rounded-4" alt="Ben Resume HTML Template" />
                            </div>
                            <div className="d-flex justify-content-center align-items-center col-lg-7 col-md-7 col-12">
                                <div className="hero-text">
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
                                        <Link href={selectedEmployee.facebook} className="b-white rounded p-2 m-2">
                                            <FaFacebookF size={20} />
                                        </Link>
                                    )}
                                    {selectedEmployee?.instagram && (
                                        <Link href={selectedEmployee.instagram} className="b-white rounded p-2 m-2">
                                            <FaInstagram size={20} />
                                        </Link>
                                    )}

                                    {selectedEmployee?.line && (
                                        <Link href={selectedEmployee.line} className="b-white rounded p-2 m-2">
                                            <FaLine size={20} />
                                        </Link>
                                    )}

                                    {selectedEmployee?.tiktok && (
                                        <Link href={selectedEmployee.tiktok} className="b-white rounded p-2 m-2">
                                            <FaTiktok size={20} />
                                        </Link>
                                    )}

                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                
                <section className="about section-padding" id="about">
                    <div className="container">
                        <div className="row">

                            <div className="col-lg-6 col-md-6 col-12">
                                <h3 className="mb-4">This is Ben's Resume</h3>

                                <p className='text-white'>Ben Resume HTML Template is brought to you by <a rel="nofollow" href="https://www.tooplate.com" target="_parent">Tooplate website</a>. You can feel free to edit and use this page for your small site. You are allowed to use this HTML template for any kind of purpose.</p>

                                <p className='text-white'>However, please do not re-distribute the downloadable template ZIP file on any template collection website. This is strongly prohibited. Please contact Tooplate for more information.</p>

                                <ul className="mt-4 mb-5 mb-lg-0 profile-list list-unstyled text-white">
                                    <li><strong>Full Name :</strong> Ben Wilson </li>

                                    <li><strong>Date of Birth:</strong> 26 September 1999</li>

                                    <li><strong>Website :</strong> company.co</li>

                                    <li><strong>Email :</strong> hello@company.co</li>
                                </ul>
                            </div>

                            <div className="col-lg-5 mx-auto col-md-6 col-12">
                                <img src={selectedEmployee?.profile} className=" rounded-4 img-fluid" alt="Ben's Resume HTML Template"/>
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
            </div>
        </TheLayout>
    )
}
export default ProfilePage;
