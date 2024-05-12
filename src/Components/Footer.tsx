import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="footer-content">
        <a className="text">
          Наш адрес: г. Москва, проспект Маршала Жукова, 35
        </a>
        <a className="text">Номер телефона:+7 499 342-12-56</a>
        <a className="text">Email: clients@zdorovaya-lapka.ru</a>
        <div className="text">
          <a className="social" href="https://vk.com/zdoravaya_lapka">
            VK
          </a>
          <a className="social" href="https://t.me/+WqKcasdRe-VQyYasasd)">
            Telegram
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
