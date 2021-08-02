import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as LogoImg } from "../../assets/svg/logo.svg";

const Logo = () => {
  return (
    <Link to="/">
      <LogoImg />
    </Link>
  );
};

export default Logo;
