import React from "react";

import visa from "../../assets/footer/visa.png";
import mastercard from "../../assets/footer/mastercard.png";

import "./footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <div className="footer__description">
          <h4>Shoes</h4>
          <p>
            Do you want to buy any shoes? You've come to the right place! Shoes
            is an online store that has a huge selection of popular sneakers. A
            wide range of models of popular brands from new collections will
            please many sneakerheads. Our online store sells shoes for men,
            women and all the models fit the size grid, so you can easily buy
            new sneakers.
          </p>
        </div>
        <div className="footer__info">
          <div className="footer__payments">
            <h4>We accept for payments:</h4>
            <div>
              <img src={visa} alt="visa" />
              <img src={mastercard} alt="mastercard" />
            </div>
          </div>
          <div className="footer__services">
            <div>
              <h4>Working hours:</h4>
              <span>Mon.-Fri.: 9 am - 9 pm</span>
            </div>
            <div>
              <h4>Email:</h4>
              <span>Shoes@gmail.com</span>
            </div>
            <span>© 2023, Shoes.com</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
