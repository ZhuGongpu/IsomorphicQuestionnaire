/**
 * Created by ZhuGongpu on 16/8/29.
 */
import {combineReducers} from "redux";
import {fromJS} from "immutable";

const makeQuestionnaireReducer = (actions) => {
    const {
        ANSWER_CHANGE,
        MODIFY_QUESTION_START,
        MODIFY_QUESTION_DONE,
        MODIFY_QUESTION_CANCEL,
        VALIDATION_ERROR
    } = actions;

    const answers = (state = fromJS({}), action) => {
        switch (action.type) {
            case ANSWER_CHANGE:
                return state.set(action.question_id, fromJS(action.answer));
            default:
                return state;
        }
    };

    const modifiedQuestions = (state = fromJS({}) /* state is a Immutable.List */, action) => {
        const question = action.question;
        switch (action.type) {
            case MODIFY_QUESTION_START:
                return state.set(question.id, {...question, editing: true});
            case MODIFY_QUESTION_DONE:
            case MODIFY_QUESTION_CANCEL:
                return state.set(question.id, {...question, editing: false});
            case VALIDATION_ERROR:
                return action.unansweredQuestions.reduce(
                    (previousValue, currentValue) => previousValue.set(currentValue.id, {...currentValue, error: true}),
                    state
                );
            default:
                return state;
        }
    };

    return combineReducers({answers, modifiedQuestions})
};

export default makeQuestionnaireReducer;