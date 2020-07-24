import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { GlobalContext } from "../../contexts/GlobalContext";

const Topping = () => {
  const { state, dispatch } = useContext(GlobalContext);
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
    exit: {
      x: "-100vw",
      transition: {
        ease: "easeInOut",
      },
    },
  };
  const buttonVariants = {
    hover: {
      scale: 1.1,
      textShadow: "0px 0px 8px rgb(255,255,255)",
      boxShadow: "0px 0px 8px rgb(255,255,255)",
      transition: {
        duration: 0.3,
        yoyo: Infinity,
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
  const handleClick = (topping) => {
    dispatch({ type: "ADD_TOPPING", payload: topping });
  };
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="toppings container"
    >
      <h3>Step 2: Choose Toppings</h3>
      <ul>
        {toppings.map((topping) => {
          let spanClass = state.toppings.includes(topping) ? "active" : "";
          return (
            <motion.li
              whileHover={{ scale: 1.3, originX: 0, color: "#f8e120" }}
              transition={{ type: "spring", stiffness: 200 }}
              key={topping}
              onClick={() => handleClick(topping)}
            >
              <span className={spanClass}>{topping}</span>
            </motion.li>
          );
        })}
      </ul>
      {state.toppings.length ? (
        <motion.div variants={orderVariants}>
          <Link to="/order">
            <motion.button variants={buttonVariants} whileHover="hover">
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
