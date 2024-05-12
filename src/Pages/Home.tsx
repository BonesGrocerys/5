import React, { useState } from "react";
import { Link } from "react-router-dom";
import Categories from "../Components/Categories";
import Footer from "../Components/Footer";

const Home: React.FC = () => {
  const [active, setActive] = useState<boolean>(true);
  return (
    <div>
      <div className="main-container">
        <div
          style={{
            backgroundImage: `url("https://p0.zoon.ru/preview/PBFmKzDRXZbELpo37417cQ/1280x763x85/1/3/6/original_63637a52b049a6c2f4099ad6_63df84b324fc31.36401217.jpg")`,
          }}
          className="img-container"
        >
          <button className="button-product">Записаться на приём</button>
        </div>
      </div>
      <div className="product-content">
        <h2 style={{ color: "#274d7b" }}>Наши услуги</h2>
        <Link to="/Product">
          <button style={{ marginTop: "100px" }} className="button-product">
            Список услуг
          </button>
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
