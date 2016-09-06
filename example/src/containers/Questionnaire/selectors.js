/**
 * Created by ZhuGongpu on 16/8/29.
 */
import {fromJS} from "immutable";
import {createSelector} from "reselect";

export const DOMAIN = "questionnaire";

const selectQuestionnaireDomain = () => state => fromJS(state.get(DOMAIN));

export const selectAnswers = () => createSelector(
    selectQuestionnaireDomain(),
    state => state.get("answers").toJS()
);
