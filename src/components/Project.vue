<script setup>

import { computed, ref } from "vue";
import projectImg from '../assets/project_img.png'

// 精选项目
const projects = [
    {
        title: "新闻知识图谱",
        image: projectImg,
        description:
            "地理时空知识图谱是一种基于地理信息和时间信息的知识表示方式，它将地理空间信息和时间信息结合起来，形成一个具有层次结构的知识图谱。",
        paper:
            "https://link.springer.com/content/pdf/10.1007/978-3-030-10997-4_54.pdf",
        system: "https://shengyp.github.io/vmse/",
    },
    {
        title: "地理知识图谱",
        image: projectImg,
        description: "可自行安排形成一个具有层次结构的知识图谱。",
        paper:
            "https://link.springer.com/content/pdf/10.1007/978-3-030-10997-4_54.pdf",
        system: "https://shengyp.github.io/vmse/",
    },
    {
        title: "zzaaaaa",
        image: projectImg,
        description: "可自行安排形成一个具有层次结构的知识图谱。",
        paper:
            "https://link.springer.com/content/pdf/10.1007/978-3-030-10997-4_54.pdf",
        system: "https://shengyp.github.io/vmse/",
    },
    {
        title: "BBBBaa",
        image: projectImg,
        description: "可自行安排形成一个具有层次结构的知识图谱。",
        paper:
            "https://link.springer.com/content/pdf/10.1007/978-3-030-10997-4_54.pdf",
        system: "https://shengyp.github.io/vmse/",
    }
];
</script>
<template>
    <br>

    <!-- <p style="margin-top: -5px"> -->
    <!-- </p> -->
    <hr />

    <div>
        <div style="display: flex;justify-content:space-between;margin-top: 15px;align-items: center;">
            <p>
                <font size="5" face="Times New Roman"><strong><a name="pub">精选项目</a></strong></font>
            </p>
            <div style="margin-right: 20px;">

                <router-link to="/project">
                    <button class="more-button">
                        查看更多
                    </button>
                </router-link>
            </div>
        </div>


        <!--<div>
            <div
                style="display: grid;grid-template-columns: repeat(3,275px);gap: 10px;justify-content: center;justify-items: center;">
                <div class="box-1" v-for="(items, index) in projects" :key="index">
                    <div style="font-weight: bold; height: 30px; line-height: 30px">
                        {{ items.title }}
                    </div>
                    <div>
                        <img :src="items.image" style="width: 240px" alt="" srcset="" />
                    </div>
                    <div style="font-size: 0.85em; margin: 0.7em 0; line-height: 1.2">
                        {{ items.description }}
                    </div>
                    <div class="links">
                        <a :href="items.paper">
                            <el-icon>
                                <Tickets style="width: 1em; height: 1em" />
                            </el-icon>
                            论文
                        </a>
                        <a :href="items.system" target="_blank">
                            <el-icon>
                                <Monitor style="width: 1em; height: 1em" />
                            </el-icon>
                            工程</a>
                    </div>
                </div>
            </div>
        </div>-->


        <!-- 主持 -->
        <div>
            <h3>
                <p class="project-text">主持</p>
            </h3>

            <div class="project-item">
                <span class="project-item-name">省部级（含）以上科研项目</span>

                <ul class="">
                    <li>
                        <div>国家自然科学基金委员会，国家自然科学基金青年科学基金项目：<span
                                style="font-weight: bold">“面向非结构化文本数据的开放域知识图谱构建方法研究”</span>，62202075，2023.01-2025.12，在研。
                        </div>
                    </li>

                    <li>
                        <div>重庆市科学技术局, 2022年度重庆市自然科学基金面上项目：<span
                                style="font-weight: bold">“面向开放环境的知识图谱构建方法研究”</span>，2022NSCQ-MSX3749，2022.09-2025.09，在研。
                        </div>
                    </li>
                </ul>
            </div>


            <div class="project-item">
                <span class="project-item-name">开放基金项目</span>

                <ul class="">
                    <li>
                        <div>2022年度海南师范大学数据科学与智慧教育教育部重点实验室开放课题：<span
                                style="font-weight: bold">“基于非结构化文本数据的开放域知识图谱构建方法研究”</span>，2022NSCQ-MSX3749，2023.01-2024.12，在研。
                        </div>
                    </li>

                    <li>
                        <div>农业农村部黄淮海智慧农业技术重点实验室2023年度开放课题：<span
                                style="font-weight: bold">“基于农业科学数据的农作物碳效知识图谱构建与可视化方法研究”</span>，202307，2023.01-2024.12，在研。
                        </div>
                    </li>

                    <li>
                        <div>安徽省北斗精准农业信息工程实验室2023年度开放基金项目：<span
                                style="font-weight: bold">“基于文本挖掘的农作物基因表型知识图谱构建方法研究”</span>，BDSY2023004，2023.04-2025.04，在研。
                        </div>
                    </li>

                    <li>
                        <div>烹饪科学四川省高等学校重点实验室2022开放基金项目: <span style="font-weight: bold">“基于多源食品数据的食谱知识图谱构建及其应用”</span>
                            (招标项目), PRKX2022Z01，2023.01-2025.12，在研。
                        </div>
                    </li>
                </ul>
            </div>

            <div class="project-item">
                <span class="project-item-name">横向项目</span>
                <ul>
                    <li>
                        <div>重庆地理信息与遥感应用中心项目：<span
                                style="font-weight: bold">“缙云山森林灭火资源知识图谱系统构建与应用”</span>，2022.01-2024.01，在研。
                        </div>
                    </li>
                </ul>
            </div>

            <div class="project-item">
                <span class="project-item-name">科研启动项目</span>
                <ul>
                    <li>
                        <div>xx项目：<span style="font-weight: bold">“xx”</span>，2023.01-2024.01，在研。
                        </div>
                    </li>
                </ul>
            </div>

            <div class="project-item">
                <span class="project-item-name">教改项目</span>
            </div>


            <!--<li>
                 <div>
                    <span style="font-weight: bold">川菜工业化四川省高等学校工程研究中心2022年度开放基金项目：“经典川菜食谱知识图谱构建方法研究” (开放基金，重点项目), GCZX22-04，2022.09-2025.09，在研。</span>
                </div>
            </li>
            <li>
                 <div>
                    <span style="font-weight: bold">四川省哲学社会科学重点研究基地——川菜发展研究中心2022年度研究项目：“双碳”目标背景下的绿色食品知识图谱构建方法研究” (开放基金，一般项目)，CC22Z05，2022.07-2024.07，在研。</span>
                </div>
            </li>-->
        </div>

        <!-- 参与 -->
        <div>
            <h3>
                <p class="project-text">主研/参与</p>
            </h3>

            <div class="project-item">
                <span class="project-item-name">省部级（含）以上科研项目</span>

                <ul>
                    <li>
                        <div>国家自然科学基金委员会，国家自然科学基金面上项目：<span
                                style="font-weight: bold">“面向复杂装备运行状态预测的网络表示学习方法研究”</span>，62376043，2024.01-2027.12，在研。
                        </div>
                    </li>

                    <li>
                        <div>国家自然科学基金委员会，国家自然科学基金面上项目：<span
                                style="font-weight: bold">“知识图谱不确定性计算与推理方法研究”</span>，2024.01-2027.12，在研。 (排名第二)
                        </div>
                    </li>

                    <li>
                        <div>国家自然科学基金委员会，国家自然科学基金面上项目：<span
                                style="font-weight: bold">“基于结构、语义先验知识的属性可控图像生成方法研究”</span>，62171111，2022.01-2024.12，在研。
                            (排名第二)
                        </div>
                    </li>
                </ul>
            </div>


            <div class="project-item">
                <span class="project-item-name">横向项目</span>
                <ul>
                    <li>
                        <div>华为公司，2022年度CCF-华为胡杨林基金-软件工程专项：<span
                                style="font-weight: bold">“面向研发数据的知识图谱构建技术研究”</span>，2022NSCQ-MSX3749，2022.09-2023.09，在研。
                        </div>
                    </li>
                </ul>
            </div>

            <div class="project-item">
                <span class="project-item-name">教改项目</span>
                <ul class="">
                    <li>
                        <div>西南大学，2022年校级教育教学改革研究项目：<span
                                style="font-weight: bold">“面向线上教学的高质量个性化教学知识图谱生成方法研究”</span>，2022JY085，2023.01-2024.12，在研。
                        </div>
                    </li>
                </ul>
            </div>
        </div>

        <!-- 已结题 -->
        <!--<div>
            <h3>
                <p class="year-text">已结题</p>
            </h3>
        </div>-->



    </div>
</template>

<style scoped>
.box-1 {
    border: 1px solid #eee;
    height: 260px;
    width: 240px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    padding: 16px;
    transition: box-shadow 0.2s ease;
}

.box-1:hover {
    box-shadow: 1px 1px 10px 1px rgb(171, 171, 171);
}

.links {
    -webkit-text-size-adjust: 100%;
    font-family: "Fira Sans", sans-serif;
    line-height: 1.8;
    font-size: 0.8em;
    display: flex;
    gap: 10px;
}

.project-text {
    /* -webkit-text-size-adjust: 100%; */
    list-style: none;
    text-align: left;
    color: #ff0000;
    word-wrap: break-word;
    white-space: pre-wrap;
    margin: 0;
    padding: 0;
    border: 0;
    font-weight: 900;
    font-size: 115%;
    font-family: Kaiti;
    /* line-height: 1.45; */
    /* font-style: italic; */
}

.project-item {
    margin: 10px 0px;
    line-height: 20px;
    font-family: KaiTi;

}


.project-item ul li div {
    font-family: KaiTi;
}

.project-item ul li div span {
    font-family: KaiTi;
}

.project-item-name {
    font-size: 16px;
    font-weight: bold;
    line-height: 26px;
    font-family: KaiTi;

}
</style>
