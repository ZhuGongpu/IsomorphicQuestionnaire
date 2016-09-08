/**
 * Created by ZhuGongpu on 2016-8-29.
 */

const makeQuestionnaireActions = (actionPrefix) => {
    const ANSWER_CHANGE = `${actionPrefix}ANSWER_CHANGE`;
    const answerChange = (question_id, answer) => ({
        type: ANSWER_CHANGE, question_id, answer
    });

    return {
        ANSWER_CHANGE, answerChange
    }
};

export default makeQuestionnaireActions;