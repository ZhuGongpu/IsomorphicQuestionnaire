import {createSelector} from "reselect";

const selectCounterDomain = () => state => state.get('counter')

const selectCounterPage = () => createSelector(
  selectCounterDomain(),
  (substate) => substate.toJS()
)

export const selectCounter = () => createSelector(
  selectCounterDomain(),
  (substate) => substate.get('value')
)

export default selectCounterPage;
