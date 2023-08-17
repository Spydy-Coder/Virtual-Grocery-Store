import { Link } from "react-router-dom";
import NavBar from "../features/navbar/Navbar";
import ProductList from "../features/product/components/ProductList";
import Footer from "../features/common/Footer";
import Carousel1 from "../features/Carousel";
import Addition from "../features/product/components/Addition";
import "./Home.css";

function Home() {
  const images = [
    "https://www.jiomart.com/images/cms/aw_rbslider/slides/1691432049_Oral_Care_Fest_Without_Logo_Desktop.jpg?im=Resize=(1680,320)",
    "https://www.jiomart.com/images/cms/aw_rbslider/slides/1692180619_Delicious_Deals_Savor_the_Savings_Desktop.jpg?im=Resize=(1680,320)",
    "https://www.jiomart.com/images/cms/aw_rbslider/slides/1692265739_Max_Discounts_On_Daily_Essentials_Desktop.jpg?im=Resize=(1680,320)",
    "https://www.jiomart.com/images/cms/aw_rbslider/slides/1690827231_Shop_For_Monthly_Essentials_Desktop.jpg?im=Resize=(1680,320)",
  ];

  return (
    <div className="whole">
      <NavBar>
        <div
          id="carouselExampleAutoplaying"
          class="carousel slide"
          data-bs-ride="carousel"
          data-bs-interval="3000"
        >
          <div class="carousel-inner">
            {images.map((image, index) => (
              <div class="carousel-item active " key={index}>
                <img
                  src={image}
                  class="d-block w-100 h-45 object-contain object-center"
                  alt="..."
                />
              </div>
            ))}
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>

        <div className="child22 mt-2">
          <img
            src="https://d1n5l80rwxz6pi.cloudfront.net/indian-grocery-items.jpg"
            alt=""
          />
        </div>

        <div className="child22 mt-2">
          <img
            src="https://i.pinimg.com/originals/17/e8/f1/17e8f167cf008662215523f379064c27.png"
            alt=""
          />
        </div>

        <Addition />

        <ProductList></ProductList>
      </NavBar>
      <Footer></Footer>
    </div>
  );
}

export default Home;
