import React, { useState } from "react";

import "../CssFiles/Expenses.css";
import Card from "./Card.js";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [enternedYear, setEnternedFilter] = useState("2022");

  const filterChangeHandler = (selectedYear) => {
    setEnternedFilter(selectedYear);
  };

  const filteredExpenses = props.dataArray.filter((expense) => {
    return expense.date.getFullYear().toString() === enternedYear;
  });

  return (
    <li>
      <Card className="expenses">
        <ExpenseFilter
          yearSelected={enternedYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList expenses={filteredExpenses} />
      </Card>
    </li>
  );
}

export default Expenses;
