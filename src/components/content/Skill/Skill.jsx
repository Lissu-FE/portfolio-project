import React from 'react'
import styles from './Skill.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

const Skill = () => {
  return (
    <div className={cx('skillWrapper')}>
      <div className={cx('skillTitle')}>I Can do </div>
      <div></div>
    </div>
  )
}

export default Skill
