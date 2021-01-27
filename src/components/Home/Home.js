import './Home.css';
import { Link as LinkS } from 'react-scroll';
import styled from 'styled-components';
import Icon7 from '../../Images/bottle.png';

const HomeBtn = styled(LinkS)`
  display: inline-block;
  background-color: #b61428;
  color: #fff !important;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  transition: 0.3s;
  cursor: pointer;
  text-decoration: none;
  margin-top: 15px;

  &:hover {
    transform: scale(1.05);
    transition: all 0.5s ease-out;
  }
`;

const Home = () => {
  return (
    <>
      <div className='home' id='hero'>
        <div className='home__container bd-container bd-grid'>
          <div className='home__data'>
            <h1 className='home__title'>Perfume Terbaik</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos fugit
              ipsa veritatis enim ex quas facere atque est laudantium vitae!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
              asperiores quod totam similique vero quos cum commodi vitae
              repellat, eos nihil sequi, a odit adipisci sint at explicabo! Rem
              in debitis ipsa aperiam, unde inventore.
            </p>
            <HomeBtn to='product'>Lihat Produk</HomeBtn>{' '}
          </div>
          <img src={Icon7} alt='' className='home__img' />
        </div>
      </div>
    </>
  );
};

export default Home;
