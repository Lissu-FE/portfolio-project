import React from 'react';
import styles from './Profile.scss';
import profile from '../../../styles/image/profile.jpg';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";

const cx = classNames.bind(styles);

const Profile = () => (
    <div className={cx('profile')}>
        <img 
            className={cx('picture')}
            src={profile}
            alt="me"
        />
        <div className={cx('github')}>
            <a className={cx('github-link')}
            href="https://github.com/WhiteSeul"
            rel="noopener noreferrer"
            target="_blank"
            >
                <FontAwesomeIcon className="icon-size" icon={faGithub} />
                <div className="text-size">github</div>
            </a>
            <a className={cx('Instagram-link')}
            href="https://www.instagram.com/kiki_raccoon/"
            rel="noopener noreferrer"
            target="_blank"
            >
                <FontAwesomeIcon className="icon-size" icon={faInstagram} />
                <div className="text-size">Instagram</div>
            </a>
        </div>
        <div className={cx('introduce')}>
            <div className={cx('in_en')}>
            Hi, I'm <span className={cx('color-text')}>Lee Seul</span>
            </div>
            <div className={cx('in_co')}>
                <span className={cx('color-text')}>개발자</span> Developer
            </div>
        </div>
    </div>
);

export default Profile;