import { useEffect, useState } from 'react'
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from 'react-circular-progressbar'

import * as S from './styled-budgetcontroller'
import 'react-circular-progressbar/dist/styles.css'
import toCash from '../../helpers'

function BudgetController({
  budget,
  setBudget,
  setValidBudget,
  expenses,
  setExpenses,
}) {
  const resetBudget = () => {
    setBudget(0)
    setExpenses([])
    setValidBudget(false)
  }

  const [spent, setSpent] = useState(0)
  const [percentage, setPercentage] = useState(0)

  useEffect(() => {
    const expensesValues = expenses.map((expense) => expense.value)
    const totalExpenses = expensesValues.reduce(
      (prev, current) => prev + current,
      0
    )
    setSpent(totalExpenses)

    const newPercentage = (
      ((budget - (budget - spent)) / budget) *
      100
    ).toFixed(2)
    setPercentage(newPercentage)
  }, [expenses, spent])

  return (
    <S.BCContainer>
      <div>
        <CircularProgressbarWithChildren
          value={percentage}
          text={`${percentage}% spended`}
          strokeWidth={10}
          styles={buildStyles({
            strokeLinecap: 'butt',
            pathColor: percentage > 100 ? '#cc0700' : '#3997BD',
            trailColor: '#eaeaea',
            textSize: '8px',
            textColor: percentage > 100 ? '#cc0700' : '#3997BD',
          })}
        />
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
