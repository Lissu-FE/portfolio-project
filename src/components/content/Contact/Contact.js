import React from 'react';
import styles from './Contact.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

const Contact = () => (
    <div>
        <div className={cx('contact')}>
            Contact me
        </div>
        <div className={cx('card')}>
            <div className={cx('card-content')}>
                <div className={cx('card-content1')}>
                    <div className={cx('details')}>
                        Details
                    </div>
                    <div className={cx('email')}>
                        mary567@hanmail.net
                    </div>
                    <div className={cx('email')}>
                        010-7480-0682
                    </div>
                </div>
                <div className={cx('send-mail')}>
                    <a
                    className={cx('send-mail-content')}
                    href="mailto:mary567@hanmail.net"
                    rel="noopener noreferrer"
                    target="_blank"
                    >
                        Send mail
                    </a>
                </div>
            </div>
        </div>
    </div>
);

export default Contact;