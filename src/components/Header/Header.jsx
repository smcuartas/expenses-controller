import Budget from '../Budget/Budget'
import BudgetController from '../BudgetController/BudgetController'
import * as S from './styled-header'

function Header({
  budget,
  setBudget,
  validBudget,
  setValidBudget,
  expenses,
  setExpenses,
}) {
  return (
    <S.Header>
      <S.Title>Expenses Controller</S.Title>

      {validBudget ? (
        <BudgetController
          budget={budget}
          setBudget={setBudget}
          setValidBudget={setValidBudget}
          expenses={expenses}
          setExpenses={setExpenses}
        />
      ) : (
        <Budget
          budget={budget}
          setBudget={setBudget}
          setValidBudget={setValidBudget}
        />
      )}
    </S.Header>
  )
}

export default Header
