import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
} from 'react-swipeable-list'

import * as S from './styled-expense'
import toCash from '../../helpers'

import iSaving from '../../img/saving.svg'
import iFood from '../../img/food.svg'
import iHouse from '../../img/house.svg'
import iExpenses from '../../img/expenses.svg'
import iHobbies from '../../img/hobbie.svg'
import iHealth from '../../img/health.svg'
import iSubs from '../../img/subscription.svg'

const iGallery = {
  saving: iSaving,
  food: iFood,
  house: iHouse,
  expenses: iExpenses,
  hobbies: iHobbies,
  health: iHealth,
  subscriptions: iSubs,
}

function Expense({ name, value, category, id, date, setEdit, setToDelete }) {
  const leadingActions = () => (
    <LeadingActions>
      <SwipeAction onClick={() => setEdit({ name, value, category, id, date })}>
        Edit
      </SwipeAction>
    </LeadingActions>
  )

  const trailingActions = () => (
    <TrailingActions>
      <SwipeAction destructive={true} onClick={() => setToDelete(id)}>
        Delete
      </SwipeAction>
    </TrailingActions>
  )

  return (
    <S.ExpenseContainer>
      <SwipeableList>
        <SwipeableListItem
          leadingActions={leadingActions()}
          trailingActions={trailingActions()}
        >
          <S.ExpenseContent>
            <div>
              <img src={iGallery[category]} alt="Category Icon" height="100" />
            </div>

            <div>
              <span>{category}</span>
              <S.Columns>
                <div>
                  <h3>{name}</h3>
                </div>

                <div>
                  <h3>{toCash(value)}</h3>
                </div>
              </S.Columns>

              <S.Columns>
                <div>
                  <p>Added on {date}</p>
                </div>

                <div>
                  <p>Swipe to Edit/Delete</p>
                </div>
              </S.Columns>
            </div>
          </S.ExpenseContent>
        </SwipeableListItem>
      </SwipeableList>
    </S.ExpenseContainer>
  )
}

export default Expense
