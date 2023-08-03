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
                </a>
            </div>
        </div>

        <div>
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
        </div>

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
</style>
