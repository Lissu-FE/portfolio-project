import React from "react";
import styles from './Project.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Project = () => (
    <div className={cx('project')}>
        <div className={cx('project-title')}>
            Projects done so far
        </div>
    </div>
);

export default Project;