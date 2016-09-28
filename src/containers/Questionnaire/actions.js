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
    const MODIFY_QUESTION = `${ACTION_PREFIX}MODIFY_QUESTION`;

    /**
     *
     * @param question modified question (with original ID and `modificationType`)
     * @returns {{type: string, question: *}}
     */
    function modifyQuestion(question) {
        return {type: MODIFY_QUESTION, question};
    }

    //endregion

    return {
        ANSWER_CHANGE, answerChange,
        MODIFY_QUESTION, modifyQuestion
    }
};

export default makeQuestionnaireActions;


