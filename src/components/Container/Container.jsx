import Expense from "../Expense/Expense"

import * as S from "./styled-container"

function Container({expenses, setEdit, setToDelete}){

    return(
        <S.Main>
            <h2>{expenses.length ? "Expenses list" : "Oops! there're no expenses to show"}</h2>
        
            {expenses.length ?
                expenses.map( expense => (
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
                )) : null
            }
        </S.Main>
    )
}

export default Container