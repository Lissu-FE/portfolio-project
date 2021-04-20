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
        to="/"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}>
            Lee Seul
        </Link>
</nav>
);

export default Header;