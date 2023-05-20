import React from "react";
import { enableBodyScroll, disableBodyScroll } from "body-scroll-lock";

import { NavLink } from "react-router-dom";

import "./modal.scss";

const Modal = ({ setIsVisible }) => {
  React.useEffect(() => {
    disableBodyScroll(document.body);

    return () => enableBodyScroll(document.body);
  }, []);

  const setActiveLink = ({ isActive }) => {
    return isActive ? "modal__link_active" : "modal__link";
  };

  const navLinks = ["men", "women", "unisex"].map((link) => {
    return (
      <NavLink
        key={link}
        onClick={() => setIsVisible(false)}
        className={setActiveLink}
        to={`/${link}`}
      >
        {link}
      </NavLink>
    );
  });

  return (
    <div onClick={() => setIsVisible(false)} className="modal">
      <div
        onClick={(event) => event.stopPropagation()}
        className="modal__content"
      >
        <ul>
          {navLinks}

          <li>
            <NavLink
              className={setActiveLink}
              onClick={() => setIsVisible(false)}
              to="/favorites"
            >
              <svg width="40" height="25" viewBox="0 0 20 18" fill="none">
                <path
                  d="M17.612 2.38797C17.1722 1.94794 16.65 1.59888 16.0752 1.36073C15.5005 1.12258 14.8844 1 14.2623 1C13.6401 1 13.0241 1.12258 12.4493 1.36073C11.8746 1.59888 11.3524 1.94794 10.9126 2.38797L9.99977 3.30075L9.08699 2.38797C8.19858 1.49956 6.99364 1.00046 5.73725 1.00046C4.48085 1.00046 3.27591 1.49956 2.38751 2.38797C1.4991 3.27637 1 4.48131 1 5.73771C1 6.9941 1.4991 8.19904 2.38751 9.08745L9.99977 16.6997L17.612 9.08745C18.0521 8.64763 18.4011 8.12542 18.6393 7.55066C18.8774 6.9759 19 6.35985 19 5.73771C19 5.11556 18.8774 4.49951 18.6393 3.92475C18.4011 3.34999 18.0521 2.82779 17.612 2.38797Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </NavLink>
            <NavLink
              className={setActiveLink}
              onClick={() => setIsVisible(false)}
              to="/cart"
            >
              <svg width="40" height="25" viewBox="0 0 20 20" fill="none">
                <path
                  d="M1 1H4.27273L6.46545 11.9555C6.54027 12.3321 6.7452 12.6705 7.04436 12.9113C7.34351 13.1522 7.71784 13.2801 8.10182 13.2727H16.0545C16.4385 13.2801 16.8129 13.1522 17.112 12.9113C17.4112 12.6705 17.6161 12.3321 17.6909 11.9555L19 5.09091H5.09091M8.36364 17.3636C8.36364 17.8155 7.99732 18.1818 7.54545 18.1818C7.09359 18.1818 6.72727 17.8155 6.72727 17.3636C6.72727 16.9118 7.09359 16.5455 7.54545 16.5455C7.99732 16.5455 8.36364 16.9118 8.36364 17.3636ZM17.3636 17.3636C17.3636 17.8155 16.9973 18.1818 16.5455 18.1818C16.0936 18.1818 15.7273 17.8155 15.7273 17.3636C15.7273 16.9118 16.0936 16.5455 16.5455 16.5455C16.9973 16.5455 17.3636 16.9118 17.3636 17.3636Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Modal;
