import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link to="/">
        <div className="logo">
          <svg
            className="pizza-svg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
          >
            <path
              fill="none"
              d="M40 40 L80 40 C80 40 80 80 40 80 C40 80 0 80 0 40 C0 40 0 0 40 0Z"
            />
            <path fill="none" d="M50 30 L50 -10 C50 -10 90 -10 90 30 Z" />
          </svg>
        </div>
      </Link>
      <motion.div
        className="title"
        initial={{ y: -250 }}
        animate={{ y: -15 }}
        transition={{ type: "spring", stiffness: 120 }}
      >
        <Link to="/">
          <h1>Pizza Joint</h1>
        </Link>
      </motion.div>
    </header>
  );
};

export default Header;
