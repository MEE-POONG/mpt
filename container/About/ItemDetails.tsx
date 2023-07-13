import React from 'react';
import { AiOutlineInstagram, AiFillFacebook } from 'react-icons/ai';

const ItemDetails: React.FC = () => {
    return (
        <div className="item-details-page">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-heading">
                            <div className="line-dec" />
                            <h2>
                                How about <em>MPT</em> Is?.
                            </h2>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="left-image">
                            <img
                                src="/images/meprompt/logo.png"
                                alt=""
                                style={{ borderRadius: 20 }}
                            />
                            <p className='text-center mt-3'>Me Prompt Technonlogy Company</p>
                        </div>
                    </div>
                    <div className="col-lg-5 align-self-center">
                        <h4>Me Prompt Technonlogy Company</h4>
                        <span className="author">
                            <h6>
                                <a href="#">@meepoong</a>
                            </h6>
                        </span>
                        <p>
                            เรามีบริการทางด้านเทคโนโลยีที่ทันสมัยสำหรับองค์กร และผู้ใช้งานจริงเพื่อส่งเสริมระบบการทำงานปัจจุบันของคุณและก่อให้เกิดการพัฒนาและเปลี่ยนแปลงอย่างต่อเนื่องเพิ่มขีดความสามารถขององค์กรคุณให้พร้อมรับมือได้ทุกสถานการณ์เพราะเราเชื่อว่าการพัฒนากระบวนการทำงานด้วยเทคโนโลยีและนวัตกรรมเป็นสิ่งที่จำเป็นและสำคัญมากในอนาคต
                        </p>
                        <p>
                            เราตั้งใจที่จะสร้างความเปลี่ยนแปลงทางด้านดิจิทัลและเทคโนโลยีให้กับทุกองค์กร และเชื่อเป็นอย่างยิ่งว่าเราสามารถช่วยทุกองค์กร ในการเตรียมพร้อมต่อโลกที่เปลี่ยนแปลงได้อย่างเต็มรูปแบบ นอกจากนี้เรามุ่งหวังการส่งมอบแง่มุมทางธุรกิจ (Business) ผสมผสานกับการประยุกต์ใช้เทคโนโลยีในองค์กร (Technological Insight) เข้าด้วยกัน เพื่อต่อยอดและพัฒนาทุกองค์กรให้เป็น Data Driven Organization ได้อย่างมีประสิทธิภาพ
                        </p>
                        {/* <div className="row">
                            <div className="col-5">
                                <span className="ends">
                                    Ends In
                                    <br />
                                    <strong>3D 05H 20M 58S</strong>
                                    <br />
                                    <em>(January 22nd, 2021)</em>
                                </span>
                            </div>
                        </div> */}

                    </div>

                    <div className="col-lg-12">
                        <div className="current-bid">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="mini-heading">
                                        <h4>Employee ( Team Meepoong )</h4>
                                    </div>
                                </div>
                                {/* <div className="col-lg-6">
                                    <fieldset>
                                        <select
                                            name="Category"
                                            className="form-select"
                                            aria-label="Default select example"
                                            id="chooseCategory"
                                        // onchange="this.form.click()"
                                        >
                                            <option >Sort By: Latest</option>
                                            <option value="old">
                                                Sort By: Oldest
                                            </option>
                                            <option value="low">Sort By: Lowest</option>
                                            <option value="high">Sort By: Highest</option>
                                        </select>
                                    </fieldset>
                                </div> */}

                                <div className="col-lg-4 col-md-6">
                                    <div className="item">
                                        <div className="left-img">
                                            <img src="/images/meprompt/est.jpg" alt="" 
                                            style={{maxHeight:250}}/>
                                            
                                        </div>
                                        <div className="right-content">
                                            <h4>ณัฐวีษ์  ตันตระกูล</h4>
                                            <a href="#">@Est</a>
                                            <div className="line-dec" />
                                            <h6>
                                                <em>CEO & Founder</em>
                                            </h6>
                                            {/* <span className="date">24/07/2022, 22:00</span> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="item">
                                        <div className="left-img">
                                            <img src="/images/meprompt/chun.jpg" alt="" 
                                            style={{maxHeight:250}}/>
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
                                            style={{maxHeight:250}}/>
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
                        </div>
                    </div>

                    <div className="col-lg-12">
                        <div className="current-bid">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="mini-heading">
                                        <h4>Apprentice ( Co-Op Gen 1 )</h4>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="item">
                                        <div className="left-img">
                                            <img src="/images/meprompt/g102.jpg" alt="" 
                                            style={{maxHeight:250}}/>
                                        </div>
                                        <div className="right-content">
                                            <h4>วรพล เต็งอินทร์</h4>
                                            <a href="#">พล</a>
                                            <div className="line-dec" />
                                            <h6>
                                                ตำแหน่ง: <em>นักศึกษาฝึกงาน</em>
                                            </h6>
                                            <span className="date">
                                                <a href="https://web.facebook.com/woraphon.tengin.1"><AiFillFacebook size={30}/></a>
                                                <a href="https://www.instagram.com/phon_xm/"><AiOutlineInstagram size={30}/></a>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="item">
                                        <div className="left-img">
                                            <img src="/images/meprompt/g103.jpg" alt="" 
                                            style={{maxHeight:250}}/>
                                        </div>
                                        <div className="right-content">
                                            <h4> วีรยุทธ เวสโมราดี้</h4>
                                            <a href="#">โซฮ์ร็อบ</a>
                                            <div className="line-dec" />
                                            <h6>
                                                ตำแหน่ง: <em>นักศึกษาฝึกงาน</em>
                                            </h6>
                                            <span className="date">
                                                <a href="https://web.facebook.com/weerayutves"><AiFillFacebook size={30}/></a>
                                                <a href="https://www.instagram.com/sohrobevo/"><AiOutlineInstagram size={30}/></a>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="item">
                                        <div className="left-img">
                                            <img src="/images/meprompt/g104.jpg" alt="" 
                                            style={{maxHeight:250}}/>
                                        </div>
                                        <div className="right-content">
                                            <h4>สมนัสนนท์ อบมาพันธ์</h4>
                                            <a href="#">ฟิว</a>
                                            <div className="line-dec" />
                                            <h6>
                                                ตำแหน่ง: <em>นักศึกษาฝึกงาน</em>
                                            </h6>
                                            <span className="date">
                                                <a href="https://web.facebook.com/profile.php?id=100013979175881"><AiFillFacebook size={30}/></a>
                                                <a href="https://www.instagram.com/manatsanonobmapan/"><AiOutlineInstagram size={30}/></a>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="item">
                                        <div className="left-img">
                                            <img src="/images/meprompt/g105.jpg" alt="" 
                                            style={{maxHeight:250}}/>
                                        </div>
                                        <div className="right-content">
                                            <h4>สหภาพ นามกระบือ</h4>
                                            <a href="#">อาร์ม</a>
                                            <div className="line-dec" />
                                            <h6>
                                                ตำแหน่ง: <em>นักศึกษาฝึกงาน</em>
                                            </h6>
                                            <span className="date">
                                                <a href="https://web.facebook.com/arm.sahapap"><AiFillFacebook size={30}/></a> 
                                                <a href="https://www.instagram.com/shp.a2004/?fbclid=IwAR1Se-USVVjd5jUGRAxQGTsi3IgBhIO8YxYPm4SgAUZB5eh21pDzcbbkPx8"><AiOutlineInstagram size={30}/></a>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="item">
                                        <div className="left-img">
                                            <img src="/images/meprompt/g101.jpg" alt="" 
                                            style={{height:250}}/>
                                        </div>
                                        <div className="right-content">
                                            <h4>อลงกรณ์ ตรงกระโทก</h4>
                                            <a href="#">โอม</a>
                                            <div className="line-dec" />
                                            <h6>
                                                ตำแหน่ง: <em>นักศึกษาฝึกงาน</em>
                                            </h6>
                                            <span className="date">
                                                <a href="https://web.facebook.com/profile.php?id=100068706235010"><AiFillFacebook size={30}/></a>
                                                <a href="https://www.instagram.com/badghost_201/"><AiOutlineInstagram size={30}/></a>
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
                                            {/* <span className="date">24/07/2022, 22:00</span> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="item">
                                        <div className="left-img">
                                            <img src="/images/meprompt/mind.jpg" alt="" 
                                            style={{maxHeight:250}}/>
                                        </div>
                                        <div className="right-content">
                                            <h4>Thutiya Chosungnoen</h4>
                                            <a href="#">@Thutiya</a>
                                            <div className="line-dec" />
                                            <h6>
                                                ตำแหน่ง: <em>นักศึกษาสหกิจ</em>
                                            </h6>
                                            {/* <span className="date">24/07/2022, 22:00</span> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="item">
                                        <div className="left-img">
                                            <img src="/images/meprompt/prim.jpg" alt="" 
                                            style={{maxHeight:250}}/>
                                        </div>
                                        <div className="right-content">
                                            <h4>Punyaporn  Lamlert</h4>
                                            <a href="#">@Punyaporn</a>
                                            <div className="line-dec" />
                                            <h6>
                                                ตำแหน่ง: <em>นักศึกษาสหกิจ</em>
                                            </h6>
                                            {/* <span className="date">24/07/2022, 22:00</span> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="item">
                                        <div className="left-img">
                                            <img src="/images/meprompt/ploi.jpg" alt="" 
                                            style={{maxHeight:250}}/>
                                        </div>
                                        <div className="right-content">
                                            <h4>Yasumin Simtama</h4>
                                            <a href="#">@Yasumin</a>
                                            <div className="line-dec" />
                                            <h6>
                                                ตำแหน่ง: <em>นักศึกษาสหกิจ</em>
                                            </h6>
                                            {/* <span className="date">24/07/2022, 22:00</span> */}
                                        </div>
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

export default ItemDetails;
