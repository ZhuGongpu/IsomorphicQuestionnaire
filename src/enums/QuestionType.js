/**
 * Question type.
 *
 * Created by ZhuGongpu on 16/8/27.
 */

export const QuestionType = {
    SingleChoice: {text: "单选题", value: 1},
    MultipleChoice: {text: "多选题", value: 2},
    Input: {text: "填空题", value: 3},
    Dropdown: {text: '下拉选择题', value: 4},
    Matrix: {text: "矩阵题", value: 5}
};

const QuestionTypeCollection = Object.keys(QuestionType).reduce((previousValue, currentKey) => {
    const type = QuestionType[currentKey];
    return {...previousValue, [type.value]: type};
}, {});

export default QuestionTypeCollection;

