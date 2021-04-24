import React from "react";
import styles from "./Header.scss";
import useHeader from "./useHeader";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const Header = () => {
  const { goTop } = useHeader();

  return (
    <div className={cx("header")} onClick={goTop}>
      <div className={cx("title")}>
        <span>&lt;</span>
        Lissu
        <span>&gt;</span>
      </div>
    </div>
  );
};

export default Header;
