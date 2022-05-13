<template>
  <div class="login-container">
    登录页面
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },

  mounted() {
    this.$store.dispatch('test')
  },

  methods: {}
}
</script>

<style lang="scss" scoped>
.login-container {
  font-size: 14px;
}
</style>
