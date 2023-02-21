import React from 'react';
import styles from '../css/Header.module.css';
import mealsImage from '../../assets/meals.jpg';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
  return (
    <div>
      <header className={styles.header}>
        <div className={styles.heading}>
          <h1>YummyMeals</h1>
        </div>
        <div className={styles.cart}>
          <HeaderCartButton onClick={props.onShowCart} />
        </div>
      </header>
      <div className={styles['main-image']}>
        <img src={mealsImage} alt="meals.jpeg" />
      </div>
    </div>
  );
};

export default Header;
