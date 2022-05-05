import AddContainer from "./styled-add"
import * as i from "../Icons/Icons"

function Add({handleExpenses}){
    return(
        <AddContainer onClick={handleExpenses}>
            <i.AddIcon/>
        </AddContainer>
    )
}

export default Add