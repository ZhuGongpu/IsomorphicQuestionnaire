/**
 * Created by ZhuGongpu on 16/8/29.
 */
import {fromJS} from "immutable";
import {createSelector} from "reselect";


const createQuestionnaireSelector = (domain) => {
    const selectQuestionnaireDomain = () => state => fromJS(state.get(domain));

    const selectAnswers = () => createSelector(
        selectQuestionnaireDomain(),
        state => state.get("answers").toJS()
    );

    return {
        selectQuestionnaireDomain,
        selectAnswers
    }
};

export default createQuestionnaireSelector;