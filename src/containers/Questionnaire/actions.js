/**
 * Created by ZhuGongpu on 2016-8-29.
 */

const makeQuestionnaireActions = (ACTION_PREFIX) => {
    //region Answer Change
    const ANSWER_CHANGE = `${ACTION_PREFIX}ANSWER_CHANGE`;
    const answerChange = (question_id, answer) => ({
        type: ANSWER_CHANGE, question_id, answer
    });
    //endregion

    //region Add Question
    const ADD_QUESTION = `${ACTION_PREFIX}ADD_QUESTION`;

    function addQuestion(question) {
        return {type: ADD_QUESTION, question};
    }

    //endregion

    //region Modify Question
    const MODIFY_QUESTION = `${ACTION_PREFIX}MODIFY_QUESTION`;

    /**
     *
     * @param question modified question (with origin ID)
     * @returns {{type: string, question: *}}
     */
    function modifyQuestion(question) {
        return {type: MODIFY_QUESTION, question};
    }

    //endregion

    //region Delete Question
    const DELETE_QUESTION = `${ACTION_PREFIX}DELETE_QUESTION`;

    function deleteQuestion(question) {
        return {type: DELETE_QUESTION, question};
    }

    //endregion
    
    return {
        ANSWER_CHANGE, answerChange,
        ADD_QUESTION, addQuestion,
        MODIFY_QUESTION, modifyQuestion,
        DELETE_QUESTION, deleteQuestion
    }
};

export default makeQuestionnaireActions;


