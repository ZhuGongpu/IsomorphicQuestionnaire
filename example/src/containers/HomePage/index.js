/**
 * Created by ZhuGongpu on 16/8/1.
 */
import React from "react";
import styles from "./index.scss";
import "isomorphic-questionnaire/lib/index.less";//Enable default styles
import {Questionnaire, QuestionType} from "isomorphic-questionnaire";
import "./index.less";// Override theme color.

const questions = [{
    type: QuestionType.SingleChoice.value,
    id: "1",
    title: "问题标题1(单选题)",
    editing: false,
    options: [{
        id: "1",
        text: "选项1"
    }, {
        id: "2",
        text: "选项2"
    }, {
        id: "3",
        text: "选项3"
    }, {
        id: "4",
        text: "选项4"
    }, {
        id: "5",
        text: "显示问题3",
        next: "3"
    }],
}, {
    type: QuestionType.MultipleChoice.value,
    id: "2",
    title: "问题标题2(多选题)",
    options: [{
        id: "1",
        text: "选项1"
    }, {
        id: "2",
        text: "选项2"
    }, {
        id: "3",
        text: "选项3"
    }, {
        id: "4",
        text: "选项4"
    }, {
        id: "5",
        text: "选项5"
    }],
}, {
    type: QuestionType.Input.value,
    id: "3",
    title: "问题标题3(问答题)",
    placeholder: "我是placeholder"
}, {
    type: QuestionType.Dropdown.value,
    id: "4",
    title: "问题标题4(下拉选择)",
    placeholders: ["省份", "城市"],
    options: [{
        id: "1",
        text: "北京",
        children: [{
            id: "10",
            text: "海淀",
            children: [{
                id: "100",
                text: "北航"
            }]
        }]
    }, {
        id: "2",
        text: "上海",
        children: [{
            id: "20",
            text: "浦东"
        }]
    }]
}, {
    type: QuestionType.Matrix.value,
    id: "5",
    title: "问题标题5(评分题)",
    labels: ["评分项1", "评分项2", "评分项3", "评分项4"]
}];

function onAnswerChange(questionID, answer) {
    console.log(`onAnswerChange: ${questionID}  ${answer}`);
}

function onSubmit(answers) {
    console.log("onSubmit: %o", answers)
}

export default() => (<div>
    <div className={styles.introduction}>This is the HomePage</div>
    <div style={{margin: 20}}>
        <Questionnaire domain="Questionnaire.Answers"
                       actionPrefix="DemoQuestionnaire"
                       allowEditing={false}
                       onSubmit={onSubmit}
                       questions={questions}/>
    </div>
</div>)
