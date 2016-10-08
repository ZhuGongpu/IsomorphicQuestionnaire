/**
 * Created by ZhuGongpu on 2016-8-29.
 */

const makeQuestionnaireActions = (ACTION_PREFIX) => {
    if (!ACTION_PREFIX.endsWith("/"))
        ACTION_PREFIX += "/";
    //region Answer Change
    const ANSWER_CHANGE = `${ACTION_PREFIX}ANSWER_CHANGE`;
    const answerChange = (question_id, answer) => ({
        type: ANSWER_CHANGE, question_id, answer
    });
    //endregion

    //region Modify Question
    const MODIFY_QUESTION_START = `${ACTION_PREFIX}MODIFY_QUESTION_START`;

    function modifyQuestionStart(question) {
        return {type: MODIFY_QUESTION_START, question};
    }

    const MODIFY_QUESTION_DONE = `${ACTION_PREFIX}MODIFY_QUESTION_DONE`;
    /**
     *
     * @param question modified question (with original ID and `modificationType`)
     * @returns {{type: string, question: *}}
     */
    function modifyQuestion(question) {
        return {type: MODIFY_QUESTION_DONE, question};
    }

    const MODIFY_QUESTION_CANCEL = `${ACTION_PREFIX}MODIFY_QUESTION_CANCEL`;
    function modifyQuestionCancel(question) {
        return {type: MODIFY_QUESTION_CANCEL, question};
    }
    //endregion

    //region Validation Error
    const VALIDATION_ERROR = `${ACTION_PREFIX}VALIDATION_ERROR`;
    function validationError(unansweredQuestions) {
        return { type: VALIDATION_ERROR, unansweredQuestions };
    }
    //endregion

    return {
        ANSWER_CHANGE, answerChange,
        MODIFY_QUESTION_START, modifyQuestionStart,
        MODIFY_QUESTION_DONE, modifyQuestion,
        MODIFY_QUESTION_CANCEL, modifyQuestionCancel,
        VALIDATION_ERROR, validationError
    }
};

export default makeQuestionnaireActions;




