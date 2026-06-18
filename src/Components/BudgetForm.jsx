function BudgetForm({
  department,
  budget,
  expense,
  setDepartment,
  setBudget,
  setExpense,
  handleAddBudget,
}) {
  return (
    <div className="budget-form">
      <h2>Add Budget Details</h2>

      <input
        type="text"
        placeholder="Enter Department"
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
      />

      <input
        type="number"
        placeholder="Enter Budget Amount"
        value={budget}
        onChange={(e) => setBudget(e.target.value)}
      />

      <input
        type="number"
        placeholder="Enter Expense Amount"
        value={expense}
        onChange={(e) => setExpense(e.target.value)}
      />

      <button onClick={handleAddBudget}>
        Add Budget
      </button>
    </div>
  );
}

export default BudgetForm;