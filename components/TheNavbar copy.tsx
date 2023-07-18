import React, { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { LanguageContext } from '@/components/Language/LanguageContext';
import BtnSetting from './Language/BtnSetting';
import { navData } from '@/data/navber';
import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const TheNavber: React.FC = () => {
  const router = useRouter();
  const { currentLanguage } = useContext(LanguageContext);
  const [isFaded, setIsFaded] = useState<boolean>(false);
  const [isMenuTriggerActive, setIsMenuTriggerActive] = useState<boolean>(false);

  useEffect(() => {
    const scrollHandler = () => {
      const shouldFade: boolean = window.scrollY > 50;
      setIsFaded(shouldFade);
    };

    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, []);
  const navList = navData.map((navItem, index) => (
    <Link key={index} href={navItem?.pathLink} className={`fw-bold ${router?.pathname === navItem?.pathLink ? "active" : ""}`}>
      {currentLanguage === "TH" ? navItem.name?.TH : navItem.name?.EN}
    </Link>
  ));
  const navLists = navData.map((navItem, index) => (
    <li key={index}>
      <Link href={navItem?.pathLink} className={`fw-bold ${router?.pathname === navItem?.pathLink ? "active" : ""}`}>
        {currentLanguage === "TH" ? navItem.name?.TH : navItem.name?.EN}
      </Link>
    </li>
  ));
  return (
    <>
      <div className='navber-show'>
        <header className={`header-area header-sticky ${isFaded ? 'background-header' : ''}`}>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <nav className="main-nav">
                  <Link href="/" className="logo d-flex align-items-center fw-bold">
                    <img src="https://imagedelivery.net/QZ6TuL-3r02W7wQjQrv5DA/907bdcd3-565b-4ae1-045b-c4d966eaa600/350" alt="" className='me-2 d-flex align-item-flex-end' />
                    <span className='w-100'>Me Prompt Technology</span>
                  </Link>
                  <ul className="nav">
                    {navLists}
                  </ul>
                  <BtnSetting />
                  <button className={`menu-trigger ${isMenuTriggerActive ? 'active' : ''}`} onClick={() => setIsMenuTriggerActive(!isMenuTriggerActive)}>
                    <span>Menu</span>
                  </button>
                </nav>
              </div>
            </div>
          </div>
        </header>
      </div>

      {/* <div className='navber-mepropmt'>
        <Navbar expand="lg" className="" bsPrefix={`header-area header-sticky ${isFaded ? 'background-header' : ''}`}>
          <Container className="">
            <Link href="/" className='navbar-brand my-2 fw-bold'>
              <img src="https://imagedelivery.net/QZ6TuL-3r02W7wQjQrv5DA/907bdcd3-565b-4ae1-045b-c4d966eaa600/350" alt="" className='me-2 d-flex align-item-flex-end' />
              <span className='w-100'>Me Prompt Technology</span>
            </Link>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                {navList}
                <Link href="#action1">Home</Link>
                <Link href="#action2">Link</Link>
                <NavDropdown title="Link" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
                <Link href="#" >
                  Link
                </Link>
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div > */}
    </>
  );
}

export default TheNavber;
