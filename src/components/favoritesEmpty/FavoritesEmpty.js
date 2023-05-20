import React from "react";
import { Link } from "react-router-dom";

import "./favoritesEmpty.scss";

const FavoritesEmpty = () => {
  return (
    <div className="favorites-empty">
      <h2>Ooops, seems that you haven't added any shoes yet</h2>
      <Link to="/men">Catalog</Link>
    </div>
  );
};

export default FavoritesEmpty;
