import React from 'react';
import styles from './Contact.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

const Contact = () => (
    <div>
        <div className={cx('contact')}>
            Contact me
        </div>
    </div>
);

export default Contact;