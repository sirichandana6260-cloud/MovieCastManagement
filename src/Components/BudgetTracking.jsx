import { useState, useEffect } from "react";
import BudgetForm from "./BudgetForm";
import BudgetTable from "./BudgetTable";
import "./BudgetTracking.css";

function BudgetTracking() {
  const [department, setDepartment] = useState("");
  const [budget, setBudget] = useState("");
  const [expense, setExpense] = useState("");

 
  const [budgetList, setBudgetList] = useState(() => {
    const savedData = localStorage.getItem("budget");
    return savedData ? JSON.parse(savedData) : [];
  });

  
  useEffect(() => {
    localStorage.setItem("budget", JSON.stringify(budgetList));
  }, [budgetList]);

 
  function handleAddBudget() {
    if (department === "" || budget === "" || expense === "") {
      alert("Please fill all fields");
      return;
    }

    const newBudget = {
      department: department,
      budget: Number(budget),
      expense: Number(expense),
    };

    setBudgetList([...budgetList, newBudget]);

    
    setDepartment("");
    setBudget("");
    setExpense("");
  }

  
  function handleDeleteBudget(index) {
    const updatedList = budgetList.filter((_, i) => i !== index);
    setBudgetList(updatedList);
  }

  return (
    <div className="budget-container">
      <h1>💰 Budget Tracking</h1>

      <BudgetForm
        department={department}
        budget={budget}
        expense={expense}
        setDepartment={setDepartment}
        setBudget={setBudget}
        setExpense={setExpense}
        handleAddBudget={handleAddBudget}
      />

      <BudgetTable
        budgetList={budgetList}
        handleDeleteBudget={handleDeleteBudget}
      />
    </div>
  );
}

export default BudgetTracking;