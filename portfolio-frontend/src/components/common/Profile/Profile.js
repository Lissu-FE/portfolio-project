import React from 'react';
import styles from './Profile.scss';
import profile from '../../../styles/image/profile.jpg';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const Profile = () => (
    <div className={cx('profile')}>
        <img 
            className={cx('picture')}
            src={profile}
            alt="me"
        />
    </div>
);

export default Profile;