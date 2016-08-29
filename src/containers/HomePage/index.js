/**
 * Created by ZhuGongpu on 16/8/1.
 */
import React from "react";
import styles from "./index.scss";
import {QuestionType} from "../../enums/QuestionType";
import Questionnaire from "../Questionnaire";

const questions = [{
    type: QuestionType.SingleChoice.value,
    id: "1",
    title: "问题标题1(单选题)",
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
}];

export default() => (<div>
    <div className={styles.introduction}>This is the HomePage</div>
    <div>
        <Questionnaire questions={questions}/>
    </div>
</div>)
