import React from 'react';
import styles from '../css/AvailableMeals.module.css';
import Card from '../ui/Card';
import MealItem from './MealItem/MealItem';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Rui Kalia',
    description: 'Rohu fish with spicy onion gravy',
    price: 10.99,
  },
  {
    id: 'm2',
    name: 'Sorshe Ilish',
    description: 'Ilsha with mustard paste gravy',
    price: 25.99,
  },
  {
    id: 'm3',
    name: 'Vetki Kola Paturi',
    description:
      'Baked Vetki fish fillet marinated with mustard and coconut paste wrapped in banana leaf',
    price: 20.49,
  },
  {
    id: 'm4',
    name: 'Mutton Kosha',
    description: 'Spicy mutton curry',
    price: 22.49,
  },
];

const AvailableMeals = () => {
  return (
    <section className={styles.meals}>
      <Card>
        <ul>
          {/* {DUMMY_MEALS.map((meal) => (
            <li>{meal.name}</li>
          ))} */}
          {DUMMY_MEALS.map((meal) => (
            <MealItem
              key={meal.id}
              id={meal.id}
              name={meal.name}
              description={meal.description}
              price={meal.price}
            />
          ))}
        </ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
