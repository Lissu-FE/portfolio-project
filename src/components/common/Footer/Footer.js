import React from 'react';
import styles from './Footer.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const Footer = () => (
    <div className={cx('footer')}>
        <div className={cx('ali')}>
            <div>
                stacks used
            </div>
            <div className={cx('font-bold')}>
                React.js
            </div>
        </div>
    </div>
);

export default Footer;