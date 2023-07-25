import Link from "next/link";
import React from "react";
import { AiOutlineInstagram, AiFillFacebook } from "react-icons/ai";
import {
  FaFacebookF,
  FaInstagram,
  FaLine,
  FaTiktok,
  FaTwitter,
} from "react-icons/fa";
import {
  apperntice,
  appernticeGen2,
  appernticeGen3,
  appernticeGen4,
} from "@/data/about";
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
                <img
                  src="/images/meprompt/est.jpg"
                  alt=""
                  style={{ maxHeight: 250, objectFit: "cover" }}
                />
              </div>
              <div className="right-content">
                <h4 className="mb-2">ณัฐวีษ์ ตันตระกูล</h4>
                <h6>("เอส")</h6>
                <h6>
                  ตำแหน่ง : <em>CEO & Founder</em>
                </h6>
                <div className="line-dec" />
                <span className="date">
                  <a href="https://web.facebook.com/woraphon.tengin.1">
                    <FaFacebookF size={20} />
                  </a>
                  <a href="https://www.instagram.com/phon_xm/">
                    <FaInstagram size={20} />
                  </a>
                  <a href="https://www.instagram.com/phon_xm/">
                    <FaLine size={20} />
                  </a>
                  <a href="https://www.instagram.com/phon_xm/">
                    <FaTiktok size={20} />
                  </a>
                  <a href="https://www.instagram.com/phon_xm/">
                    <FaTwitter size={20} />
                  </a>
                </span>
                <div className="line-dec" />
                <div className="text-end mt-auto">
                  <Link href={"/about/id"}>{"ดูเพิ่มเนติม"}</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="item">
              <div className="left-img">
                <img
                  src="/images/meprompt/chun.jpg"
                  alt=""
                  style={{ maxHeight: 250, objectFit: "cover" }}
                />
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
                <img
                  src="/images/meprompt/ploi.jpg"
                  alt=""
                  style={{ maxHeight: 250, objectFit: "cover" }}
                />
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
                  <h4>Apprentice ( Co-Op Gen 1 )</h4>
                </div>
              </div>
              <div className="row">
                {apperntice.map((apperntice) => (
                  <div key={apperntice.id} className="col-lg-4 col-md-6">
                    <div className="item">
                      <div className="left-img">
                        <img
                          src={apperntice.picture}
                          alt={apperntice.firstName.EN}
                          style={{ maxHeight: 250, objectFit: "cover" }}
                        />
                      </div>
                      <div className="right-content">
                        <h4>{apperntice.firstName.TH}</h4>
                        <a href="#">{apperntice.nickName.TH}</a>
                        <div className="line-dec" />
                        <h6>
                          ตำแหน่ง: <em>{apperntice.position.TH}</em>
                        </h6>
                        <h6>
                          หน้าที่: <em>{apperntice.duty.TH}</em>
                        </h6>
                        <span className="date">
                          <a href={apperntice.facebook}>
                            <FaFacebookF size={30} />
                          </a>
                          <a href={apperntice.instagram}>
                            <FaInstagram size={30} />
                          </a>
                          <a href={apperntice.line}>
                            <FaLine size={30} />
                          </a>
                          <a href={apperntice.tiktok}>
                            <FaTiktok size={30} />
                          </a>
                          <a href={apperntice.twitter}>
                            <FaTwitter size={30} />
                          </a>
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
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
              <div className="row">
                {appernticeGen2.map((appernticeGen2) => (
                  <div key={appernticeGen2.id} className="col-lg-4 col-md-6">
                    <div className="item">
                      <div className="left-img">
                        <img
                          src={appernticeGen2.picture}
                          alt={appernticeGen2.firstName.EN}
                          style={{ maxHeight: 250, objectFit: "cover" }}
                        />
                      </div>
                      <div className="right-content">
                        <h4>{appernticeGen2.firstName.TH}</h4>
                        <a href="#">{appernticeGen2.nickName.TH}</a>
                        <div className="line-dec" />
                        <h6>
                          ตำแหน่ง: <em>{appernticeGen2.position.TH}</em>
                        </h6>
                        <h6>
                          หน้าที่: <em>{appernticeGen2.duty.TH}</em>
                        </h6>
                        <span className="date">
                          <a href={appernticeGen2.facebook}>
                            <FaFacebookF size={30} />
                          </a>
                          <a href={appernticeGen2.instagram}>
                            <FaInstagram size={30} />
                          </a>
                          <a href={appernticeGen2.line}>
                            <FaLine size={30} />
                          </a>
                          <a href={appernticeGen2.tiktok}>
                            <FaTiktok size={30} />
                          </a>
                          <a href={appernticeGen2.twitter}>
                            <FaTwitter size={30} />
                          </a>
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
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
              <div className="row">
                {appernticeGen3.map((appernticeGen3) => (
                  <div key={appernticeGen3.id} className="col-lg-4 col-md-6">
                    <div className="item">
                      <div className="left-img">
                        <img
                          src={appernticeGen3.picture}
                          alt={appernticeGen3.firstName.EN}
                          style={{ maxHeight: 250, objectFit: "cover" }}
                        />
                      </div>
                      <div className="right-content">
                        <h4>{appernticeGen3.firstName.TH}</h4>
                        <a href="#">{appernticeGen3.nickName.TH}</a>
                        <div className="line-dec" />
                        <h6>
                          ตำแหน่ง: <em>{appernticeGen3.position.TH}</em>
                        </h6>
                        <h6>
                          หน้าที่: <em>{appernticeGen3.duty.TH}</em>
                        </h6>
                        <span className="date">
                          <a href={appernticeGen3.facebook}>
                            <FaFacebookF size={30} />
                          </a>
                          <a href={appernticeGen3.instagram}>
                            <FaInstagram size={30} />
                          </a>
                          <a href={appernticeGen3.line}>
                            <FaLine size={30} />
                          </a>
                          <a href={appernticeGen3.tiktok}>
                            <FaTiktok size={30} />
                          </a>
                          <a href={appernticeGen3.twitter}>
                            <FaTwitter size={30} />
                          </a>
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-12">
          <div className="current-bid">
            <div className="row">
              <div className="col-lg-12">
                <div className="mini-heading">
                  <h4>Apprentice ( Co-Op Gen 4 )</h4>
                </div>
              </div>
              <div className="row">
                {appernticeGen4.map((appernticeGen4) => (
                  <div key={appernticeGen4.id} className="col-lg-4 col-md-6">
                    <div className="item">
                      <div className="left-img">
                        <img
                          src={appernticeGen4.picture}
                          alt={appernticeGen4.firstName.EN}
                          style={{ maxHeight: 250, objectFit: "cover" }}
                        />
                      </div>
                      <div className="right-content">
                        <h4>{appernticeGen4.firstName.TH}</h4>
                        <a href="#">{appernticeGen4.nickName.TH}</a>
                        <div className="line-dec" />
                        <h6>
                          ตำแหน่ง: <em>{appernticeGen4.position.TH}</em>
                        </h6>
                        <h6>
                          หน้าที่: <em>{appernticeGen4.duty.TH}</em>
                        </h6>
                        <span className="date">
                          <a href={appernticeGen4.facebook}>
                            <FaFacebookF size={30} />
                          </a>
                          <a href={appernticeGen4.instagram}>
                            <FaInstagram size={30} />
                          </a>
                          <a href={appernticeGen4.line}>
                            <FaLine size={30} />
                          </a>
                          <a href={appernticeGen4.tiktok}>
                            <FaTiktok size={30} />
                          </a>
                          <a href={appernticeGen4.twitter}>
                            <FaTwitter size={30} />
                          </a>
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetailsCopy;
