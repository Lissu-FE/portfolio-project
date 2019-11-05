import React from 'react';
import styles from './Header.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const Header = () => (
    <nav className={cx('header')}>
            <Link 
            className={cx('project')} 
            activeClass="active"
            to="project"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}>
                Project
            </Link>
    </nav>
);

export default Header;