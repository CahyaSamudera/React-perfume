import React, { useState, useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  Bars,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from './NavbarElement';

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to='/' onClick={toggleHome} scrollNav={scrollNav}>
            AZ Perfume
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <Bars scrollNav={scrollNav} />
          </MobileIcon>
          <NavMenu scrollNav={scrollNav}>
            <NavItem>
              <NavLinks
                to='about'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
              >
                Tentang Kami
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to='product'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
              >
                Produk
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to='testimonials'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
              >
                Testimoni
              </NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink
              scrollNav={scrollNav}
              to='contact'
              smooth={true}
              duration={500}
              spy={true}
              exact='true'
              offset={-80}
            >
              Hubungi Kami
            </NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
