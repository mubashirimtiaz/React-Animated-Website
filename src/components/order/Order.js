import React, { useContext, useEffect } from "react";
import { motion } from "framer-motion";
import { GlobalContext } from "../../contexts/GlobalContext";

const Order = ({ setShowModal }) => {
  useEffect(() => {
    setTimeout(() => setShowModal(true), 5000);
  }, [setShowModal]);
  // const [showTitle, setShowTitle] = useState(true);
  const { state } = useContext(GlobalContext);

  const containerVariants = {
    hidden: {
      x: "100vw",
    },
    visible: {
      x: 0,
      transition: {
        delay: 0.4,
        type: "spring",
        mass: 0.4,
        damping: 8,
        when: "beforeChildren",
        staggerChildren: 0.4,
      },
    },
    exit: {
      x: "-100vw",
      transition: {
        ease: "easeInOut",
      },
    },
  };
  const childVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="container order"
    >
      <h3>Thank you for your order :)</h3>
      <motion.p variants={childVariants}>
        You ordered a <span>{state.base}</span> pizza with:
      </motion.p>
      <motion.div variants={childVariants}>
        {state.toppings.map((topping) => (
          <div key={topping}>{topping}</div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Order;
