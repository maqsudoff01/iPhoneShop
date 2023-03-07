import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'


const Search = () => {

  const responsive = {
    superLargeDesktop: {
     
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
      slidesToSlide: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1
    }
  };

  return (
    <div className='py-20'>
      <div className='flex justify-center font-semibold text-4xl mt-10 mb-5 text-blue-500 '>
        <h1>Welcome to iPhone shop</h1>
      </div>

      <div className=''>
      <Carousel responsive={responsive}>

        <img src="https://fora.kz/images/content/products/631211/apple-iphone-14-256gb-blue_6324257a005b3.jpg" alt="" />
        <img src="https://mcstore.com.ua/image/cache/catalog/MLDX3-1634656077-600x600.jpg" alt="" />
        <img src="https://fora.kz/images/content/products/631211/apple-iphone-14-256gb-blue_6324257a005b3.jpg" alt="" />
        <img src="https://mcstore.com.ua/image/cache/catalog/MLDX3-1634656077-600x600.jpg" alt="" />
        <img src="https://fora.kz/images/content/products/631211/apple-iphone-14-256gb-blue_6324257a005b3.jpg" alt="" />
        <img src="https://mcstore.com.ua/image/cache/catalog/MLDX3-1634656077-600x600.jpg" alt="" />
        <img src="https://fora.kz/images/content/products/631211/apple-iphone-14-256gb-blue_6324257a005b3.jpg" alt="" />
        <img src="https://mcstore.com.ua/image/cache/catalog/MLDX3-1634656077-600x600.jpg" alt="" />
      </Carousel>
      </div>
      
    </div>
  )
}

export default Search