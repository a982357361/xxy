<template>
  <div :style="`height:${windowHeight}px`">
    <el-row class="top-row">
      <el-col :span="8">
        <div class="title">
          Vue模板~Yin
          <i
            @click="btnIsCollapse"
            :class="isCollapse ? 'el-icon-s-fold' : 'el-icon-s-unfold'"
          ></i>
        </div>
      </el-col>
      <el-col :span="4" :offset="12"><div>2</div></el-col>
    </el-row>

    <el-row class="content-row">
      <el-col :span="4" class="full-height">
        <el-menu
          class="el-menu-vertical-demo home-menu full-height"
          background-color="#222324"
          text-color="#8e8e8e"
          active-text-color="#ffd04b"
          v-show="isCollapse"
        >
          <el-scrollbar class="menu-scroll">
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>导航一</span>
              </template>
              <el-menu-item-group>
                <template slot="title">分组一</template>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group>
                <template slot="title">分组一</template>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group>
                <template slot="title">分组一</template>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group>
                <template slot="title">分组一</template>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group>
                <template slot="title">分组一</template>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="分组2">
                <el-menu-item index="1-3">选项3</el-menu-item>
              </el-menu-item-group>
              <el-submenu index="1-4">
                <template slot="title">选项4</template>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span slot="title">导航二</span>
            </el-menu-item>
            <el-menu-item index="3">
              <i class="el-icon-document"></i>
              <span slot="title">导航三</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-setting"></i>
              <span slot="title">导航四</span>
            </el-menu-item>
          </el-scrollbar>
        </el-menu>
      </el-col>

      <el-col :span="20" class="full-height">
        <!-- <router-link to="A">122</router-link>
        <router-link to="B">122</router-link> -->
        <el-tabs type="border-card">
          <el-tab-pane label="用户管理">用户管理</el-tab-pane>
          <el-tab-pane label="配置管理" closable
            >配置管理
            <router-view name="namea"></router-view>
          </el-tab-pane>
          <el-tab-pane label="角色管理"
            >角色管理
            <router-view name="nameb"></router-view>
          </el-tab-pane>
          <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
        </el-tabs>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      windowHeight: 500, //整个页面高度
      isCollapse: true, //左侧导航栏是否收缩
    };
  },
  methods: {
    btnIsCollapse() {
      //点击收缩导航栏事件
      this.isCollapse = !this.isCollapse;
    },
  },
  created() {
    this.windowHeight = window.innerHeight - 20; //计算页面整体高度
  },
};
</script>

<style lang="less" scoped>
.content-row {
  height: 93%;
  .full-height {
    height: 100%;
  }
}
.home-menu {
  // width: 15rem;
}

.top-row {
  height: 7%;
  line-height: 40px;
  background: #111;
  color: #fff;
  i {
    margin-left: 66px;
    line-height: 40px;
    cursor: pointer;
  }
  .title {
    margin-left: 20px;
  }
}

.menu-scroll {
  height: 100%;
  /deep/ .el-scrollbar__wrap {
    overflow-x: hidden;
  }
}
</style>