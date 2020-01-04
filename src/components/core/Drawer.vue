<template>
  <div :class="{ 'has-logo': showLogo }">
    <coreLogo v-if="showLogo" :collapse="isCollapse" />
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :default-active="activeRoute"
        :collapse="isCollapse"
        :background-color="variables.menuBg"
        :text-color="variables.menuText"
        :unique-opened="false"
        :active-text-color="variables.menuActiveText"
        :collapse-transition="false"
        mode="vertical"
        router
      >
        <coreSidebarItem
          v-for="route in routes"
          :key="route.key"
          :item="route"
        />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import variables from '@/assets/styles/variables.scss'
export default {
  computed: {
    ...mapGetters(['sidebar']),
    routes() {
      return this.$store.state.settings.routes
    },
    showLogo() {
      return this.$store.state.settings.sidebarLogo
    },
    variables() {
      return variables
    },
    isCollapse() {
      return !this.sidebar.opened
    },
    activeRoute() {
      return this.$route.path
    }
  },
  methods: {}
}
</script>
