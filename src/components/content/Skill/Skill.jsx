import React from "react";
import styles from "./Skill.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const Skill = (props) => (
  <div className={cx("skillWrapper")}>
    <div className={cx("about-me")}>I Can do </div>
  </div>
);

export default Skill;
