import React from 'react';
import styles from '../css/MealsSummary.module.css';

const MealsSummary = () => {
  return (
    <section className={styles.summary}>
      <h2>Delicious Bengali Food, Delivered To You</h2>
      <p>
        Choose your favorite bengali meal from our broad selection of available
        bengali delicay and enjoy a delicious lunch or dinner at home.
      </p>
      <p>
        All our dishes are cooked with high-quality ingredients and love,
        just-in time and of course by experienced chefs!
      </p>
    </section>
  );
};

export default MealsSummary;
