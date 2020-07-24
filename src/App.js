import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Header, Home, Base, Order, Topping, NotFound } from "./components";
import "./App.css";

function App() {
  const [pizza, setPizza] = useState({ base: "", toppings: [] });

  const addBase = (base) => {
    setPizza({ ...pizza, base });
  };
  const addTopping = (topping) => {
    let newToppings;
    if (!pizza.toppings.includes(topping)) {
      newToppings = [...pizza.toppings, topping];
    } else {
      newToppings = pizza.toppings.filter((item) => item !== topping);
    }
    setPizza({ ...pizza, toppings: newToppings });
  };
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="base"
          element={<Base addBase={addBase} pizza={pizza} />}
        ></Route>
        <Route path="order" element={<Order pizza={pizza} />}></Route>
        <Route
          path="topping"
          element={<Topping addTopping={addTopping} pizza={pizza} />}
        ></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
