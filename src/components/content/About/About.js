import React from "react";
import styles from "./About.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const About = () => {
  return (
    <div className={cx("about")}>
      <div className={cx("about-me")}>About me</div>
      <div className={cx("about-content")}>
        안녕하세요. 개발자 이슬입니다.
        <br />
        컴퓨터 하나만 있으면 행복한 개발자로 살아가고 있습니다.
        <br />
        단순히 코딩만 잘하는 개발자가 아니라 서비스 전체를 이해하는, 매일
        성장하는 개발자입니다
      </div>
    </div>
  );
};

export default About;
