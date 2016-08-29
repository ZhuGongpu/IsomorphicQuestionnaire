/**
 * Created by ZhuGongpu on 2016-8-29.
 */
const ACTION_PREFIX = "app/Questionnaire";

//region Answer Change

export const ANSWER_CHANGE = `${ACTION_PREFIX}ANSWER_CHANGE`;
export function answerChange(question_id, answer) {
    return {type: ANSWER_CHANGE, question_id, answer};
}

//endregion