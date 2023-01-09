import React from "react";
import "./Header.scss";

export interface HeaderProps {
  label: string;
}

const Header = (props: HeaderProps) => {
  return <span>{props.label}</span>;
};

export default Header;
