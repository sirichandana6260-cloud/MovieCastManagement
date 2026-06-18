function BudgetTable({ budgetList, handleDeleteBudget }) {
  return (
    <div className="budget-table">
      <h2>Budget Records</h2>

      <table>
        <thead>
          <tr>
            <th>Department</th>
            <th>Allocated Budget (₹)</th>
            <th>Expense (₹)</th>
            <th>Remaining (₹)</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {budgetList.length === 0 ? (
            <tr>
              <td colSpan="5">No budget records added</td>
            </tr>
          ) : (
            budgetList.map((item, index) => (
              <tr key={index}>
                <td>{item.department}</td>
                <td>{item.budget}</td>
                <td>{item.expense}</td>

                {/* Derived State */}
                <td>
                  {item.budget - item.expense}
                </td>

                <td>
                  <button onClick={() => handleDeleteBudget(index)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default BudgetTable;