import React from 'react'
import './Home.css'
import Product from './Product';
function Home() {
    return (
      <div className='home'>
          <div className='home__container'>
           <img src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'
           className='home_image'></img>
          
        <div className='home_row'>
          <Product
          title = "The lean startup"
          price={19.99}
          image='https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg'
          rating={5}
          /> 

          <Product
           title = "Thousand Splendid Suns"
           price={25.99}
           image='https://khaledhosseini.com/wp-content/uploads/2018/08/1000suns-shadow.png '
           rating={5}
          />
          
        </div>
        <div className='home_row'>
        <Product
         title = "Sea Prayer"
         price={11.35}
         image='https://khaledhosseini.com/wp-content/uploads/2018/08/seaprayer-uk-shadow.png'
         rating={3}
        />
        <Product
         title = "And The Mountains Echoed"
         price={25.99}
         image='https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1358190204l/16115612.jpg'
         rating={5}
        />
        <Product
         title = "Kite Runner"
         price={54.99}
         image='https://khaledhosseini.com/wp-content/uploads/2018/08/kite-shadow.png'
         rating={5}
        />
        </div>
        <div className='home_row'>
        <Product
         title = "Forty Rules Of Love"
         price={40.59}
         image='https://miro.medium.com/max/700/1*XqHIC1QN8VCEcBaHdtWvxg.jpeg'
         rating={5}
         />
         
        </div>
        </div>
      </div>
    );
  }
  
  export default Home;
  