import React, { useState } from "react";
import FoodItem from "../fooditem/FoodItem";
import styles from "./Food.module.css";
import { FOODS } from "../../data/foodData";
import cateBurger from "../../assets/cate-burger.png";
import cateCake from "../../assets/cate-cake.png";
import catePizza from "../../assets/cate-pizza.png";
import cateWrap from "../../assets/cate-wrap.png";

export default function Food() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    { name: "All", image: cateBurger },
    { name: "Pizza", image: catePizza },
    { name: "Wraps", image: cateWrap },
    { name: "Desserts", image: cateCake },
  ];

  const handeCategoryClick = (name) =>{
     return () => setSelectedCategory(name)
  }

  const filteredFoods =
    selectedCategory === "All"
      ? FOODS
      : FOODS.filter((item) => item.category === selectedCategory);

  return (
    <div className={styles.food}>
      <p className={styles.cateQuestion}>What's on your mind?</p>
      <div className={styles.categories}>
        {categories.map((category) => (
          <div
            key={category.name}
            className={styles.category}
            onClick={handeCategoryClick(category.name)}
          >
            <img
              src={category.image}
              className={styles.categoryImage}
            />
            <p>{category.name}</p>
          </div>
        ))}
      </div>

      <div className={styles.foodItems}>
        {filteredFoods.map((item) => (
          <FoodItem
            key={item.id}
            id={item.id}
            name={item.name}
            description={item.description}
            price={item.price}
            oldPrice={item.oldPrice}
            image={item.image}
            discount={item.discount}
            rating={item.rating}
            deliveryTime={item.deliveryTime}
          />
        ))}
      </div>
    </div>
  );
}
