import './Product.css';
import Product1 from '../../Images/product-1.jpg';
import Product2 from '../../Images/product-2.jpg';
import Product3 from '../../Images/product-3.jpg';
import Product4 from '../../Images/product-4.jpg';
import Product5 from '../../Images/product-5.jpg';
import Product6 from '../../Images/product-9.jpg';
import Product7 from '../../Images/product-7.jpg';
import Product8 from '../../Images/product-8.jpg';

const Product = () => {
  return (
    <>
      <div className='container' id='product'>
        <div className='product-title'>
          <h1>Produk Unggulan</h1>
        </div>
        <div className='row'>
          <div className='col-md-3 col-sm-6'>
            <div className='product-grid'>
              <div className='product-image'>
                <a href='#hero'>
                  <img className='pic-1' src={Product1} alt='' />
                  <img className='pic-2' src={Product1} alt='' />
                </a>
                <span className='product-trend-label'>TRENDING</span>
                <ul className='social'>
                  <li>
                    <a href='#hero' data-tip='Add to cart'>
                      <i className='fa fa-shopping-cart'></i>
                    </a>
                  </li>
                  {/* <li>
                    <a href='#hero' data-tip='Wishlist'>
                      <i className='fa fa-heart'></i>
                    </a>
                  </li>
                  <li>
                    <a href='#hero' data-tip='Compare'>
                      <i className='fa fa-random'></i>
                    </a>
                  </li>

                  <li>
                    <a href='#hero' data-tip='Quick View'>
                      <i className='fa fa-search'></i>
                    </a>
                  </li> */}
                </ul>
              </div>

              <div className='product-content'>
                <h3 className='title'>
                  <a href='#hero'>Perfume Wangi</a>
                </h3>
                <div className='price'>300K</div>
              </div>
            </div>
          </div>
          <div className='col-md-3 col-sm-6'>
            <div className='product-grid'>
              <div className='product-image'>
                <a href='#hero'>
                  <img className='pic-1' src={Product2} alt='' />
                  <img className='pic-2' src={Product2} alt='' />
                </a>
                <span className='product-trend-label'>TRENDING</span>
                <ul className='social'>
                  <li>
                    <a href='#hero' data-tip='Add to cart'>
                      <i className='fa fa-shopping-cart'></i>
                    </a>
                  </li>
                </ul>
              </div>

              <div className='product-content'>
                <h3 className='title'>
                  <a href='#hero'>Perfume Wangi</a>
                </h3>
                <div className='price'>400K</div>
              </div>
            </div>
          </div>
          <div className='col-md-3 col-sm-6'>
            <div className='product-grid'>
              <div className='product-image'>
                <a href='#hero'>
                  <img className='pic-1' src={Product3} alt='' />
                  <img className='pic-2' src={Product3} alt='' />
                </a>
                <span className='product-trend-label'>TRENDING</span>
                <ul className='social'>
                  <li>
                    <a href='#hero' data-tip='Add to cart'>
                      <i className='fa fa-shopping-cart'></i>
                    </a>
                  </li>
                </ul>
              </div>

              <div className='product-content'>
                <h3 className='title'>
                  <a href='#hero'>Perfume Wangi</a>
                </h3>
                <div className='price'>350K</div>
              </div>
            </div>
          </div>
          <div className='col-md-3 col-sm-6'>
            <div className='product-grid'>
              <div className='product-image'>
                <a href='#hero'>
                  <img className='pic-1' src={Product4} alt='' />
                  <img className='pic-2' src={Product4} alt='' />
                </a>
                <span className='product-trend-label'>TRENDING</span>
                <ul className='social'>
                  <li>
                    <a href='#hero' data-tip='Add to cart'>
                      <i className='fa fa-shopping-cart'></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div className='product-content'>
                <h3 className='title'>
                  <a href='#hero'>Perfume Wangi</a>
                </h3>
                <div className='price'>500K</div>
              </div>
            </div>
          </div>
          <div className='col-md-3 col-sm-6'>
            <div className='product-grid'>
              <div className='product-image'>
                <a href='#hero'>
                  <img className='pic-1' src={Product5} alt='' />
                  <img className='pic-2' src={Product5} alt='' />
                </a>
                <span className='product-trend-label'>TRENDING</span>
                <ul className='social'>
                  <li>
                    <a href='#hero' data-tip='Add to cart'>
                      <i className='fa fa-shopping-cart'></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div className='product-content'>
                <h3 className='title'>
                  <a href='#hero'>Perfume Wangi</a>
                </h3>
                <div className='price'>600K</div>
              </div>
            </div>
          </div>
          <div className='col-md-3 col-sm-6'>
            <div className='product-grid'>
              <div className='product-image'>
                <a href='#hero'>
                  <img className='pic-1' src={Product6} alt='' />
                  <img className='pic-2' src={Product6} alt='' />
                </a>
                <span className='product-trend-label'>TRENDING</span>
                <ul className='social'>
                  <li>
                    <a href='#hero' data-tip='Add to cart'>
                      <i className='fa fa-shopping-cart'></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div className='product-content'>
                <h3 className='title'>
                  <a href='#hero'>Perfume Wangi</a>
                </h3>
                <div className='price'>700K</div>
              </div>
            </div>
          </div>
          <div className='col-md-3 col-sm-6'>
            <div className='product-grid'>
              <div className='product-image'>
                <a href='#hero'>
                  <img className='pic-1' src={Product7} alt='' />
                  <img className='pic-2' src={Product7} alt='' />
                </a>
                <span className='product-trend-label'>TRENDING</span>
                <ul className='social'>
                  <li>
                    <a href='#hero' data-tip='Add to cart'>
                      <i className='fa fa-shopping-cart'></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div className='product-content'>
                <h3 className='title'>
                  <a href='#hero'>Perfume Wangi</a>
                </h3>
                <div className='price'>850K</div>
              </div>
            </div>
          </div>
          <div className='col-md-3 col-sm-6'>
            <div className='product-grid'>
              <div className='product-image'>
                <a href='#hero'>
                  <img className='pic-1' src={Product8} alt='' />
                  <img className='pic-2' src={Product8} alt='' />
                </a>
                <span className='product-trend-label'>TRENDING</span>
                <ul className='social'>
                  <li>
                    <a href='#hero' data-tip='Add to cart'>
                      <i className='fa fa-shopping-cart'></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div className='product-content'>
                <h3 className='title'>
                  <a href='#hero'>Perfume Wangi</a>
                </h3>
                <div className='price'>400K</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
