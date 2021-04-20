import React from "react";
import styles from './Project.scss';
import classNames from 'classnames/bind';
import Project_A from 'components/content/Project_A';

const cx = classNames.bind(styles);

const Project = () => (
    <div className={cx('project')}>
        <div className={cx('project-title')}>
            Projects done so far
        </div>
        <Project_A />
    </div>
);

export default Project;