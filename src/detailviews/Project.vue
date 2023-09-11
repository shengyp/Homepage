
<script setup>
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
    }, {
        title: "BBBBaa",
        image: projectImg,
        description: "可自行安排形成一个具有层次结构的知识图谱。",
        paper:
            "https://link.springer.com/content/pdf/10.1007/978-3-030-10997-4_54.pdf",
        system: "https://shengyp.github.io/vmse/",
    }, {
        title: "BBBBaa",
        image: projectImg,
        description: "可自行安排形成一个具有层次结构的知识图谱。",
        paper:
            "https://link.springer.com/content/pdf/10.1007/978-3-030-10997-4_54.pdf",
        system: "https://shengyp.github.io/vmse/",
    }, {
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
    <div style="justify-content: center;width: 100%;background-color: rgb(216, 216, 216);">
        <div style="width:900px;background-color: white;padding:20px 50px;">
            <div id="project">
                <div style="display: flex;justify-content:space-between;">
                    <p>
                        <font size="5" face="Times New Roman"><strong><a name="pub">精选项目</a></strong></font>
                    </p>
                    <!-- <div style="margin-right: 20px;margin-top: 10px;">
                        <a href="">
                            <button class="more-button">
                                查看更多
                            </button>
                        </a>
                    </div> -->
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
        </div>
    </div>
</template>
