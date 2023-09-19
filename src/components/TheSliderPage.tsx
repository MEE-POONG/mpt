import React from 'react';
import { useRouter } from 'next/router';
import Slider from 'react-slick';
import Link from 'next/link';


const TheSliderPage: React.FC = () => {
    const router = useRouter();

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
    };
    return (
        <div className="page-heading">
            <div className="container">
                <div className="row png-shadow-white">
                    <div className="col-lg-12">
                        <h6 className='c-purple-important '>Web Development & Design</h6>
                        <h2 className='c-purple-important '>Me prompt technology</h2>
                        <span className='h3 mt-3'>
                            <Link href="/" className='c-purple-important fw-normal'>
                                Home
                            </Link>
                            <span className='text-dark fw-normal'>{" > "} News</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TheSliderPage;
