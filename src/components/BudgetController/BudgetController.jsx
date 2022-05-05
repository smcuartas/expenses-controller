import { useEffect, useState } from 'react'

import * as S from './styled-budgetcontroller'
import toCash from '../../helpers'

function BudgetController({ budget, setBudget, setValidBudget, expenses }) {
  const resetBudget = () => {
    setBudget(0)
    setValidBudget(false)
  }

  const [spent, setSpent] = useState(0)

  useEffect(() => {
    const expensesValues = expenses.map((expense) => expense.value)
    const totalExpenses = expensesValues.reduce(
      (prev, current) => prev + current,
      0
    )
    setSpent(totalExpenses)
  }, [expenses])

  return (
    <S.BCContainer>
      <div>
        <h2>Graphic</h2>
      </div>

      <div>
        <S.ResetBtn onClick={resetBudget}>Reset Budget</S.ResetBtn>

        <S.InternalRow>
          <p>
            <span>Budget:</span>
          </p>

          <p>{toCash(budget)} USD</p>
        </S.InternalRow>

        <S.InternalRow>
          <p>
            <span>Available:</span>
          </p>

          <p>{toCash(budget - spent)} USD</p>
        </S.InternalRow>

        <S.InternalRow>
          <p>
            <span>Spent:</span>
          </p>

          <p>{toCash(spent)} USD</p>
        </S.InternalRow>
      </div>
    </S.BCContainer>
  )
}

export default BudgetController
