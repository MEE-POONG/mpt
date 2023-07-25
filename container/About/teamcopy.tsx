import Link from 'next/link';
import React from 'react';
import { AiOutlineInstagram, AiFillFacebook } from 'react-icons/ai';
import { FaFacebookF, FaInstagram, FaLine, FaTiktok, FaTwitter } from 'react-icons/fa';

const ItemDetailsCopy: React.FC = () => {
    return (
        <div className="container">
            <div className="current-bid">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="mini-heading">
                            <h4>Employee ( Team MePrompt )</h4>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="item">
                            <div className="left-img">
                                <img src="/images/meprompt/est.jpg" alt=""
                                    style={{ maxHeight: 250, objectFit: "cover" }} />

                            </div>
                            <div className="right-content">
                                <h4 className='mb-2'>ณัฐวีษ์  ตันตระกูล</h4>
                                <h6>("เอส")</h6>
                                <h6>
                                    ตำแหน่ง : <em>CEO & Founder</em>
                                </h6>
                                <div className="line-dec" />
                                <span className="date">
                                    <a href="https://web.facebook.com/woraphon.tengin.1"><FaFacebookF size={20} /></a>
                                    <a href="https://www.instagram.com/phon_xm/"><FaInstagram size={20} /></a>
                                    <a href="https://www.instagram.com/phon_xm/"><FaLine size={20} /></a>
                                    <a href="https://www.instagram.com/phon_xm/"><FaTiktok size={20} /></a>
                                    <a href="https://www.instagram.com/phon_xm/"><FaTwitter size={20} /></a>
                                </span>
                                <div className="line-dec" />
                                <div className='text-end mt-auto'>
                                    <Link href={"/about/id"}>{"ดูเพิ่มเนติม"}</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="item">
                            <div className="left-img">
                                <img src="/images/meprompt/chun.jpg" alt=""
                                    style={{ maxHeight: 250, objectFit: "cover" }} />
                            </div>
                            <div className="right-content">
                                <h4>วรายุทธ เทกระโทก</h4>
                                <a href="#">@SomChun</a>
                                <div className="line-dec" />
                                <h6>
                                    <em>C0-Founder</em>
                                </h6>
                                {/* <span className="date">24/07/2022, 22:00</span> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="item">
                            <div className="left-img">
                                <img src="/images/meprompt/ploi.jpg" alt=""
                                    style={{ maxHeight: 250, objectFit: "cover" }} />
                            </div>
                            <div className="right-content">
                                <h4>Yasumin Simtama</h4>
                                <a href="#">@Yamin</a>
                                <div className="line-dec" />
                                <h6>
                                    <em>Developer</em>
                                </h6>
                                {/* <span className="date">24/07/2022, 22:00</span> */}
                            </div>
                        </div>
                    </div>

                </div>


                <div className="col-lg-12">
                    <div className="current-bid">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="mini-heading">
                                    <h4>Apprentice ( Co-Op Gen 2 )</h4>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="item">
                                    <div className="left-img">
                                        <img src="/images/meprompt/g102.jpg" alt=""
                                            style={{ maxHeight: 250, objectFit: "cover" }} />
                                    </div>
                                    <div className="right-content">
                                        <h4>วรพล เต็งอินทร์</h4>
                                        <a href="#">พล</a>
                                        <div className="line-dec" />
                                        <h6>
                                            ตำแหน่ง: <em>นักศึกษาฝึกงาน</em>
                                        </h6>
                                        <span className="date">
                                            <a href="https://web.facebook.com/woraphon.tengin.1"><FaFacebookF size={30} /></a>
                                            <a href="https://www.instagram.com/phon_xm/"><FaInstagram size={30} /></a>
                                            <a href="https://www.instagram.com/phon_xm/"><FaLine size={30} /></a>
                                            <a href="https://www.instagram.com/phon_xm/"><FaTiktok size={30} /></a>
                                            <a href="https://www.instagram.com/phon_xm/"><FaTwitter size={30} /></a>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="item">
                                    <div className="left-img">
                                        <img src="/images/meprompt/g103.jpg" alt=""
                                            style={{ maxHeight: 250, objectFit: "cover" }} />
                                    </div>
                                    <div className="right-content">
                                        <h4> วีรยุทธ เวสโมราดี้</h4>
                                        <a href="#">โซฮ์ร็อบ</a>
                                        <div className="line-dec" />
                                        <h6>
                                            ตำแหน่ง: <em>นักศึกษาฝึกงาน</em>
                                        </h6>
                                        <span className="date">
                                            <a href="https://web.facebook.com/weerayutves"><AiFillFacebook size={30} /></a>
                                            <a href="https://www.instagram.com/sohrobevo/"><AiOutlineInstagram size={30} /></a>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="item">
                                    <div className="left-img">
                                        <img src="/images/meprompt/g104.jpg" alt=""
                                            style={{ maxHeight: 250, objectFit: "cover" }} />
                                    </div>
                                    <div className="right-content">
                                        <h4>สมนัสนนท์ อบมาพันธ์</h4>
                                        <a href="#">ฟิว</a>
                                        <div className="line-dec" />
                                        <h6>
                                            ตำแหน่ง: <em>นักศึกษาฝึกงาน</em>
                                        </h6>
                                        <span className="date">
                                            <a href="https://web.facebook.com/profile.php?id=100013979175881"><AiFillFacebook size={30} /></a>
                                            <a href="https://www.instagram.com/manatsanonobmapan/"><AiOutlineInstagram size={30} /></a>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="item">
                                    <div className="left-img">
                                        <img src="/images/meprompt/g105.jpg" alt=""
                                            style={{ maxHeight: 250, objectFit: "cover" }} />
                                    </div>
                                    <div className="right-content">
                                        <h4>สหภาพ นามกระบือ</h4>
                                        <a href="#">อาร์ม</a>
                                        <div className="line-dec" />
                                        <h6>
                                            ตำแหน่ง: <em>นักศึกษาฝึกงาน</em>
                                        </h6>
                                        <span className="date">
                                            <a href="https://web.facebook.com/arm.sahapap"><AiFillFacebook size={30} /></a>
                                            <a href="https://www.instagram.com/shp.a2004/?fbclid=IwAR1Se-USVVjd5jUGRAxQGTsi3IgBhIO8YxYPm4SgAUZB5eh21pDzcbbkPx8"><AiOutlineInstagram size={30} /></a>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="item">
                                    <div className="left-img">
                                        <img src="/images/meprompt/g101.jpg" alt=""
                                            style={{ height: 250 }} />
                                    </div>
                                    <div className="right-content">
                                        <h4>อลงกรณ์ ตรงกระโทก</h4>
                                        <a href="#">โอม</a>
                                        <div className="line-dec" />
                                        <h6>
                                            ตำแหน่ง: <em>นักศึกษาฝึกงาน</em>
                                        </h6>
                                        <span className="date">
                                            <a href="https://web.facebook.com/profile.php?id=100068706235010"><AiFillFacebook size={30} /></a>
                                            <a href="https://www.instagram.com/badghost_201/"><AiOutlineInstagram size={30} /></a>
                                        </span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="col-lg-12">
                    <div className="current-bid">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="mini-heading">
                                    <h4>Apprentice ( Co-Op Gen 3 )</h4>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="item">
                                    <div className="left-img">
                                        <img src="/images/meprompt/benz.jpg" alt=""
                                        />
                                    </div>
                                    <div className="right-content">
                                        <h4>Pattawut Biakrathok</h4>
                                        <a href="#">@Pattawut</a>
                                        <div className="line-dec" />
                                        <h6>
                                            ตำแหน่ง: <em>นักศึกษาสหกิจ</em>
                                        </h6>
                                        <span className="date">
                                            <a href="https://www.facebook.com/pattawut24"><AiFillFacebook size={30} /></a>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="item">
                                    <div className="left-img">
                                        <img src="/images/meprompt/mind.jpg" alt=""
                                            style={{ maxHeight: 250, objectFit: "cover" }} />
                                    </div>
                                    <div className="right-content">
                                        <h4>Thutiya Chosungnoen</h4>
                                        <a href="#">@Thutiya</a>
                                        <div className="line-dec" />
                                        <h6>
                                            ตำแหน่ง: <em>นักศึกษาสหกิจ</em>
                                        </h6>
                                        <a href="https://www.facebook.com/profile.php?id=100004920397814"><AiFillFacebook size={30} /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="item">
                                    <div className="left-img">
                                        <img src="/images/meprompt/prim.jpg" alt=""
                                            style={{ maxHeight: 250, objectFit: "cover" }} />
                                    </div>
                                    <div className="right-content">
                                        <h4>Punyaporn  Lamlert</h4>
                                        <a href="#">@Punyaporn</a>
                                        <div className="line-dec" />
                                        <h6>
                                            ตำแหน่ง: <em>นักศึกษาสหกิจ</em>
                                        </h6>
                                        <a href="https://www.facebook.com/paysatore"><AiFillFacebook size={30} /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="item">
                                    <div className="left-img">
                                        <img src="/images/meprompt/ploi.jpg" alt=""
                                            style={{ maxHeight: 250, objectFit: "cover" }} />
                                    </div>
                                    <div className="right-content">
                                        <h4>Yasumin Simtama</h4>
                                        <a href="#">@Yasumin</a>
                                        <div className="line-dec" />
                                        <h6>
                                            ตำแหน่ง: <em>นักศึกษาสหกิจ</em>
                                        </h6>
                                        <a href="https://www.facebook.com/ploy.simt/"><AiFillFacebook size={30} /></a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default ItemDetailsCopy;
