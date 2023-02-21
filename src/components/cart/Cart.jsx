import React from 'react';
import styles from '../css/Cart.module.css';
import Modal from '../ui/Modal';

const Cart = (props) => {
  const cartItems = [
    {
      id: 'm1',
      name: 'Rui Kalia',
      description: 'Rohu fish with spicy onion gravy',
      price: 10.99,
    },
  ];
  return (
    <Modal onClose={props.onClose}>
      <ul className={styles['cart-items']}>
        {cartItems.map((item) => (
          <li>{item.name}</li>
        ))}
      </ul>
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={styles.actions}>
        <button className={styles['button-alt']} onClick={props.onClose}>
          Close
        </button>
        <button className={styles.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
