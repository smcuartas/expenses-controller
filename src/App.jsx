import { useState, useEffect } from "react"

import Header from "./components/Header/Header"
import Container from "./components/Container/Container"
import Add from "./components/Add/Add"
import Modal from "./components/Modal/Modal"

import GlobalStyle from "./components/Global/styled-global"

function App() {
  const [budget, setBudget] = useState(0);
  const [validBudget, setValidBudget] = useState(false);
  const [modal, setModal] = useState(false);
  const [animate, setAnimate] = useState(false);
  const [expenses, setExpenses] = useState([]);
  
  const [edit, setEdit] = useState({});
  const [toDelete, setToDelete] = useState('');
  const [removed, setRemoved] = useState([]);

  useEffect(() => {
    if(edit.name){
      setModal(true)

      setTimeout(() => {
          setAnimate(true)
      }, 0);
    }

    if(toDelete != ''){
      const expensesModified = expenses.filter(item => item.id !== toDelete)
      setExpenses(expensesModified)
    }

    console.log(1)
  }, [edit, toDelete])

  const handleExpenses = () => {
    setModal(true)

    setTimeout(() => {
        setAnimate(true);
    }, 0);
}

  return (
    <>
      <GlobalStyle/>
      <Header
        budget={budget}
        setBudget={setBudget}
        validBudget={validBudget}
        setValidBudget={setValidBudget}
        expenses={expenses}
        edit={edit}
      />

      {validBudget &&
        <>
          <Container 
            expenses={expenses}
            setEdit={setEdit}
            setToDelete={setToDelete}
          />

          <Add
            handleExpenses={handleExpenses}
          />
        </>
      }

      {modal &&
        <Modal
          setModal={setModal}
          animate={animate}
          setAnimate={setAnimate}
          expenses={expenses}
          setExpenses={setExpenses}
          edit={edit}
          setEdit={setEdit}
        />
      }
    </>
  )
}

export default App
