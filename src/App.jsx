import { useState, useEffect } from 'react'

import Header from './components/Header/Header'
import Container from './components/Container/Container'
import Add from './components/Add/Add'
import Modal from './components/Modal/Modal'

import GlobalStyle from './components/Global/styled-global'

function App() {
  const [budget, setBudget] = useState(
    Number(localStorage.getItem('budget')) ?? 0
  )
  const [validBudget, setValidBudget] = useState(false)
  const [modal, setModal] = useState(false)
  const [animate, setAnimate] = useState(false)
  const [expenses, setExpenses] = useState(
    localStorage.getItem('expenses')
      ? JSON.parse(localStorage.getItem('expenses'))
      : []
  )

  const [filter, setFilter] = useState('empty')

  const [edit, setEdit] = useState({})
  const [toDelete, setToDelete] = useState('')

  useEffect(() => {
    if (edit.name) {
      setModal(true)

      setTimeout(() => {
        setAnimate(true)
      }, 0)
    }

    if (toDelete != '') {
      const expensesModified = expenses.filter((item) => item.id !== toDelete)
      setExpenses(expensesModified)
    }
  }, [edit, toDelete])

  const handleExpenses = () => {
    setModal(true)

    setTimeout(() => {
      setAnimate(true)
    }, 0)
  }

  useEffect(() => {
    localStorage.setItem('budget', budget ?? 0)
  }, [budget])

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses)) ?? []
  })

  useEffect(() => {
    const budgetLS = Number(localStorage.getItem('budget')) ?? 0
    if (budgetLS > 0) {
      setValidBudget(true)
    }
  }, [])

  return (
    <>
      <GlobalStyle />
      <Header
        budget={budget}
        setBudget={setBudget}
        validBudget={validBudget}
        setValidBudget={setValidBudget}
        expenses={expenses}
        setExpenses={setExpenses}
        edit={edit}
      />

      {validBudget && (
        <>
          <Container
            expenses={expenses}
            setEdit={setEdit}
            setToDelete={setToDelete}
            filter={filter}
            setFilter={setFilter}
          />

          <Add handleExpenses={handleExpenses} />
        </>
      )}

      {modal && (
        <Modal
          setModal={setModal}
          animate={animate}
          setAnimate={setAnimate}
          expenses={expenses}
          setExpenses={setExpenses}
          edit={edit}
          setEdit={setEdit}
        />
      )}
    </>
  )
}

export default App
