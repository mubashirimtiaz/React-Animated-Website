import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";
import {
  Header,
  Home,
  Base,
  Order,
  Topping,
  NotFound,
  Modal,
} from "./components";
import GlobalContextProvider from "./contexts/GlobalContext";

function App() {
  const location = useLocation();
  const [showModal, setShowModal] = useState(false);
  // const [pizza, setPizza] = useState({ base: "", toppings: [] });

  // const addBase = (base) => {
  //   setPizza({ ...pizza, base });
  // };
  // const addTopping = (topping) => {
  //   let newToppings;
  //   if (!pizza.toppings.includes(topping)) {
  //     newToppings = [...pizza.toppings, topping];
  //   } else {
  //     newToppings = pizza.toppings.filter((item) => item !== topping);
  //   }
  //   setPizza({ ...pizza, toppings: newToppings });
  // };
  return (
    <div className="App">
      <Header />
      <Modal showModal={showModal} setShowModal={setShowModal} />
      <AnimatePresence
        exitBeforeEnter
        onExitComplete={() => setShowModal(false)}
      >
        <GlobalContextProvider>
          <Routes location={location} key={location.key}>
            <Route path="/" element={<Home />} />
            <Route path="base" element={<Base />} />
            <Route
              path="order"
              element={
                <Order showModal={showModal} setShowModal={setShowModal} />
              }
            />
            <Route path="topping" element={<Topping />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </GlobalContextProvider>
      </AnimatePresence>
    </div>
  );
}

export default App;
