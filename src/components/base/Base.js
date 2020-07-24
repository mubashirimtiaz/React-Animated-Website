import React, { useContext } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../contexts/GlobalContext";

const Base = () => {
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
  };
  const nextVariants = {
    hidden: { x: "-100vw" },
    visible: {
      x: 0,
      transitions: { type: "spring", stiffness: 120 },
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
  const bases = ["Classic", "Thin & Crispy", "Thick Crust"];
  const handleClick = (base) => {
    dispatch({ type: "ADD_BASE", payload: base });
  };
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="base container"
    >
      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map((base) => {
          let spanClass = state.base === base ? "active" : "";
          return (
            <motion.li
              whileHover={{ scale: 1.3, originX: 0, color: "#f8e120" }}
              transition={{ type: "spring", stiffness: 200 }}
              key={base}
              onClick={() => handleClick(base)}
            >
              <span className={spanClass}>{base}</span>
            </motion.li>
          );
        })}
      </ul>

      {state.base && (
        <motion.div variants={nextVariants} className="next">
          <Link to="/topping">
            <motion.button variants={buttonVariants} whileHover="hover">
              Next
            </motion.button>
          </Link>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Base;
