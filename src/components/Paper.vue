<script setup>
import { computed, ref } from "vue";

const newPublicationsList = [
    {
        year: 2023,
        data: [
            {
                J: [
                ],
                C: [
                    {
                        id: 11,
                        u1: ["Jinze Sun",
                            "Yongpan Sheng<sup>#‡</sup>",
                            "Ling Zhan",
                            "and Lirong He"
                        ],
                        year: 2023,
                        bib: "1.bib",
                        pdf: "",
                        abs: "",
                        title:
                            "TemT: A New Temporal Knowledge Graph Completion Method with Transformer Hawkes Process and Random Walk Aggregation Strategy",
                        text: "The 2023 International Conference on Neural Information Processing (ICONIP). Changsha, China, November 20-23, 2023.",
                        red: ""
                    }

                ],
                others: [

                ],
            }
        ],
    },
    {
        year: 2022,
        data: [
            {
                J: [
                    {
                        id: 12,
                        u1: [
                            "Lirong He",
                            "Yongpan Sheng*",
                            "Hekai Zhang",
                            "Meng Chen",
                            "and Jiatian Pi",
                        ],
                        year: 2022,
                        bib: "1.bib",
                        pdf: "",
                        abs: "",
                        title:
                            "Semantic-Path Guided Graph Neural Network for Heterogeneous Graph Embedding",
                        text: "Mathmetics.",
                        red: "",
                    },
                    {
                        id: 11,
                        u1: ["Hao Zhou",
                            "Zekai Chen",
                            "Yun Liu",
                            "Yongpan Sheng",
                            "Wenqi Ren",
                            "and Hailing Xiong"
                        ],
                        year: 2022,
                        bib: "1.bib",
                        abs: "",
                        pdf: "https://www.sciencedirect.com/science/article/abs/pii/S0950705123001600",
                        title:
                            "Physical-priors-guided DehazeFormer",
                        text: "Knowledge-Based Systems, 2022.",
                        red: "<br/> SCI, 中科院一区, JCR Q1",
                    }

                ],
                C: [
                    {
                        id: 10,
                        u1: ["Yongpan Sheng",
                            "and Lirong He"
                        ],
                        title: "A Short Survey on Deep Learning-Based Open Relation Extraction: Recent Advances, Resources and Perspective",
                        bib: "1.bib",
                        abs: "",
                        pdf: "",
                        year: 2022,
                        text: "",
                        red: "",
                    }

                ],
                others: [
                ]
            }
        ],
    },
    {
        year: 2021,
        data: [
            {
                J: [
                    {
                        id: 10,
                        u1: [
                            "Jiasheng Zhang",
                            "Shuang Liang",
                            "Yongpan Sheng",
                            "Jie Shao*"
                        ],
                        bib: "1.bib",
                        abs: "",
                        pdf: "https://www.sciencedirect.com/science/article/abs/pii/S0950705122006141",
                        year: 2022,
                        title:
                            "Temporal knowledge graph representation learning with local and global evolutions",
                        text: "Knowledge-Based Systems (KBS).",
                        red: "<br/> SCI, 中科院一区, JCR Q1",
                    },
                    {
                        id: 9,
                        u1: [
                            "Meng Chen",
                            "Jiaxin Hou",
                            "Yongpan Sheng",
                            "Yingbo Wu*",
                            "Sen Wang",
                            "Jianyuan Lu",
                            "and Qilin Fan",
                        ],
                        bib: "1.bib",
                        abs: "",
                        pdf: "https://www.sciencedirect.com/science/article/abs/pii/S0167739X2300208X",
                        year: 2023,
                        title:
                            "HA-D3QN: Embedding Virtual Private Cloud in Cloud Data Centers with Heuristic Assisted Deep Reinforcement Learning",
                        text: "Future Generation Computer Systems (FGCS).",
                        red: "<br/> SCI, 中科院二区, JCR Q1",
                    }
                ],
                C: [
                    {
                        id: 9,
                        u1: ["Peng Zhao",
                            "Yongpan Sheng",
                            "and Xiaohui Zhan*"],
                        title: " An advanced NMF-based approach for single cell data clustering",
                        bib: "1.bib",
                        abs: "",
                        pdf: "https://ieeexplore.ieee.org/document/9828919",
                        year: 2022,
                        text: " The 2022 2nd International Conference on Information Communication and Software Engineering (ICICSE-22). Chongqing, China, March 18-20, 2022 (EI Indexed)",
                        red: "",
                    }

                ],
                others: [

                ],
            }
        ],
    },
    {
        year: 2020,
        data: [
            {
                J: [
                    {
                        id: 8,
                        u1: ["Yongpan Sheng",
                            "Lirong He",
                            "Jie Shao"
                        ],
                        title:
                            "A Hybrid Neural Network Model for Hypernym-hyponym Relation Identification",
                        year: 2020,
                        abs: "",
                        bib: "1.bib",
                        pdf: "",
                        text: "Information Sciences (IS), 2020.",
                        red: "",
                    },
                    {
                        id: 7,
                        u1: ["Guanglin Niu",
                            "Bo Li",
                            "Yongfei Zhang*",
                            "Yongpan Sheng",
                            "Chuan Shi",
                            "Jingyang Li",
                            "and Shiliang Pu"
                        ],
                        title:
                            "Joint Semantics and Data-Driven Path Representation for Knowledge Graph Inference",
                        year: 2022,
                        abs: "",
                        bib: "1.bib",
                        pdf: "https://www.sciencedirect.com/science/article/abs/pii/S0925231222001515",
                        text: "Neurocomputing, 2022, 483: 249-261.",
                        red: "<br/> SCI, 中科院二区",
                    }
                ],
                C: [
                    {
                        id: 8,
                        u1: ["Jiasheng Zhang",
                            "Yongpan Sheng*",
                            "Zheng Wang",
                            "and Jie Shao"
                        ],
                        bib: "1.bib",
                        abs: "",
                        pdf: "https://link.springer.com/content/pdf/10.1007/978-3-030-60259-8_16.pdf",
                        year: 2020,
                        title:
                            " TKGFrame: A Two-Phase Framework for Temporal-Aware Knowledge Graph Completion",
                        text: "The 4th Asia Pacific Web and Web-Age Information Management Joint Conference on Web and Big Data (APWeb-WAIM-20). Tianjin, China, August 12-14, 2020",
                        red: "",
                    }
                ],
                others: [
                    {
                        id: 1,
                        u1: ["盛泳潘"],
                        bib: "1.bib",
                        abs: "",
                        pdf: "https://kns.cnki.net/kcms/detail/detail.aspx?dbcode=CDFD&dbname=CDFDLAST2021&filename=1020354617.nh&v=oMy0dWvtjcXNyI6akpSHi6ok3oycZvF%25mmd2FjmzfZewldyCwyzhAnnfFpjzJFiCSS1oQ",
                        year: 2020,
                        title:
                            "面向知识图谱的学习算法研究与应用",
                        text: "知网",
                        red: "<br/> 博士学位论文",
                    }
                ],
            }
        ],
    },
    {
        year: 2019,
        data: [
            {
                J: [
                    {
                        id: 6,
                        u1: ["Yongpan Sheng",
                            "Zenglin Xu*",
                            "Yafang Wang",
                            "Gerard de Melo*"
                        ],
                        title:
                            "Multi-document semantic relation extraction for news analytics",
                        year: 2020,
                        abs: "",
                        bib: "1.bib",
                        pdf: "https://link.springer.com/content/pdf/10.1007/s11280-020-00790-2.pdf",
                        text: "World Wide Web-Internet and Web Information Systems (WWW Journal), 2020, 23: 2043-2077.",
                        red: "<br/> SCI, CCF-B类期刊",
                    },
                    {
                        id: 5,
                        u1: ["Yongpan Sheng",
                            "Meng Wang*",
                            "Tianxing Wu",
                            "and Han Xu"],
                        year: 2019,
                        bib: "1.bib",
                        abs: "",
                        pdf: "https://link.springer.com/content/pdf/10.1007/s10489-018-1380-2.pdf",
                        title:
                            "Adaptive Local Learning Regularized Nonnegative Matrix Factorization",
                        text: "Applied Intelligence, 2019, 49: 2051-2168.",
                        red: "<br/> SCI, 中科院二区, JCR Q2",
                    }
                ],
                C: [
                    {
                        id: 7,
                        u1: ["Yongpan Sheng",
                            "Tianxing Wu",
                            "and Xin Wang*"],
                        year: 2019,
                        bib: "1.bib",
                        abs: "",
                        pdf: "https://link.springer.com/content/pdf/10.1007/978-3-030-41407-8_1.pdf",
                        title:
                            "Incorporating Term Definitions for Taxonomic Relation Identification",
                        text: "Proceedings of the 9th Joint International Semantic Technology Conference (JIST), 2019: 1-17.",
                        red: "<br />EI检索，入选封面论文",
                    },
                    {
                        id: 6,
                        u1: ["Yongpan Sheng",
                            "Haojie Huang"
                        ],
                        year: 2019,
                        bib: "1.bib",
                        abs: "",
                        pdf: "https://conference.cipsc.org.cn/smp2019/accepted-papers.html",
                        title:
                            "A framework for graph-based multi-document relation exploration: a case study on the news datasets",
                        text: "Proceedings of the 8th National Conference on Social Media Processing (SMP), 2019, Shenzhen, China.",
                        red: "",
                    },
                    {
                        id: 5,
                        u1: ["Yongpan Sheng",
                            "Zenglin Xu*"
                        ],
                        year: 2019,
                        bib: "1.bib",
                        abs: "",
                        pdf: "https://link.springer.com/content/pdf/10.1007/978-3-030-26072-9_30.pdf",
                        title:
                            "Coherence and Salience-Based Multi-Document Relationship Mining",
                        text: "Proceedings of the 3rd Asia Pacific Web and Web-Age Information Management Joint Conference on Web and Big Data (APWeb-WAIM), 2019: 414-430.",
                        red: "",
                    }
                ],
                others: [
                ],
            }
        ],
    },
    {
        year: 2018,
        data: [
            {
                J: [
                    {
                        id: 4,
                        u1: ["盛泳潘",
                            "吴天星",
                            "付雪峰*"
                        ],
                        year: 2020,
                        bib: "1.bib",
                        abs: "",
                        pdf: "https://www.arocmag.com/article/01-2020-01-004.html",
                        title: "基于开放域抽取的多文档概念图构建研究",
                        text: "计算机应用研究, 2020, 37(1): 19-25. ",
                        red: "",
                    },
                    {
                        id: 3,
                        u1: ["Lirong He",
                            "Bin Liu",
                            "Guangxi Li",
                            "Yongpan Sheng",
                            "Yafang Wang",
                            "and Zenglin Xu*"],
                        year: 2018,
                        bib: "1.bib",
                        abs: "",
                        pdf: "https://link.springer.com/content/pdf/10.1007/s12559-018-9565-x.pdf",
                        title:
                            "Knowledge Base Completion by Variational Bayesian Neural Tensor Decomposition",
                        text: "Cognitive Computation, 2018, 10: 1075-1084.",
                        red: "<br/> SCI, 中科院二区, JCR Q2",
                    },
                    {
                        id: 2,
                        u1: ["Han Xu*",
                            "Xiwei Qiu",
                            "Yongpan Sheng",
                            "Liang Luo",
                            "Yanping Xiang*"
                        ],
                        year: 2018,
                        bib: "1.bib",
                        abs: "",
                        pdf: "https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=8391708",
                        title:
                            "A Qos-driven Approach for Cloud Service Addressing Attribute of Security",
                        text: "IEEE Access, 2018, 6: 34477-34487.",
                        red: "",
                    }
                ],
                C: [
                    {
                        id: 4,
                        u1: [
                            "Yongpan Sheng",
                            "Zenglin Xu*",
                            "Yafang Wang",
                            "Xiangyu Zhang",
                            "Jia Jia",
                            "Zhonghui You",
                            "and Gerard de Melo"
                        ],
                        bib: "1.bib",
                        pdf: "https://link.springer.com/content/pdf/10.1007/978-3-030-10997-4_54.pdf",
                        abs: "",
                        year: 2019,
                        title:
                            "Visualizing Multi-Document Semantics via Open Domain Information Extraction",
                        text: "The European Conference on Machine Learning and Principles and Practice of Knowledge Discovery in Databases (ECML-PKDD-18). Dublin, Ireland, September 10-14, 2018.",
                        red: "<br/> CCF-B类会议 (Demonstration Paper)",
                    }

                ],
                others: [
                ],
            }
        ],
    },
    {
        year: 2017,
        data: [
            {
                J: [

                ],
                C: [
                    {
                        id: 3,
                        u1: [
                            "Yazhou Ren",
                            "Peng Zhao",
                            "Yongpan Sheng",
                            "Dezhong Yao",
                            "and Zenglin Xu",
                        ],
                        bib: "1.bib",
                        pdf: "https://www.ijcai.org/Proceedings/2017/0368.pdf",
                        abs: "",
                        year: 2017,
                        title:
                            "A Robust Softmax Regression for Multi-class Classification with Self-Paced Learning",
                        text: "The 26th International Joint Conference on Artificial Intelligence (IJCAI-17). Melbourne, Australia, August 19-25, 2017.",
                        red: "<br/> CCF-A类会议",
                    }
                ],
                others: [
                ]
            }
        ]
    },
    {
        year: 2016,
        data: [
            {
                J: [
                    {
                        id: 1,
                        u1: ["徐增林",
                            "盛泳潘<sup>†</sup>",
                            "贺丽荣",
                            "王雅芳"
                        ],
                        title: "知识图谱技术综述",
                        year: 2016,
                        bib: "1.bib",
                        pdf: "http://www.juestc.uestc.edu.cn/cn/article/doi/10.3969/j.issn.1001-0548.2016.04.012",
                        abs: "",
                        text: "电子科技大学学报, 2016, 24(4): 589-606.",
                        red: "<br/> 2009-2018年《电子科技大学学报》10篇“最具影响力论文”",
                    }
                ],
                C: [
                    {
                        id: 2,
                        u1: [
                            "Yongpan Sheng",
                            "Yangyang Wang",
                            "Lu Wang",
                            "Gaofeng Zhao"
                        ],
                        bib: "1.bib",
                        pdf: "https://ieeexplore.ieee.org/document/8079812",
                        abs: "",
                        year: 2016,
                        title:
                            "A comparison of learning rules in pulse-based neural networks",
                        text: "The 13th International Computer Conference on Wavelet Active Media Technology and Information Processing (ICCWAMTIP-16). Chengdu, China, December 16-18, 2016 (EI Indexed)",
                        red: "",
                    },
                    {
                        id: 1,
                        u1: [
                            "Xiaojia Pan",
                            "Lei Wu",
                            "Dean Wu",
                            "Yongpan Sheng"
                        ],
                        bib: "1.bib",
                        pdf: "https://ieeexplore.ieee.org/document/7493905",
                        abs: "",
                        year: 2016,
                        title:
                            "Ant colony Optimization of Virtual Machine Placement for Data Latency Minimization in Cloud Systems",
                        text: "The 12nd International Computer Conference on Wavelet Active Media Technology and Information Processing (ICCWAMTIP-15). Chengdu, China, December 18-20, 2016 (EI Indexed)",
                        red: "",
                    }
                ],
                others: [
                ]
            }
        ]
    }
]



</script>
<template>
    <br>
    <hr>
    <p id="paper" style="margin-top: 10px">
    <div style="display: flex;justify-content:space-between;">
        <font size="5" face="Times New Roman"><strong><a name="pub">代表性论文</a></strong>
        </font>

        <div style="margin-right: 20px;">
            <router-link to="/paper">
                <button class="more-button">
                    查看更多
                </button>
            </router-link>
        </div>
    </div>

    <!-- <br /> -->
    <font size="3" style="margin-top: 2vh; display: inline-block">
        [ <sup>#</sup>通讯作者, <sup>‡</sup>学生导师,
        <sup>†</sup>学生一作, <sup>*</sup> 共一]
    </font>


    <div style="margin: 10px 20px 10px 10px;border: 1px solid black;padding: 1px;">
        <span style="color: red; font-size: 20px; border: 2px">
            Call for paper：
        </span>
        <br />
        <div>
            <span style="margin: 0px 25px 10px 20px">
                <strong>We are organizing a <a class="speical_issue_file_link_1" target="_blank"
                        style="text-decoration: none"
                        href="https://www.mdpi.com/journal/entropy/special_issues/82WTZCNLE4">special issue (opens the new
                        window)</a> on Information Network Mining and Applications in the Entropy Journal. Welcome your
                    submission.</strong>
            </span>
        </div>
        <div>
            <span style="margin-left: 20px">
                <strong>We are organizing a <a class="speical_issue_file_link_1" target="_blank"
                        style="text-decoration: none"
                        href="https://www.mdpi.com/journal/applsci/special_issues/R9I1DGV3A2">special issue (opens the new
                        window)</a> on New Advances for Open-Domain Information Mining in Theories and Applications in the
                    Applied Sciences-Basel Journal. Welcome your submission.</strong>
            </span>
        </div>
    </div>

    </p>
    <ul style="list-style: none;">
        <div v-for="year in newPublicationsList" style="all: unset;">
            <li :key="index" v-for="data in year.data">
                <div v-if="data.C != []">
                    <div v-for="item in data.C">
                        <!-- {{ item }} -->
                        <div>
                            <div class="item-c" v-if="item">C{{ item.id }}</div>
                            <span style="margin-left: 10px">
                                <strong>{{ item.title }}</strong>
                            </span>
                        </div>
                        <div>
                            <span :key="index" v-for="(name, index) in item.u1">
                                <span v-if="name.includes('盛泳潘') ||
                                    name.includes('Yongpan Sheng')
                                    " style="font-weight: bold; margin-right: 0px" v-html="name"></span>
                                <span v-else style="margin-right: 0px" v-html="name"></span>
                                <span v-if="item.u1.indexOf(name) < item.u1.length - 1">, </span>
                            </span>
                        </div>
                        <div>
                            <span>{{ item.text }}</span>
                            <span style="color: red"><strong v-html="item.red"></strong>

                            </span>
                        </div>

                        <div style="display: flex; gap: 10px; margin: 5px 0px">
                            <div>
                                <a class="file_link" :href="item.pdf" target="_blank" style="text-decoration: none">
                                    <icon-file-pdf />
                                    <span>
                                        PDF
                                    </span>
                                </a>
                            </div>
                            <div>
                                <a class="file_link" :href="item.abs" target="_blank" style="text-decoration: none">
                                    <el-icon style="width: 10px">
                                        <Memo style="width: 10px" />
                                    </el-icon>
                                    <span>
                                        Abstract
                                    </span>
                                </a>
                            </div>
                            <div>
                                <a class="file_link" :href="item.bib" target="_blank" style="text-decoration: none">
                                    <el-icon style="width: 10px">
                                        <Notebook style="width: 10px" />
                                    </el-icon>
                                    <span>
                                        BibTex
                                    </span>
                                </a>
                            </div>
                        </div>
                        <div>
                            <!-- <div class="item-c" v-if="item">J{{ item.id }}</div>
                                    <span style="margin-left: 10px">
                                        <strong>{{ item.title }}</strong>
                                    </span> -->
                        </div>
                    </div>
                </div>
                <div v-if="data.J != []">
                    <div v-for="item in data.J">
                        <!-- {{ item }} -->
                        <div>
                            <div class="item-c" v-if="item">J{{ item.id }}</div>
                            <span style="margin-left: 10px">
                                <strong>{{ item.title }}</strong>
                            </span>
                        </div>
                        <div>
                            <span :key="index" v-for="(name, index) in item.u1">
                                <span v-if="name.includes('盛泳潘') ||
                                    name.includes('Yongpan Sheng')
                                    " style="font-weight: bold; margin-right: 0px" v-html="name"></span>
                                <span v-else style="margin-right: 0px" v-html="name"></span>
                                <span v-if="item.u1.indexOf(name) < item.u1.length - 1">, </span>
                            </span>
                        </div>
                        <div>
                            <span>{{ item.text }}</span>
                            <span style="color: red"><strong v-html="item.red"></strong>

                            </span>
                        </div>

                        <div style="display: flex; gap: 10px; margin: 5px 0px">
                            <div>
                                <a class="file_link" :href="item.pdf" target="_blank" style="text-decoration: none">
                                    <icon-file-pdf />
                                    <span>
                                        PDF
                                    </span>
                                </a>
                            </div>
                            <div>
                                <a class="file_link" :href="item.abs" target="_blank" style="text-decoration: none">
                                    <el-icon style="width: 10px">
                                        <Memo style="width: 10px" />
                                    </el-icon>
                                    <span>
                                        Abstract
                                    </span>
                                </a>
                            </div>
                            <div>
                                <a class="file_link" :href="item.bib" target="_blank" style="text-decoration: none">
                                    <el-icon style="width: 10px">
                                        <Notebook style="width: 10px" />
                                    </el-icon>
                                    <span>
                                        BibTex
                                    </span>
                                </a>
                            </div>
                        </div>
                        <div>
                            <!-- <div class="item-c" v-if="item">J{{ item.id }}</div>
                                    <span style="margin-left: 10px">
                                        <strong>{{ item.title }}</strong>
                                    </span> -->
                        </div>
                    </div>
                </div>
                <div v-if="data.others != []">
                    <div v-for="item in data.others">
                        <!-- {{ item }} -->
                        <div>
                            <div class="item-c" v-if="item">others{{ item.id }}</div>
                            <span style="margin-left: 10px">
                                <strong>{{ item.title }}</strong>
                            </span>
                        </div>
                        <div>
                            <span :key="index" v-for="(name, index) in item.u1">
                                <span v-if="name.includes('盛泳潘') ||
                                    name.includes('Yongpan Sheng')
                                    " style="font-weight: bold; margin-right: 0px" v-html="name"></span>
                                <span v-else style="margin-right: 0px" v-html="name"></span>
                                <span v-if="item.u1.indexOf(name) < item.u1.length - 1">, </span>
                            </span>
                        </div>
                        <div>
                            <span>{{ item.text }}</span>
                            <span style="color: red"><strong v-html="item.red"></strong>

                            </span>
                        </div>

                        <div style="display: flex; gap: 10px; margin: 5px 0px">
                            <div>
                                <a class="file_link" :href="item.pdf" target="_blank" style="text-decoration: none">
                                    <icon-file-pdf />
                                    <span>
                                        PDF
                                    </span>
                                </a>
                            </div>
                            <div>
                                <a class="file_link" :href="item.abs" target="_blank" style="text-decoration: none">
                                    <el-icon style="width: 10px">
                                        <Memo style="width: 10px" />
                                    </el-icon>
                                    <span>
                                        Abstract
                                    </span>
                                </a>
                            </div>
                            <div>
                                <a class="file_link" :href="item.bib" target="_blank" style="text-decoration: none">
                                    <el-icon style="width: 10px">
                                        <Notebook style="width: 10px" />
                                    </el-icon>
                                    <span>
                                        BibTex
                                    </span>
                                </a>
                            </div>
                        </div>
                        <div>
                            <!-- <div class="item-c" v-if="item">J{{ item.id }}</div>
                                    <span style="margin-left: 10px">
                                        <strong>{{ item.title }}</strong>
                                    </span> -->
                        </div>
                    </div>
                </div>
                <!-- <br /> -->
            </li>
        </div>
    </ul>
</template>
<style scoped>
.item-c {
    display: inline-block;
    margin: 0rem 0 0rem -30px;
    border-radius: 4px;
    border: 1px solid black;
    font-size: 93%;
    font-weight: bold;
    padding: 0px 1px 0px 1px;
}

.file_link {
    -webkit-text-size-adjust: 100%;
    line-height: 1.5;
    font-weight: 400;
    cursor: pointer;
    font-family: "Raleway", "HelveticaNeue", "Helvetica Neue", Helvetica, Arial,
        sans-serif;
    list-style: decimal;
    list-style-position: outside;
    background-color: #dad0ab;
    border-radius: 3px;
    color: #fcfcfc;
    padding: 2px 5px;
    font-size: smaller;
    text-decoration: none;
}

.speical_issue_file_link {
    -webkit-text-size-adjust: 100%;
    line-height: 1.5;
    font-weight: 400;
    cursor: pointer;
    font-family: "Raleway", "HelveticaNeue", "Helvetica Neue", Helvetica, Arial,
        sans-serif;
    list-style: decimal;
    list-style-position: outside;
    background-color: #dad0ab;
    border-radius: 3px;
    color: #fcfcfc;
    padding: 2px 5px;
    font-size: smaller;
    text-decoration: none;
}

.speical_issue_file_link_1 {
    -webkit-text-size-adjust: 100%;
    line-height: 1.5;
    font-weight: 400;
    cursor: pointer;
    font-family: "Raleway", "HelveticaNeue", "Helvetica Neue", Helvetica, Arial,
        sans-serif;
    list-style: decimal;
    list-style-position: outside;
    background-color: #51c5f4;
    border-radius: 3px;
    color: #fcfcfc;
    padding: 2px 5px;
    font-size: smaller;
    text-decoration: none;
}


.file_link:hover {
    color: #1d5a89;
}
</style>
