import React from "react";
import { Routes, Route } from "react-router-dom";
import { Header, Home, Base, Order, Topping, NotFound } from "./components";
import GlobalContextProvider from "./contexts/GlobalContext";
import "./App.css";

function App() {
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
      <GlobalContextProvider>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="base" element={<Base />}></Route>
          <Route path="order" element={<Order />}></Route>
          <Route path="topping" element={<Topping />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </GlobalContextProvider>
    </div>
  );
}

export default App;
