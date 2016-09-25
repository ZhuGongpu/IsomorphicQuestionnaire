/**
 * Created by ZhuGongpu on 16/8/29.
 */
import {combineReducers} from "redux";
import {fromJS} from "immutable";

const makeQuestionnaireReducer = (actions) => {
    const {ANSWER_CHANGE, MODIFY_QUESTION} = actions;

    const answers = (state = fromJS({}), action) => {
        switch (action.type) {
            case ANSWER_CHANGE:
                return state.set(action.question_id, fromJS(action.answer));
            default:
                return state;
        }
    };

    const modifiedQuestions = (state = fromJS({}) /* state is a Immutable.List */, action) => {
        switch (action.type) {
            case MODIFY_QUESTION:
                const question = action.question;
                return state.set(question.id, question);
            default:
                return state;
        }
    };

    return combineReducers({answers, modifiedQuestions})
};

export default makeQuestionnaireReducer;