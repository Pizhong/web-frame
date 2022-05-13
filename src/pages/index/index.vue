<template>
  <div class="container">
    <l-menu
      ref="menu"
      :selected-keys="current"
      :menu="menu"
      @menu-click="menuClick"
    />
    <div class="nav-right">
      <div class="p-header">
        <div class="p-header-item">平台总览</div>
        <div class="p-header-item">账户总览</div>

        <div class="p-header-right">
          <l-icon class="p-header-right-icon" type="shopping" />
          <l-dropdown>
            <div>用户名称<l-icon type="down" /></div>
            <template slot="menuItem">
              <l-dropdown-item item-key="1" :is-drop="true">
                个人信息
              </l-dropdown-item>
              <l-dropdown-item key="2" :is-drop="true">
                退出登录
              </l-dropdown-item>
            </template>
          </l-dropdown>
        </div>
      </div>
      <div class="p-body">
        <l-tabs
          v-model="activeKey"
          type="editable-card"
          :hide-add="true"
          style="max-width: 100%;"
          @edit="onEdit"
          @change="changeTabs"
        >
          <l-tab-pane
            v-for="item in tabs"
            :key="item.url"
            :tab="item.title"
            :closable="item.closable"
          />
        </l-tabs>
        <div class="p-content">
          <l-page-header
            :title="$route.meta.title"
            :sub-title="$route.meta.subtitle"
          />
          <div class="l-p-24 l-pt-0">
            <keep-alive>
              <router-view v-if="$route.meta.keepAlive" />
            </keep-alive>
            <router-view v-if="!$route.meta.keepAlive" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      current: ['1'],
      menu: [
        {
          id: 1,
          name: '系统一',
          url: '/system-one/index',
        },
        {
          id: 2,
          name: '系统二',
          url: '/system-two/index',
        }
      ],
      activeKey: '/',
      tabs: [
        { title: '首页', url: '/', closable: false }
      ],

      include: ['/']
    }
  },

  watch: {
    $route() {
      this.addTabs()
    }
  },

  mounted() {
    setTimeout(() => {
      this.addTabs()
    }, 0)
  },

  methods: {
    menuClick(e) {
      if (this.current.indexOf(e.parentId) !== -1) {
        this.current.push(e.id)
      } else {
        this.current = [e.id]
      }
      this.$router.push(e.url)
    },
    onEdit(targetKey, action) {
      this[action](targetKey)
    },
    remove(key) {
      this.tabs.some((item, index) => {
        if (item.url === key) {
          this.tabs.splice(index, 1)
          return true
        }
      })
    },
    changeTabs() {
      if (this.activeKey !== this.$route.path) {
        this.$toPage(this.activeKey)
      }
    },
    addTabs() {
      if (this.$route.path === '/') {
        return
      }
      const exist = this.tabs.find(item => item.url === this.$route.path)
      if (exist) {
        this.activeKey = this.$route.path
        this.changeTabs()
        return
      }
      this.tabs.push({
        title: this.$route.name,
        url: this.$route.path,
        closable: true
      })
      this.activeKey = this.$route.path
      this.changeTabs()
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  height: 100vh;
  .nav-left {
    display: flex;
    flex-direction: column;
    width: 200px;
    background: #001529;
    transition: 0.15s;
    &.breviary {
      width: 80px;
    }
    .nav-left-logo {
      height: 60px;
      line-height: 60px;
      color: #1890ff;
      font-size: 24px;
      padding: 0 24px 0;
      cursor: pointer;
      .nav-logo {
        display: inline-block;
        width: 100px;
        margin-left: 12px;
        user-select: none;
      }
    }
    .nav-left-menu {
      flex: 1%;
    }
  }
  .nav-right {
    flex: 1%;
    display: flex;
    flex-direction: column;
    width: 100%;
    overflow: auto;
    .p-header {
      height: 60px;
      max-height: 60px;
      min-height: 60px;
      padding: 0 20px;
      box-shadow: 0 2px 8px 0 #e6e6e6;
      .p-header-item {
        display: inline-block;
        min-width: 100px;
        line-height: 60px;
        cursor: pointer;
        vertical-align: top;
        text-align: center;
      }
      .p-header-right {
        float: right;
        line-height: 60px;
        display: flex;
        .p-header-right-icon {
          line-height: 60px;
          margin-right: 20px;
          cursor: pointer;
          &:hover {
            color: #1890ff;
          }
        }
      }
    }
    .p-body {
      flex: 1%;
      box-sizing: border-box;
      padding: 20px;
      background: #f2f5f6;
      .p-content {
        background: #ffffff;
        height: calc(100% - 40px);
      }
    }
  }
}
</style>
