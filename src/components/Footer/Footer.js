import './Footer.css';

const Footer = () => {
  return (
    <>
      <footer className='footer'>
        <div className='inner_footer'>
          <div className='logo_container'>
            <h1 classNameName='footer-logo'>AZ Perfume</h1>
          </div>

          <div className='footer_third'>
            <h1>Need Help?</h1>
            <a href='#hero'>Terms &amp;Conditions</a>
            <a href='#hero'>Privacy Policy</a>
          </div>
          <div className='footer_third'>
            <h1>More</h1>
            <a href='#hero'>Brochures</a>
            <a href='#hero'>Donate</a>
            <a href='#hero'>Governance</a>
            <a href='#hero'>Impact Reports</a>
          </div>
          <div className='footer_third'>
            <h1>Follow us</h1>
            <li>
              <a href='#hero'>
                <i className='fab fa-facebook'></i>
              </a>
            </li>
            <li>
              <a href='#hero'>
                <i className='fab fa-twitter'></i>
              </a>
            </li>
            <li>
              <a href='#hero'>
                <i className='fab fa-instagram'></i>
              </a>
            </li>
            <li>
              <a href='#hero'>
                <i className='fab fa-youtube'></i>
              </a>
            </li>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
