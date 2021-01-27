import './Testimonial.css';
import Image1 from '../../Images/prasta-laundry-2.png';
import Image2 from '../../Images/prasta-laundry-3.png';
import Image3 from '../../Images/prasta-laundry-4.png';

const Testimonial = () => {
  return (
    <div className='testimonials' id='testimonials'>
      <div className='inner'>
        <h1>Testimonial</h1>
        <div className='border'></div>

        <div className='row'>
          <div className='col'>
            <div className='testimonial'>
              <img src={Image1} alt='' />
              <div className='name'>Jackie Doe</div>
              <div className='stars'>
                <i className='fas fa-star'></i>
                <i className='fas fa-star'></i>
                <i className='fas fa-star'></i>
                <i className='fas fa-star'></i>
                <i className='fas fa-star'></i>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates earum, aperiam mollitia pariatur ut iure!
              </p>
            </div>
          </div>
          <div className='col'>
            <div className='testimonial'>
              <img src={Image2} alt='' />
              <div className='name'>Jenny Doe</div>
              <div className='stars'>
                <i className='fas fa-star'></i>
                <i className='fas fa-star'></i>
                <i className='fas fa-star'></i>
                <i className='fas fa-star'></i>
                <i className='fas fa-star'></i>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates earum, aperiam mollitia pariatur ut iure!
              </p>
            </div>
          </div>
          <div className='col'>
            <div className='testimonial'>
              <img src={Image3} alt='' />
              <div className='name'>John Doe</div>
              <div className='stars'>
                <i className='fas fa-star'></i>
                <i className='fas fa-star'></i>
                <i className='fas fa-star'></i>
                <i className='fas fa-star'></i>
                <i className='far fa-star'></i>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates earum, aperiam mollitia pariatur ut iure!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
