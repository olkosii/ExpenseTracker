import React, { useState } from "react";
import Expenses from "./Components/JSComponentsFiles/Expenses";
import NewExpense from "./Components/JSComponentsFiles/NewExpense";

const hardCodedData = [
  { id: "e1", title: "Toilet Paper", amount: 40, date: new Date(2022, 5, 12) },
  { id: "e2", title: "Sport", amount: 400, date: new Date(2022, 9, 7) },
  { id: "e3", title: "Home", amount: 200, date: new Date(2022, 10, 13) },
];

function App() {
  const [expenses, setExpenses] = useState(hardCodedData);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses dataArray={expenses} />
    </div>
  );
}

export default App;
