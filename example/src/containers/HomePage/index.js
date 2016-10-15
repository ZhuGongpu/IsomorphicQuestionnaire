/**
 * Created by ZhuGongpu on 16/8/1.
 *
 */
import React from "react";
import styles from "./index.scss";
import "isomorphic-questionnaire/lib/index.less";
import {Questionnaire} from "isomorphic-questionnaire";
import "./index.less";//Enable default styles
// Override theme color.

const questions = /*[] || */[{
    "id": 0,
    "type": "4",
    "title": "生源地",
    "placeholders": [],
    "options": [{
        "text": "辽宁",
        "id": "0"
    }, {
        "text": "吉林",
        "id": "1"
    }, {
        "text": "黑龙江",
        "id": "2"
    }, {
        "text": "上海",
        "id": "3"
    }, {
        "text": "江苏",
        "id": "4"
    }, {
        "text": "浙江",
        "id": "5"
    }, {
        "text": "安徽",
        "id": "6"
    }, {
        "text": "福建",
        "id": "7"
    }, {
        "text": "江西",
        "id": "8"
    }, {
        "text": "山东",
        "id": "9"
    }, {
        "text": "河南",
        "id": "10"
    }, {
        "text": "湖北",
        "id": "11"
    }, {
        "text": "湖南",
        "id": "12"
    }, {
        "text": "广东",
        "id": "13"
    }, {
        "text": "广西",
        "id": "14"
    }, {
        "text": "海南",
        "id": "15"
    }, {
        "text": "重庆",
        "id": "16"
    }, {
        "text": "四川",
        "id": "17"
    }, {
        "text": "贵州",
        "id": "18"
    }, {
        "text": "云南",
        "id": "19"
    }, {
        "text": "西藏",
        "id": "20"
    }, {
        "text": "陕西",
        "id": "21"
    }, {
        "text": "甘肃",
        "id": "22"
    }, {
        "text": "青海",
        "id": "23"
    }, {
        "text": "宁夏",
        "id": "24"
    }, {
        "text": "新疆",
        "id": "25"
    }, {
        "text": "海外（含港澳台）",
        "id": "26"
    }]
}, {
    "id": 1,
    "type": "4",
    "title": "学院",
    "placeholders": [],
    "options": [{
        "text": "路桥工程系",
        "id": "1",
        "children": [{
            "text": "道路桥梁工程技术专业",
            "id": "10",
            "children": [{
                "text": "公路与桥梁工程方向",
                "id": "100"
            }, {
                "text": "计算机与公路工程方向",
                "id": "101"
            }]
        }, {
            "text": "公路监理专业",
            "id": "11",
            "children": [{
                "text": "公路工程监理方向",
                "id": "110"
            }, {
                "text": "公路工程试验检测方向",
                "id": "111"
            }]
        }, {
            "text": "高等级公路维护与管理专业",
            "id": "12",
        }, {
            "text": "工程造价专业",
            "id": "13"
        }, {
            "text": "地下工程与隧道工程技术专业",
            "id": "14"
        }, {
            "text": "城市轨道交通工程技术专业",
            "id": "15"
        }]
    }, {
        "text": "汽车工程系",
        "id": "2",
        "children": [{
            "text": "汽车运用技术专业",
            "id": "20"
        }, {
            "text": "汽车检测与维修技术专业",
            "id": "21"
        }, {
            "text": "汽车技术服务与营销专业",
            "id": "22"
        }, {
            "text": "公路运输与管理专业",
            "id": "23"
        }, {
            "text": "新能源应用技术专业",
            "id": "24"
        }, {
            "text": "汽车电子技术专业",
            "id": "25"
        }, {
            "text": "汽车整形技术专业",
            "id": "物流管理专业"
        }]
    }, {
        "text": "机电工程系",
        "id": "3",
        "children": [{
            "text": "工程机械技术服务与营销",
            "id": "30",
        }, {
            "text": "机电一体化技术",
            "id": "31"
        }, {
            "text": "机械制造与自动化",
            "id": "32"
        }, {
            "text": "城市轨道交通营运管理",
            "id": "33"
        }, {
            "text": "航海技术",
            "id": "34"
        }]
    }, {
        "text": "建筑工程系",
        "id": "4",
        "children": [{
            "text": "建筑设计技术专业",
            "id": "40"
        }, {
            "text": "工程造价专业",
            "id": "41"
        }, {
            "text": "建筑装饰工程技术专业",
            "id": "42"
        }, {
            "text": "工程测量与监理专业",
            "id": "43"
        }, {
            "text": "建筑设备工程技术专业",
            "id": "44"
        }, {
            "text": "土木工程检测技术专业",
            "id": "45"
        }, {
            "text": "港口与航运管理",
            "id": "46",
            "children": [{
                "text": "交通土建工程方向",
                "id": "47"
            }, {
                "text": "防水防腐工程方向",
                "id": "48"
            }]
        }]
    }, {
        "text": "管理工程系",
        "id": "5",
        "children": [{
            "text": "旅游管理专业",
            "id": "50"
        }, {
            "text": "酒店管理专业",
            "id": "51"
        }, {
            "text": "会计电算华专业",
            "id": "52"
        }, {
            "text": "市场营销专业",
            "id": "53"
        }, {
            "text": "安全技术管理专业",
            "id": "54"
        }, {
            "text": "经济信息管理专业",
            "id": "55"
        }, {
            "text": "会展策划与管理专业",
            "id": "56"
        }, {
            "text": "旅游工艺品设计与制作（雕塑、陶艺方向）专业",
            "id": "57"
        }, {
            "text": "旅游工艺品设计与制作（包装设计方向）专业",
            "id": "58"
        }]
    }, {
        "text": "信息工程系",
        "id": "6",
        "children": [{
            "text": "计算机网络技术",
            "id": "60"
        }, {
            "text": "计算机应用技术",
            "id": "61"
        }, {
            "text": "计算机应用技术（建筑装饰辅助设计方向）",
            "id": "62"
        }, {
            "text": "软件技术（交通建设方向）",
            "id": "63"
        }, {
            "text": "通信技术",
            "id": "64"
        }, {
            "text": "应用电子技术",
            "id": "65"
        }, {
            "text": "多媒体设计与制作（艺术类）",
            "id": "66"
        }, {
            "text": "电脑艺术设计（艺术类）",
            "id": "67"
        }, {
            "text": "计算机应用技术（速录与客服讯息服务方向）",
            "id": "68"
        }, {
            "text": "计算机应用技术（物流信息技术方向）",
            "id": "69"
        }]
    }, {
        "text": "成人教育部",
        "id": "7",
        "children": [{
            "text": "交通运输工程",
            "id": "70"
        }, {
            "text": "道路与桥梁工程技术",
            "id": "71"
        }, {
            "text": "建筑工程",
            "id": "72"
        }, {
            "text": "土木工程",
            "id": "73"
        }, {
            "text": "工程管理",
            "id": "74"
        }, {
            "text": "道路与桥梁工程技术",
            "id": "75"
        }, {
            "text": "工程监理",
            "id": "76"
        }]
    }, {
        "text": "基础教学部",
        "id": "8"
    }, {
        "text": "交通技师学院",
        "id": "9"
    }, {
        "text": "驾驶技工学校",
        "id": "10"
    }]
}, {
    "id": 3,
    "type": "1",
    "title": "学历",
    "options": [{"text": "中专", "id": 0}, {"text": "大专", "id": 1}]
}, {
    "id": 4,
    "type": "1",
    "title": "就业去向",
    "options": [{"text": "签协议就业", "id": 0}, {"text": "升学", "id": 1}, {"text": "灵活就业", "id": 2}, {
        "text": "其他形式",
        "id": 3
    }, {"text": "未就业", "id": 4}]
}, {
    "id": 6,
    "type": "1",
    "title": "就业性质",
    "options": [{"text": "中初教育单位", "id": 0}, {"text": "科研设计单位", "id": 1}, {
        "text": "高等学校",
        "id": 2
    }, {"text": "医疗卫生单位", "id": 3}, {"text": "其他事业单位", "id": 4}, {"text": "国有企业", "id": 5}, {
        "text": "三资企业",
        "id": 6
    }, {"text": "其他企业", "id": 7}, {"text": "部队", "id": 8}, {"text": "机关", "id": 9}, {"text": "大学生村官", "id": 10}]
}, {
    "id": 5,
    "type": "1",
    "title": "就业地区",
    "options": [{"text": "辽宁", "id": 0}, {"text": "吉林", "id": 1}, {"text": "黑龙江", "id": 2}, {
        "text": "上海",
        "id": 3
    }, {"text": "江苏", "id": 4}, {"text": "浙江", "id": 5}, {"text": "安徽", "id": 6}, {
        "text": "福建",
        "id": 7
    }, {"text": "江西", "id": 8}, {"text": "山东", "id": 9}, {"text": "河南", "id": 10}, {
        "text": "湖北",
        "id": 11
    }, {"text": "湖南", "id": 12}, {"text": "广东", "id": 13}, {"text": "广西", "id": 14}, {
        "text": "海南",
        "id": 15
    }, {"text": "重庆", "id": 16}, {"text": "四川", "id": 17}, {"text": "贵州", "id": 18}, {
        "text": "云南",
        "id": 19
    }, {"text": "陕西", "id": 20}, {"text": "西藏", "id": 21}, {"text": "甘肃", "id": 22}, {
        "text": "青海",
        "id": 23
    }, {"text": "宁夏", "id": 24}, {"text": "新疆", "id": 25}, {"text": "海外（含港澳台）", "id": 26}]
}, {
    "id": 6,
    "type": "1",
    "title": "就业单位规模",
    "options": [{"text": "20人以下", "id": 0}, {"text": "20-50", "id": 1}, {
        "text": "50-200",
        "id": 2
    }, {"text": "200-500", "id": 3}, {"text": "500-2000", "id": 4}, {"text": "2000以上", "id": 5}]
}, {
    "id": 7,
    "type": "1",
    "title": "就业行业",
    "options": [{"text": "计算机/互联网/电子商务", "id": 0}, {"text": "通信。电子/硬件", "id": 1}, {
        "text": "金融业",
        "id": 2
    }, {"text": "房地产/建筑/物业", "id": 3}, {"text": "交通/运输/物流/仓储", "id": 4}, {
        "text": "机械/生产/加工/制造",
        "id": 5
    }, {"text": "贸易/零售/消费", "id": 6}, {"text": "能源/矿业/环境/原材料", "id": 7}, {
        "text": "汽车/重工/军工",
        "id": 8
    }, {"text": "仪器仪表/电气/水利", "id": 9}, {"text": "传媒/广告/公关/文化", "id": 10}, {
        "text": "医疗/卫生/健康",
        "id": 11
    }, {"text": "专业服务/教育/培训", "id": 12}, {"text": "政府/科研/非盈利机构", "id": 13}, {
        "text": "服务业",
        "id": 14
    }, {"text": "农，林，牧，渔/其他", "id": 15}]
}, {
    "id": 8,
    "type": "1",
    "title": "年薪",
    "options": [{"text": "2万以下", "id": 0}, {"text": "2-3万", "id": 1}, {
        "text": "3-4.5万",
        "id": 2
    }, {"text": "4.5万以上", "id": 3}]
}, {
    "id": 9,
    "type": "1",
    "title": "专业对口度",
    "options": [{"text": "很不相关", "id": 0}, {"text": "不相关", "id": 1}, {"text": "一般", "id": 2}, {
        "text": "相关",
        "id": 3
    }, {"text": "很相关", "id": 4}]
}, {
    "id": 10,
    "type": "1",
    "title": "就业满意度",
    "options": [{"text": "非常满意", "id": 0}, {"text": "比较满意", "id": 1}, {"text": "一般", "id": 2}, {
        "text": "非常不满意",
        "id": 3
    }]
}, {
    "id": 11,
    "type": "1",
    "title": "求职渠道",
    "options": [{"text": "校园招聘会", "id": 0}, {"text": "学校发布的招聘", "id": 1}, {
        "text": "学校老师推荐",
        "id": 2
    }, {"text": "政府/社会机构组织的招聘会", "id": 3}, {"text": "各类招聘网站", "id": 4}, {
        "text": "报纸杂志发布的招聘",
        "id": 5
    }, {"text": "家庭或社会关系推荐", "id": 6}, {"text": "工作实习", "id": 7}, {"text": "其他", "id": 8}]
}, {
    "id": 12,
    "type": "1",
    "title": "求职过程中收到的录取通知数",
    "options": [{"text": "1-3个", "id": 0}, {"text": "4-6个", "id": 1}, {"text": "6-10个", "id": 2}, {
        "text": "10个以上",
        "id": 3
    }]
}, {
    "id": 13,
    "type": "1",
    "title": "求职过程时间",
    "options": [{"text": "1个月以内", "id": 0}, {"text": "1-2个月", "id": 1}, {
        "text": "2-3个月",
        "id": 2
    }, {"text": "3-4个月", "id": 3}, {"text": "4-5个月", "id": 4}, {"text": "5-6个月", "id": 5}, {
        "text": "6-7个月",
        "id": 6
    }, {"text": "8个月以上", "id": 7}]
}, {
    "id": 14,
    "type": "5",
    "title": "就业指导服务满意度",
    "labels": ["职业咨询与辅导", "就业指导课", "就业实习/实践", "就业手续办理", "校园招聘会", "就业帮扶与推荐", "招聘信息发布"]
}, {
    "id": 15,
    "type": "1",
    "title": "自主创业层次",
    "options": [{"text": "中专", "id": 0}, {"text": "大专", "id": 1}]
}, {
    "id": 16,
    "type": "1",
    "title": "自主创业行业",
    "options": [{"text": "计算机/互联网/电子商务", "id": 0}, {"text": "通信/电子/硬件", "id": 1}, {
        "text": "金融业",
        "id": 2
    }, {"text": "房地产/建筑/物业", "id": 3}, {"text": "交通/运输/物流/仓储", "id": 4}, {
        "text": "机械/生产/加工/制造",
        "id": 5
    }, {"text": "贸易/零售/消费", "id": 6}, {"text": "能源/矿业/环境/原材料", "id": 7}, {
        "text": "汽车/重工/军工",
        "id": 8
    }, {"text": "仪器仪表/电气/水利", "id": 9}, {"text": "传媒/广告/公关/文化", "id": 10}, {
        "text": "医疗/卫生/健康",
        "id": 11
    }, {"text": "专业服务/教育/培训", "id": 12}, {"text": "政府/科研/非盈利机构", "id": 13}, {
        "text": "服务业",
        "id": 14
    }, {"text": "农，林，牧，渔/其他", "id": 15}]
}, {
    "id": 17,
    "type": "2",
    "title": "自主创业原因",
    "options": [{"text": "预期可能有更高的收入", "id": 0}, {"text": "受他人邀请进行创业", "id": 1}, {
        "text": "有好的创业项目",
        "id": 2
    }, {"text": "希望通过创业实现个人理想", "id": 3}, {"text": "对创业充满兴趣，激情", "id": 4}]
}, {
    "id": 18,
    "type": "5",
    "title": "创业指导满意度",
    "labels": ["创业相关课程", "创业实训与模拟", "创业协会", "创新创业大赛", "创业项目孵化"]
}, {
    "id": 19,
    "type": "5",
    "title": "创业促进活动满意度",
    "labels": ["社会实践活动","假期实习/课外兼职","创新创业课程","创新创业大赛","模拟创业活动","学校和政府提供的创业培训和咨询","学生社团活动"]
},
    {
        "id": 20,
        "type": "1",
        "title": "升学原因",
        "options": [{"text": "对专业感兴趣，深入学习", "id": 0}, {"text": "增加择业资本，站在更高的求职点", "id": 1}, {
            "text": "提高综合能力",
            "id": 2
        }, {"text": "其他", "id": 3}]
    }, {
        "id": 21,
        "type": "2",
        "title": "升学满意度",
        "options": [{"text": "非常满意", "id": 0}, {"text": "比较满意", "id": 1}, {"text": "一般", "id": 2}, {
            "text": "非常不满意",
            "id": 3
        }]
    }, {
        "id": 22,
        "type": "1",
        "title": "未就业原因",
        "options": [{"text": "拟深造", "id": 0}, {"text": "实习中", "id": 1}, {"text": "求职中", "id": 2}, {
            "text": "学业问题",
            "id": 3
        }, {"text": "自由职业或创业", "id": 4}, {"text": "其他", "id": 5}]
    }];

/*[{
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
 }];*/

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
