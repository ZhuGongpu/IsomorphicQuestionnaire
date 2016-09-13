/**
 * Created by ZhuGongpu on 16/8/29.
 */
import {combineReducers} from 'redux'
import {fromJS} from "immutable";

const makeQuestionnaireReducer = (actions) => {
    const {ANSWER_CHANGE} = actions;

    return (state = fromJS({}), action) => {
        switch (action.type) {
            case ANSWER_CHANGE:
                return state.set(action.question_id, fromJS(action.answer));
            default:
                return state;
        }
    };
};

export default makeQuestionnaireReducer;