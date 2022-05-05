import { useState } from "react"
import * as S from "./styled-budget"

function Budget({budget, setBudget, setValidBudget}){
    const[alert, setAlert] = useState('');

    const handleBudget = (e) => {
        e.preventDefault();

        if(!budget || budget < 0){
            setAlert(budget + " it's not a valid value")
            return
        }

        setAlert('');
        setValidBudget(true)
    }

    return(
        <S.BudgetContainer>
            <S.Form onSubmit={handleBudget}>
                <label>Budget value</label>
                
                <input
                    type="number"
                    value={budget}
                    onChange={ e => setBudget(Number(e.target.value)) }
                />

                <input
                    type="Submit"
                    value="Add budget"
                />

                {alert && <S.Alert>{alert}</S.Alert>}
            </S.Form>
        </S.BudgetContainer>
    )
}

export default Budget