import { WatchDetail, ProductDetail, LaptopDetail, headphonesDetail } from "../Data/ProductDetail";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { TodaysDeals } from "../Data/SliderDetail";

const ProductSlider = () => {

  const styles = {
    container: {
      backgroundColor: '#fff',
      margin: '1rem'
    },
    titleBox: {
      display: 'flex',
      justifyContent: 'start',
      padding: '0 5px',
      alignItems: 'center'
    },
    h1: {
      color: 'black'
    }
  };

  return (
    <>
      <div style={styles.container}>
        <div style={styles.titleBox}>
          <h1 style={styles.h1}>Today's Deals </h1>
          <span className="text-[#007185] no-underline cursor-pointer transition-all duration-300 ease-in-out px-4 overflow-hidden hover:text-red-500">See all deals</span>
        </div>
        <ProductCardSlider Product={TodaysDeals} />
      </div>

      <ProductCardSlider Product={WatchDetail} />
      <ProductCardSlider Product={ProductDetail} />
      <ProductCardSlider Product={LaptopDetail} />
      <ProductCardSlider Product={headphonesDetail} />

      <div style={styles.container}>
        <div style={styles.titleBox}>
          <h1 style={styles.h1}>Today's Deals </h1>
          <span className="text-[#007185] no-underline cursor-pointer transition-all duration-300 ease-in-out px-4 overflow-hidden hover:text-red-500">See all deals</span>
        </div>
        <ProductCardSlider Product={LaptopDetail} />
      </div>
    </>
  );
};

export default ProductSlider;

const ProductCardSlider = ({ Product }) => {

  var settings2 = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <Slider {...settings2} className="slierCarousel">
      {Product.map((item) => (
        <div><ProductCard2
          id={item.id}
          productImage={item.productImage || item.image}
          productName={item.productName || item.name}
        /></div>
      ))}
    </Slider>
  );
};

const ProductCard2 = ({ productImage, productName, id }) => {
  return (
    <Link
      to={`/ProductPaga/` + id}
      key={id}>
      <div className=" flex flex-col p-2 text-black w-fit" >
        <div className=" bg-[#f7f8f8] flex justify-center">
          <img
            className=" w-[180px] h-[200px]"
            src={productImage}
            alt="" />
        </div>
        <div className="truncate w-56 h-20 overflow-hidden whitespace-nowrap">
          <p>
            <span className="bg-red-500 text-white p-1 mx-1 font-semibold text-sm">Up to 17% off</span>
            <span className="text-red-500 p-1 mx-1 font-semibold text-sm">Deal of the Day</span>
          </p>
          <p className="text-sm py-2 text-[#2d2929] ">{productName}</p>
        </div>
      </div>
    </Link>
  );
};

