<script setup>
import { computed, ref } from "vue";
import projectImg from '../assets/project_img.png'
import Title from '../components/Title.vue'
import Intro from '../components/Intro.vue'
import Study from '../components/Study.vue'
import Paper from '../components/Paper.vue'
import Project from '../components/Project.vue'
import Research from '../components/Research.vue'
import Teaching from '../components/Teaching.vue'
import Service from '../components/Service.vue'
import Thanks from '../components/Thanks.vue'
</script>

<template>
  <div class="bg">
    <div class="content">
      <div class="header">
        <div class="header-data">
          <div>
            <img style="width: 11vh; vertical-align: middle" src="../assets/xida.png" alt="" />
            <span style="
              font-family: KaiTi;
              font-stretch: normal;
              margin-left: 3vh;
              font-size: larger;
            "><a href="javascrpt:;">个人中文主页</a></span>
          </div>
          <div>
            <ul class="nav">
              <li>
                <a href="#intro">个人简介</a>
              </li>
              <li>
                <a href="#study">学习经历</a>
              </li>
              <li>
                <a href="#paper">代表性论文</a>
              </li>
              <li>
                <a href="#project">精选项目</a>
              </li>
              <li>
                <a href="#research">科研指导</a>
              </li>
              <li>
                <a href="#teaching">讲授课程</a>
              </li>
              <li>
                <a href="#service">学术服务</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <table align="center" width="900" class="item">


        <Title></Title>

        <!-- 个人介绍 -->
        <div id="intro">
          <Intro></Intro>
        </div>

        <!-- 学习经历 -->
        <div id="study">
          <Study></Study>
        </div>

        <!-- 论文 -->
        <div id="paper">
          <Paper></Paper>
        </div>

        <!-- 项目 -->
        <div id="project">
          <Project></Project>
        </div>

        <!-- 竞赛 -->
        <div id="research">
          <Research></Research>
        </div>

        <!-- 教学 -->
        <div id="teaching">
          <Teaching></Teaching>
        </div>

        <!-- 学术服务 -->
        <div id="service">
          <Service></Service>
        </div>

        <!-- 致谢 -->
        <div>
          <Thinks></Thinks>
        </div>


      </table>
    </div>
  </div>
</template>
<style>
* {
  font-family: Times, Serif;
}


.bg {
  background-color: rgb(216, 216, 216);
}

.content {
  margin: 0px auto;
  justify-content: center;
  width: 1000px;
  background-color: #fff;
}

p,
li {
  font-size: 16px;
}

.header {
  display: flex;
  justify-content: center;
  /* margin: 10px 10px; */
  /* width: 100%; */
}

.header-data {
  width: 900px;
  padding: 15px;
  border-bottom: 3px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* background-color: #00cc66; */
}

.nav {
  list-style: none;
  display: flex;
  width: 600px;
  justify-content: center;
  line-height: 50px;
  gap: 20px;
}

.nav li {
  font-size: medium;
  font-weight: 400;
}


ul {
  margin: 0;
}

h3 {
  margin-bottom: 12;
  margin-top: 16;
}

a:link {
  font-family: 楷体;
  text-decoration: none;
}


.more-button {
  all: unset;
  color: #f11313;
  cursor: pointer;
  font-family: Times, Serif;
  background-color: rgba(255, 255, 255, 0);
  border: 2px #f11313 solid;
  padding: 2px 10px;
  border-radius: 5px;
}

.item div {}
</style>