import './Contact.css';
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

const Contact = () => {
  return (
    <div>
      <div className='contact' id='contact'>
        <div className='content'>
          <h2>Kontak Kami</h2>
        </div>
        <div className='container-2'>
          <div className='contactInfo'>
            <div className='box'>
              <div className='icon'>
                <FaMapMarkerAlt />
              </div>
              <div className='text'>
                <h3>Alamat</h3>
                <p>
                  Jl. Adipati, Jakarta
                  <br /> 15713
                </p>
              </div>
            </div>
            <div className='box'>
              <div className='icon'>
                {' '}
                <FaPhone />{' '}
              </div>
              <div className='text'>
                <h3>Telpon</h3>
                <p>021 1234 5678</p>
              </div>
            </div>
            <div className='box'>
              <div className='icon'>
                {' '}
                <FaEnvelope />{' '}
              </div>
              <div className='text'>
                <h3>Email</h3>
                <p>azperfume@gmail.com</p>
              </div>
            </div>
          </div>
          <div className='contactForm'>
            <form>
              <h2>Kirim Pesan</h2>
              <div className='inputBox'>
                <input type='text' name='' required />
                <span>Nama Lengkap</span>
              </div>
              <div className='inputBox'>
                <input type='text' name='' required />
                <span>Email</span>
              </div>
              <div className='inputBox'>
                <textarea required />
                <span>Tulis Pesan Anda ...</span>
              </div>
              <div className='inputBox'>
                <input type='submit' name='' value='Kirim' />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
