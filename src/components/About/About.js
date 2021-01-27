import './About.css';
import About1 from '../../Images/perfume-3.jpg';

const About = () => {
  return (
    <>
      <div className='about-area' id='about'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-4'>
              <div className='about-img'>
                <img src={About1} alt='' />
              </div>
            </div>
            <div className='col-lg-6 col-lg-offset-1'>
              <div className='about-text'>
                <h2>A-Z Perfume</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatum in, sit deserunt sint expedita commodi provident
                  eos tempore obcaecati illum amet ut vero voluptas totam
                  debitis. Amet impedit ipsa aut.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Necessitatibus debitis quasi veritatis soluta doloremque ullam
                  rerum, sequi atque porro quam repellendus beatae quas maxime
                  amet, vel eveniet delectus cumque, tenetur perspiciatis
                  laborum ad. Atque, ipsam?
                </p>
                <a href='#hero'>Selengkapnya</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
