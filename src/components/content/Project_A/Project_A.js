import React from "react";
import styles from './Project_A.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Project_A = () => (
    <div className={cx('project_a')}>
        <div className={cx('content')}>
            <div className={cx('p_outline')}>
                <div className={cx('Title')}>
                    <div className={cx('Title_padding')}>
                        <div className={cx('title_style')}>
                            전자결재시스템 | Java & 응용소프트웨어 개발 전문가 과정 팀 프로젝트
                        </div>
                        <p className={cx('explain')}>
                            조직 내의 전체 결재 과정을 전자화한 전자 결재 솔루션
                            <br />                        
                            결재용 문서 작성에서부터, 설정된 결재 경로를 따른 문서 회람, 도장 또는 사인을 사용한 승인,
                            반려, 문서 번호를 사용한 결재 문서 관리에 이르기까지 조직 내에서 물리적인 서류로 이루어지던
                            모든 결재 관련 활동을 전자 결재 시스템을 통해 가상 공간에서 효율적으로 수행합니다.
                            <br />
                            <br />
                            <div className={cx('my-role')}>
                                My role
                            </div>
                        </p>
                        <a>

                        </a>
                        <a>

                        </a>
                    </div>
                    <div className={cx('tags')}>
                        <span className={cx('hash-tag')}>
                            #MySQL
                        </span>
                        <span className={cx('hash-tag')}>
                            #java
                        </span>
                        <span className={cx('hash-tag')}>
                            #java
                        </span>
                        <span className={cx('hash-tag')}>
                            #java
                        </span>
                        <span className={cx('hash-tag')}>
                            #java
                        </span>
                        <span className={cx('hash-tag')}>
                            #java
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Project_A;