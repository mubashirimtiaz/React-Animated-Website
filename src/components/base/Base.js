import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Base = ({ addBase, pizza }) => {
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
    visible: { x: 0, transitions: { type: "spring", stiffness: 120 } },
  };
  const bases = ["Classic", "Thin & Crispy", "Thick Crust"];
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
          let spanClass = pizza.base === base ? "active" : "";
          return (
            <motion.li
              whileHover={{ scale: 1.3, originX: 0, color: "#f8e120" }}
              transition={{ type: "spring", stiffness: 200 }}
              key={base}
              onClick={() => addBase(base)}
            >
              <span className={spanClass}>{base}</span>
            </motion.li>
          );
        })}
      </ul>

      {pizza.base && (
        <motion.div variants={nextVariants} className="next">
          <Link to="/topping">
            <motion.button
              whileHover={{
                scale: 1.05,
                textShadow: "0px 0px 8px rgb(255,255,255)",
                boxShadow: "0px 0px 8px rgb(255,255,255)",
              }}
            >
              Next
            </motion.button>
          </Link>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Base;
