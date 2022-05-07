import { useState, useEffect } from 'react'
import Expense from '../Expense/Expense'
import Filter from '../Filter/Filter'

import * as S from './styled-container'

function Container({ expenses, setEdit, setToDelete, filter, setFilter }) {
  const [filtred, setFiltred] = useState([])
  const [nosearch, setNosearch] = useState(false)

  useEffect(() => {
    const categoryExpenses = expenses.filter((item) => item.category === filter)
    setFiltred(categoryExpenses)
  }, [filter])

  useEffect(() => {
    if (filter !== 'empty' && filtred.length === 0) {
      setNosearch(true)
    } else {
      setNosearch(false)
    }
  }, [filtred])

  return (
    <S.Main>
      <Filter filter={filter} setFilter={setFilter} />

      <h2>
        {expenses.length
          ? 'Expenses list'
          : "Oops! there're no expenses to show"}
      </h2>

      <p>{nosearch ? 'No expenses found in this category.' : null}</p>

      {expenses.length && filter === 'empty'
        ? expenses.map((expense) => (
            <Expense
              key={expense.id}
              id={expense.id}
              name={expense.name}
              value={expense.value}
              category={expense.category}
              date={expense.date}
              setEdit={setEdit}
              setToDelete={setToDelete}
            />
          ))
        : filtred.map((expense) => (
            <Expense
              key={expense.id}
              id={expense.id}
              name={expense.name}
              value={expense.value}
              category={expense.category}
              date={expense.date}
              setEdit={setEdit}
              setToDelete={setToDelete}
            />
          ))}
    </S.Main>
  )
}

export default Container
