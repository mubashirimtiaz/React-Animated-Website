import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Topping = ({ addTopping, pizza }) => {
  const containerVariants = {
    hidden: {
      x: "100vw",
    },
    visible: {
      x: 0,
      transition: {
        delay: 0.5,
        type: "spring",
      },
    },
  };
  const orderVariants = {
    hidden: { x: "-100vw" },
    visible: { x: 0, transitions: { type: "spring", stiffness: 120 } },
  };
  let toppings = [
    "mushrooms",
    "peppers",
    "onions",
    "olives",
    "extra cheese",
    "tomatoes",
  ];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="toppings container"
    >
      <h3>Step 2: Choose Toppings</h3>
      <ul>
        {toppings.map((topping) => {
          let spanClass = pizza.toppings.includes(topping) ? "active" : "";
          return (
            <motion.li
              whileHover={{ scale: 1.3, originX: 0, color: "#f8e120" }}
              transition={{ type: "spring", stiffness: 200 }}
              key={topping}
              onClick={() => addTopping(topping)}
            >
              <span className={spanClass}>{topping}</span>
            </motion.li>
          );
        })}
      </ul>
      {pizza.toppings.length ? (
        <motion.div variants={orderVariants}>
          <Link to="/order">
            <motion.button
              whileHover={{
                scale: 1.05,
                textShadow: "0px 0px 8px rgb(255,255,255)",
                boxShadow: "0px 0px 8px rgb(255,255,255)",
              }}
            >
              Order
            </motion.button>
          </Link>
        </motion.div>
      ) : (
        ""
      )}
    </motion.div>
  );
};

export default Topping;
