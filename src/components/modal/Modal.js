import React from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Modal = ({ showModal, setShowModal }) => {
  const modalBgVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };
  const modal = {
    hidden: {
      y: "-100vh",
    },
    visible: {
      y: "30vh",
      transition: {
        type: "spring",
        stiffness: 100,
        delay: 0.5,
        duration: 0.5,
      },
    },
  };
  return (
    <AnimatePresence>
      {showModal && (
        <motion.div
          className="backdrop"
          variants={modalBgVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <motion.div className="modal" variants={modal}>
            <p>Want to make another Pizza?</p>
            <Link to="/">
              <button onClick={() => setShowModal(false)}>Start Again</button>
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
