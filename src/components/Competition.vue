<script setup>
import { computed, ref } from "vue";

// 竞赛指导
const Competition = ref([{
    title: "The Stacking Model Uncovers Second- hand Sailboat Prices",
    date: "2023.03.31 -- 2023.04.04",
    competition: "2023年美国大学生数学建模竞赛 (MCM/ICM)",
    place: "二等奖（H奖）",
    teacher: "盛泳潘",
    team: "姜堂蕴之（西大21'软工）、王一婷（西大21'网工）、蔡文杰（西大数统院）"
}, {
    title: "A City, A Knowledge Graph: Depict Olympic Games with Multi-Indicators",
    date: "2023.03.31 -- 2023.04.04",
    competition: "2023年美国大学生数学建模竞赛（MCM/ICM）",
    place: "二等奖（H奖）",
    teacher: "盛泳潘",
    team: "刘硕（西大20'软工）、宋宇杰（西大20'软工）、李俊霖（西大20'网工）"
},
{
    title: "The Secret of Sailboat Prices",
    date: "2023.03.31 -- 2023.04.04",
    competition: "2023年美国大学生数学建模竞赛（MCM/ICM）",
    place: "三等奖（S奖）",
    teacher: "盛泳潘",
    team: "汪小诗（西大20'软工）、薛雅文（西大20'网工）、周文祥（西大含弘学院）"
},
{
    title: "面向农业科学数据的规模化知识挖掘、存储与搜索系统研究",
    date: "2023.03 -- 2023.06.11",
    competition: "重庆市高校数据库应用程序设计大赛（2023）",
    place: "重庆市三等奖",
    teacher: "盛泳潘",
    team: "陈茜（西大21'软工）、丁珠萍（西大21'软工）"
},
{
    title: "NewsVerse——基于知识图谱的社会热点事件分析平台",
    date: "2023.03 -- 2023.05.01",
    competition: "2023年（第16届）中国大学生计算机设计大赛",
    place: "重庆市三等奖",
    teacher: "盛泳潘",
    team: "姜堂蕴之（西大21'软工）、薛雅文（西大20'网工）、汪小诗（西大20'软工）"
},
{
    title: "Exploring Wordle: A Holistic Model for Predicting and Evaluating Word Puzzle Gameplay",
    date: "2023.02.17 -- 2023.02.21",
    competition: "2023年美国大学生数学建模竞赛（MCM/ICM）",
    place: "二等奖（H奖）",
    teacher: "盛泳潘",
    team: "汪小诗（西大20'软工）、薛雅文（西大20'网工）、胡佳怡（西大数统院）"
},
{
    title: "Diverse Prediction on Wordle Game",
    date: "2023.02.17 -- 2023.02.21",
    competition: "2023年美国大学生数学建模竞赛（MCM/ICM）",
    place: "三等奖（S奖）",
    teacher: "盛泳潘",
    team: "宋宇杰（西大20'计科）、何天妮（西大数统院）、刘硕（西大20'软工）"
},
{
    title: "2022年全国知识图谱与语义计算大会评测任务 - 任务十四：基于图数据库的自定义图分析算法评测",
    date: "2022.04.11 -- 2022.08.28",
    competition: "2022年全国知识图谱与语义计算大会评测比赛",
    place: "技术创新奖",
    teacher: "盛泳潘",
    team: "“超图大咖”团队，宋宇杰（西大20'计算机）、刘硕（西大20'软工）"
},
{
    title: "基于新闻文本大数据的社会热点事件知识图谱构建及应用研究（校级）",
    date: "2023.04 -- 2024.04",
    competition: "2023年西南大学大学生创新创业训练计划",
    place: " 获得校级立项",
    teacher: "盛泳潘",
    team: "王一婷（西大21'网工）、姜堂蕴之（西大21'软工）"
},
{
    title: "低碳效视域下的农作物知识图谱构建及应用研究（校级）",
    date: "2023.04 -- 2024.04",
    competition: "2023年西南大学大学生创新创业训练计划",
    place: " 获得校级立项",
    teacher: "盛泳潘",
    team: "薛雅文（西大20'网工）、汪小诗（西大20'软工）、陈泫晔"
},
{
    title: "面向热点事件的新闻知识图谱自动构建与可视化分析方法研究（校级）",
    date: "2021.06 -- 2023.03",
    competition: "CQU-SRTP-20220486, 重庆大学2022年大学生创新创业训练计划项目 (SRTP)",
    place: "“良好”成绩结题",
    teacher: "盛泳潘",
    team: "施英洁 (重大21'经济与工商管理学院)、程了然 (重大21'大数据与软件学院)、沈萌 (重大21'新闻学院)、邱阳洋 (重大21'大数据与软件学院)"
},
{
    title: "PDF文本格式到EPUB电子图书格式的自动转换工具",
    date: "2022.02 -- 2022.05",
    competition: "第十三届中国大学生服务外包创新创业大赛",
    place: "全国三等奖（西部区域赛，企业命题类，二等奖）",
    teacher: "盛泳潘",
    team: "“犀利松柏”团队，王志杰（重大20'软工）、罗成员（重大20'软工）"
},
{
    title: "面向金庸系列小说的人物关系抽取及知识图谱构建技术研究（校级）",
    date: "2021.06 -- 2022.06",
    competition: "重庆大学2021年大学生创新创业训练计划项目 (SRTP)",
    place: "“良好”成绩结题",
    teacher: "盛泳潘",
    team: "王文焘（重大20'计算机类本科生）、陈武（重大20'计算机类本科生）、路涛涛（重大20'计算机类本科生）"
}
])
</script>
<template>
    <div>
        <br>
        <!-- <p style="margin-top: 5px">
        </p> -->
        <hr />


        <div style="display: flex;justify-content:space-between;margin-top: 15px;align-items: center;">
            <p>
                <font size="5" face="Times New Roman"><strong><a name="pub">科研指导 && 竞赛指导</a></strong></font>
            </p>
            <div style="margin-right: 20px;">
                <router-link to="/detailcompetition">
                    <button class="more-button">
                        查看更多
                    </button>
                </router-link>
            </div>
        </div>

        <ul class="competition">
            <li>
                <div>
                    <span style="font-weight: bold">2023级研究生</span>
                </div>
                <div>
                    <span style="font-weight: bold">熊礼竹</span>（ *1）
                </div>
                <div>
                    <span style="font-weight: bold">王瑛楠</span>（ *1）
                </div>
            </li>
            <li>
                <div>
                    <span style="font-weight: bold">2022级研究生</span>
                </div>
                <div>
                    <span style="font-weight: bold">孙今泽</span>（ *1）
                </div>
                <div>
                    <span style="font-weight: bold">张现明</span>（ *1）
                </div>
            </li>
            <li>
                <div>
                    <span style="font-weight: bold">2021级本科生</span>
                </div>
                <div>
                    <span style="font-weight: bold">陈茜</span>（重庆数据库大赛三等奖*1）
                </div>
                <div>
                    <span style="font-weight: bold">丁珠萍</span>（重庆数据库大赛三等奖*1）
                </div>
                <div>
                    <span style="font-weight: bold">王一婷</span>（MCM/ICM H奖*1）
                </div>
                <div>
                    <span style="font-weight: bold">姜堂蕴之</span>（MCM/ICM H奖*1，计算机设计大赛三等奖*1）
                </div>
            </li>
            <li>
                <div>
                    <span style="font-weight: bold">2020级本科生</span>
                </div>
                <div>
                    <span style="font-weight: bold">汪小诗</span>（MCM/ICM H奖*1，计算机设计大赛三等奖*1）
                </div>
                <div>
                    <span style="font-weight: bold">宋宇杰</span>（MCM/ICM H奖*1）
                </div>
                <div>
                    <span style="font-weight: bold">刘硕</span>（MCM/ICM H奖*1）
                </div>
            </li>
        </ul>

        <ul class="competition">
            <li v-for="item in Competition">
                <div>
                    <span>作品名称：</span>
                    <span style="font-weight: bold;">{{ item.title
                    }}</span>
                </div>
                <div>
                    <span>比赛时间：</span>
                    <span>{{ item.date }}</span>
                </div>
                <div>
                    <span>比赛名称：</span>
                    <span style="font-weight: bold">{{ item.competition }}</span>
                    <span style="font-weight: bold">, {{ item.place }}</span>
                </div>
                <div>
                    <span>指导教师：</span>
                    <span>{{ item.teacher }}</span>
                </div>
                <div v-if="item.team">
                    <span>团队成员：</span>
                    <span>{{ item.team }}</span>
                </div>

            </li>
        </ul>
    </div>
</template>

<style>
.competition li div span:nth-child(1) {
    font-family: 楷体;
    text-decoration: none;
}

.competition li div:nth-child(1) span {
    /* font-family: 楷体; */
    /* font-family: "Raleway", "楷体"; */
    font-family: Times, 楷体;
    text-decoration: none;
}

.competition li div:nth-child(2) span {
    font-family: 楷体;
    text-decoration: none;
}

.competition li div:nth-child(3) span {
    font-family: 楷体;
    text-decoration: none;
}

.competition li div:nth-child(4) span {
    font-family: 楷体;
    text-decoration: none;
}

.competition li div:nth-child(5) span {
    font-family: 楷体;
    text-decoration: none;
}

.competition li {
    /* list-style: none; */
    margin-top: 10px;
}
</style>
