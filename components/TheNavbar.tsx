import React from 'react';
import BtnSetting from './Language/BtnSetting';

const TheNavber: React.FC = () => {
  return (

    <>
      <header className="header-area header-sticky">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="main-nav">
                <a href="index" className="logo">
                  <img src="/images/logo.png" alt="" />
                </a>
                <ul className="nav">
                  <li><a href="index" className="active">หน้าแรก</a></li>
                  <li><a href="explore">ข่าว</a></li>
                  <li><a href="details">เกี่ยวกับเรา</a></li>
                  <li><a href="author">ผลงาน</a></li>
                  <li><a href="create">ติดต่อเรา</a></li>

                </ul>
                <BtnSetting />
                <a className='menu-trigger'>
                  <span>Menu</span>
                </a>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default TheNavber;
