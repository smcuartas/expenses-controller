import * as S from './styled-filter'

function Filter({ filter, setFilter }) {
  return (
    <S.FilterContainer>
      <div>
        <h3>Filter</h3>
      </div>

      <div>
        <form action="">
          <select onChange={(e) => setFilter(e.target.value)}>
            <option value="empty">-- Select a category --</option>
            <option value="saving">Saving</option>
            <option value="food">Food</option>
            <option value="house">House</option>
            <option value="expenses">Expenses</option>
            <option value="hobbies">Hobbies</option>
            <option value="health">Health</option>
            <option value="subscriptions">Subscriptions</option>
          </select>
        </form>
      </div>
    </S.FilterContainer>
  )
}

export default Filter
