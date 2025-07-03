import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem } from '../cartIcon/redux/cartSlice';
import styles from './FoodItem.module.css';
import { FaStar } from 'react-icons/fa'; 

export default function FoodItem({
  id,
  name,
  description,
  price,
  oldPrice,
  image,
  discount,
  rating,
  deliveryTime,
}) {
  const dispatch = useDispatch();

  const quantity = useSelector((state) =>
    state.cart.items.find((item) => item.id === id)?.quantity || 0
  );

  const handleAdd = () => {
    dispatch(addItem({ id, name, price }));
  };

  const handleRemove = () => {
    dispatch(removeItem(id));
  };

  return (
    <div className={styles.foodItem}>
      <div className={styles.imageContainer}>
        <img className={styles.image} src={image} />
        <span className={styles.discountBadge}>{discount}% OFF</span>
        <span className={styles.deliveryTime}>{deliveryTime}</span>
      </div>
      <div className={styles.content}>
        <p className={styles.foodTitle}>{name}</p>
        <p className={styles.foodDescription}>{description}</p>
        <div className={styles.rating}>
          <FaStar className={styles.starIcon} /> <span>{rating}</span>
        </div>
        <div className={styles.price}>
          <span className={styles.foodPrice}>₹{price}</span>
          <s className={styles.oldPrice}>₹{oldPrice}</s>
        </div>
        {quantity === 0 ? (
          <button className={styles.addBtn} onClick={handleAdd}>
            Add to Cart
          </button>
        ) : (
          <div className={styles.btnContainer}>
            <button onClick={handleRemove}>-</button>
            <span>{quantity}</span>
            <button onClick={handleAdd}>+</button>
          </div>
        )}
      </div>
    </div>
  );
}
