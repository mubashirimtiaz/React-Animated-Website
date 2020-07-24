import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const NotFound = () => {
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
  return (
    <motion.div
      className="notFound container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      style={{ textAlign: "center" }}
    >
      <h1>Not Found</h1>
      <motion.button variants={buttonVariants} whileHover="hover">
        <Link to="/">Go Back to Home</Link>
      </motion.button>
    </motion.div>
  );
};

export default NotFound;
