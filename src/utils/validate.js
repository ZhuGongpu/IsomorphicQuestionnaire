/**
 *
 * Validate whether all questions have been accomplished.
 * Created by ZhuGongpu on 2016/10/8.
 */

import {QuestionType} from "../enums/QuestionType";
/**
 *
 * @param questions [question]
 * @param answers {questionId: answer}
 * @return {Array} [ unansweredQuestion]
 */
export default function validate(questions, answers) {
    const questionsWithError = [];
    questions.forEach(question => {
        const questionID = question.id;
        switch (question.type) {
            case QuestionType.MultipleChoice.value:
            case QuestionType.SingleChoice.value:
            case QuestionType.Input.value:
                if (!answers[questionID] || answers[questionID].length == 0) {
                    questionsWithError.push({...question, error: true})
                }
                break;
            case QuestionType.Dropdown.value:
                const answer = answers[questionID];
                if (!answer || answer.reduce(
                        (previousValue, currentValue) => previousValue.find(option => option.id == currentValue).children,
                        question.options
                    ) //is not a leaf node
                ) {
                    questionsWithError.push({...question, error: true})
                }
                break;
            case QuestionType.Matrix.value:
                if (!answers[questionID] || answers[questionID].length < question.labels.length) {
                    questionsWithError.push({...question, error: true})
                }
                break;
            default:
                break;
        }
    });
    return questionsWithError;
}