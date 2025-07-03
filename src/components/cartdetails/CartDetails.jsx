import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem, clearCart } from "../cartIcon/redux/cartSlice";
import Checkout from "../checkout/Checkout";
import styles from "./CartDetails.module.css";

export default function CartDetails({ closeCart }) {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const [showCheckout, setShowCheckout] = useState(false);

  const totalAmount = items.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  const keepOpenCart = (e) => {
    e.stopPropagation();
  };

  const clearCartBtn = () => {
    dispatch(clearCart());
  };

  const handleCheckout = () => {
    setShowCheckout(true);
    dispatch(clearCart());
  };

  const handleDecrement = (id) => {
    return () =>{dispatch(removeItem(id))}
  }

const removeItemBtn = (quantity, id) =>{
  return () => {
    for (let i = 0; i < quantity; i++) {
      dispatch(removeItem(id));
    }
  }
}

  const handleIncrement = (id,name,price) => {
    return () =>
      dispatch(
        addItem({
          id: id,
          name: name,
          price: price,
        })
      )
  }

  return (
    <>
      {showCheckout && <Checkout onClose={closeCart} />}

      <div className={styles.container} onClick={closeCart}>
        <div className={styles.popup} onClick={keepOpenCart}>
          <h2>Your Cart</h2>

          {items.length === 0 ? (
            <p className={styles.empty}>Your cart is empty.</p>
          ) : (
            <>
              <ul className={styles.itemList}>
                {items.map((item) => (
                  <li key={item.id} className={styles.item}>
                    <div className={styles.itemDetails}>
                      <span>{item.name}</span>
                      <span className={styles.itemTotal}>
                        {item.quantity} x ₹{item.price} = ₹
                        {item.quantity * item.price}
                      </span>
                    </div>
                    <div className={styles.actions}>
                      <button
                        onClick={handleDecrement(item.id)}
                        disabled={item.quantity === 0}
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={handleIncrement(item.id, item.name, item.price) }
                      >
                        +
                      </button>
                      <button
                        onClick={removeItemBtn(item.quantity, item.id)}
                        className={styles.removeBtn}
                      >
                        Remove
                      </button>
                    </div>
                  </li>
                ))}
              </ul>

              <div className={styles.total}>
                <hr />
                <strong>Total:</strong> ₹{totalAmount}
              </div>

              <div className={styles.cartBtn}>
                <button className={styles.clearBtn} onClick={clearCartBtn}>
                  Clear Cart
                </button>
                <button className={styles.checkoutBtn} onClick={handleCheckout}>
                  Checkout
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
