/**
 * Created by ZhuGongpu on 2016/9/25.
 */

export const QuestionModificationType = {
    Add: {text: "新增", value: 1},
    Delete: {text: "删除", value: 2},
    Update: {text: "更新", value: 3}
};

const QuestionModificationTypeCollection = Object.keys(QuestionModificationType).reduce((previousValue, currentKey) => {
    const type = QuestionModificationType[currentKey];
    return {...previousValue, [type.value]: type};
}, {});

export default QuestionModificationTypeCollection;
